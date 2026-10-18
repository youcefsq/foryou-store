const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "store-data.json");

// تهيئة ملف البيانات المحلي لحفظ الطلبات وإعدادات تيليجرام المشتركة
function readData() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      const initial = { telegram: { botToken: "", chatId: "" }, orders: [] };
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), "utf8");
      return initial;
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (e) {
    return { telegram: { botToken: "", chatId: "" }, orders: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

function formatDZD(amount) {
  return `${Number(amount).toLocaleString("fr-DZ")} د.ج`;
}

async function sendTelegramNotification(order, telegramConfig) {
  if (!telegramConfig || !telegramConfig.botToken || !telegramConfig.chatId) {
    return false;
  }

  try {
    const itemsLines = (order.items || [])
      .map((i) => `• ${i.name} (الكمية: ${i.qty}) — ${formatDZD(i.price * i.qty)}`)
      .join("\n");

    const deliveryLabel =
      order.deliveryType === "home"
        ? "🏠 توصيل إلى باب المنزل"
        : "🏢 مكتب التوصيل (Stop Desk)";

    const message =
      `🔔 *طلب جديد في متجر Foryou!*\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `🆔 *رقم الطلب:* \`${order.orderNumber}\`\n` +
      `👤 *الزبون:* ${order.customerName}\n` +
      `📞 *الهاتف:* \`${order.phone}\`${order.phone2 ? ` / \`${order.phone2}\`` : ""}\n` +
      `📍 *الولاية:* ${order.wilayaCode} - ${order.wilayaName}\n` +
      `🏘️ *البلدية:* ${order.commune}\n` +
      (order.address ? `🗺️ *العنوان:* ${order.address}\n` : "") +
      `🚚 *التوصيل:* ${deliveryLabel} (${formatDZD(order.shippingCost)})\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `🛍️ *المنتجات المطلوبة:*\n${itemsLines}\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `💰 *المبلغ الإجمالي عند الاستلام:* *${formatDZD(order.grandTotal)}*`;

    const res = await fetch(
      `https://api.telegram.org/bot${telegramConfig.botToken.trim()}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramConfig.chatId.trim(),
          text: message,
          parse_mode: "Markdown"
        })
      }
    );
    const result = await res.json();
    return Boolean(result && result.ok);
  } catch (err) {
    console.error("Telegram API Error:", err.message);
    return false;
  }
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // API: جلب أو حفظ إعدادات تيليجرام وواتساب والرمز السري والبيكسل وأسعار التوصيل
  if (pathname === "/api/config") {
    if (req.method === "GET") {
      const data = readData();
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(
        JSON.stringify(
          data.telegram || {
            botToken: "",
            chatId: "",
            whatsapp: "0550000000",
            adminPin: "1234",
            fbPixelId: "",
            tiktokPixelId: "",
            shippingRates: {}
          }
        )
      );
      return;
    }
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        try {
          const payload = JSON.parse(body || "{}");
          const data = readData();
          const prev = data.telegram || {};
          data.telegram = {
            botToken:
              payload.botToken !== undefined ? String(payload.botToken).trim() : prev.botToken || "",
            chatId:
              payload.chatId !== undefined ? String(payload.chatId).trim() : prev.chatId || "",
            whatsapp:
              payload.whatsapp !== undefined
                ? String(payload.whatsapp).trim()
                : prev.whatsapp || "0550000000",
            adminPin:
              payload.adminPin !== undefined
                ? String(payload.adminPin).trim()
                : prev.adminPin || "1234",
            fbPixelId:
              payload.fbPixelId !== undefined
                ? String(payload.fbPixelId).trim()
                : prev.fbPixelId || "",
            tiktokPixelId:
              payload.tiktokPixelId !== undefined
                ? String(payload.tiktokPixelId).trim()
                : prev.tiktokPixelId || "",
            shippingRates:
              payload.shippingRates !== undefined
                ? payload.shippingRates
                : prev.shippingRates || {}
          };
          writeData(data);
          res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
          res.end(JSON.stringify({ ok: true, telegram: data.telegram }));
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: false }));
        }
      });
      return;
    }
  }

  // API: جلب الطلبات أو إضافة طلب جديد أو تحديث الطلبات
  if (pathname === "/api/orders") {
    if (req.method === "GET") {
      const data = readData();
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(data.orders || []));
      return;
    }
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", async () => {
        try {
          const newOrder = JSON.parse(body || "{}");
          const data = readData();
          const sent = await sendTelegramNotification(newOrder, data.telegram);
          newOrder.telegramSent = sent;
          data.orders.unshift(newOrder);
          writeData(data);
          res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
          res.end(JSON.stringify({ ok: true, telegramSent: sent, order: newOrder }));
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: false }));
        }
      });
      return;
    }
    if (req.method === "PUT") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        try {
          const updatedOrders = JSON.parse(body || "[]");
          const data = readData();
          data.orders = Array.isArray(updatedOrders) ? updatedOrders : data.orders;
          writeData(data);
          res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
          res.end(JSON.stringify({ ok: true }));
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: false }));
        }
      });
      return;
    }
  }

  // API: جلب أو حفظ قائمة المنتجات المخصصة
  if (pathname === "/api/products") {
    if (req.method === "GET") {
      const data = readData();
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(data.products || null));
      return;
    }
    if (req.method === "PUT") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        try {
          const productsList = JSON.parse(body || "null");
          const data = readData();
          data.products = Array.isArray(productsList) ? productsList : null;
          writeData(data);
          res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
          res.end(JSON.stringify({ ok: true }));
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: false }));
        }
      });
      return;
    }
  }

  // تقديم ملفات المتجر الثابتة
  let filePath = pathname === "/" ? "/index.html" : pathname;
  const safePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, "");
  const fullPath = path.join(__dirname, safePath);

  if (!fullPath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 - الملف غير موجود");
      return;
    }
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(content);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Foryou Store Server running on http://127.0.0.1:${PORT}`);
});
