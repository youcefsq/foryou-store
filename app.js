const DEFAULT_PRODUCTS = [
  {
    id: "fy-ac-01",
    name: "غطاء حماية المكيف الخارجي المقاوم للماء والعوامل الجوية",
    category: "المنزل والمطبخ",
    price: 1500,
    oldPrice: 1700,
    rating: 4.9,
    reviews: 185,
    inStock: true,
    featured: true,
    freeShipping: false,
    variants: ["مقاس 9000 BTU", "مقاس 12000 BTU", "مقاس 18000 BTU"],
    specs: ["قماش سكاي (Sky) خفيف عالي الجودة", "مضاد للماء والرطوبة 100%", "حماية من الشمس والغبار والبرد", "خيطين للتثبيت المحكم بدون مشبك", "اللون أسود ملكي"],
    image: "images/ac-cover-1.jpg",
    images: [
      "images/ac-cover-1.jpg"
    ],
    video: "images/ac-cover.mp4",
    description: "غطاء واقي للوحدة الخارجية للمكيف الهوائي، مصنوع من قماش سكاي (Sky) خفيف ومرن عالي الجودة ومقاوم للماء والأشعة فوق البنفسجية، يقي مكيفك من الصدأ والغبار والأمطار وأشعة الشمس الحارقة لإطالة عمره وحمايته طوال الفصول."
  },
  {
    id: "fy-01",
    name: "ساعة كلاسيكية فاخرة Royal Chronograph Gold",
    category: "ساعات وإكسسوارات",
    price: 7800,
    oldPrice: 9500,
    rating: 4.9,
    reviews: 312,
    inStock: true,
    featured: true,
    variants: ["ذهبي كلاسيكي", "فضي ملكي", "أسود مات"],
    specs: ["مقاومة للماء 3ATM", "سوار ستانلس ستيل", "علبة هدايا فاخرة"],
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=80"
    ],
    description: "ساعة يد رجالية فاخرة بتصميم كرونوغراف كلاسيكي أنيق، زجاج مقاوم للخدش، وتأتي في علبة فاخرة مناسبة للإهداء."
  },
  {
    id: "fy-02",
    name: "عطر شرقي فاخر Oud Imperial Eau De Parfum 100ml",
    category: "عطور وتجميل",
    price: 5400,
    oldPrice: 6800,
    rating: 4.9,
    reviews: 275,
    inStock: true,
    featured: true,
    variants: ["100 مل (الحجم الكبير)", "50 مل"],
    specs: ["ثبات 48 ساعة", "حجم 100 مل", "تركيز Eau De Parfum"],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=80"
    ],
    description: "عطر أصلي ساحر يجمع بين نفحات العود الملكي والعنبر والفانيليا بثبات يدوم طويلاً وفوحان مميز لجميع المناسبات."
  },
  {
    id: "fy-03",
    name: "حذاء رياضي كاجوال Urban Runner Comfort",
    category: "أزياء وموضة",
    price: 6200,
    oldPrice: 7500,
    rating: 4.8,
    reviews: 198,
    inStock: true,
    featured: true,
    variants: ["مقاس 40", "مقاس 41", "مقاس 42", "مقاس 43", "مقاس 44"],
    specs: ["نعل طبي مريح", "خامة قابلة للتنفس", "متوفر بمقاسات 40-44"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80"
    ],
    description: "حذاء رياضي عصري خفيف الوزن بنعل مرن يمتص الصدمات، مثالي للمشي اليومي والرياضة والإطلالات الكاجوال الأنيقة."
  },
  {
    id: "fy-04",
    name: "ماكينة تحضير القهوة والإسبريسو Barista Pro",
    category: "المنزل والمطبخ",
    price: 19500,
    oldPrice: 23000,
    rating: 4.9,
    reviews: 164,
    inStock: true,
    featured: true,
    variants: ["فضي ستانلس", "أسود مطفي"],
    specs: ["ضغط 20 بار", "خافق حليب مدمج", "خزان 1.5 لتر"],
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80"
    ],
    description: "حضّر قهوتك المفضلة في المنزل كالمقاهي الاحترافية مع مضخة ضغط عالي 20 بار وعصا تبخير لتحضير الكابتشينو واللاتيه."
  },
  {
    id: "fy-05",
    name: "حقيبة ظهر عصرية مضادة للماء Traveler Pack",
    category: "أزياء وموضة",
    price: 4500,
    oldPrice: 5600,
    rating: 4.8,
    reviews: 230,
    inStock: true,
    featured: false,
    variants: ["أسود كلاسيكي", "رمادي داكن", "أزرق كحلي"],
    specs: ["قماش مقاوم للماء", "جيب مبطن للحاسوب", "منفذ شحن USB"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&q=80"
    ],
    description: "حقيبة ظهر أنيقة ومتينة للسفر والعمل والجامعة، بتقسيمات داخلية ذكية وأحزمة كتف مبطنة لراحة طوال اليوم."
  },
  {
    id: "fy-06",
    name: "سماعات لاسلكية Aether Pro Studio ANC",
    category: "إلكترونيات ذكية",
    price: 8900,
    oldPrice: 11000,
    rating: 4.9,
    reviews: 284,
    inStock: true,
    featured: true,
    variants: ["أسود", "أبيض لؤلؤي"],
    specs: ["عزل ضوضاء ANC", "بطارية 60 ساعة", "صوت محيطي"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80"
    ],
    description: "سماعات بلوتوث احترافية فوق الأذن مزودة بتقنية عزل الضوضاء النشط، مايكروفون مدمج للمكالمات الواضحة، وشحن سريع."
  },
  {
    id: "fy-07",
    name: "مجموعة العناية بالبشرة الطبيعية Glow Skin Set",
    category: "عطور وتجميل",
    price: 4200,
    oldPrice: 5200,
    rating: 4.8,
    reviews: 189,
    inStock: true,
    featured: false,
    specs: ["فيتامين C + هيالورونيك", "مكونات طبيعية 100%", "مناسب لجميع البشرات"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80"
    ],
    description: "باقة متكاملة للعناية بالبشرة وترطيبها بعمق ومنحها إشراقة نضرة، خالية من البارابين ومختبرة طبياً."
  },
  {
    id: "fy-08",
    name: "نظارات شمسية مستقطبة Aviator Polarized UV400",
    category: "ساعات وإكسسوارات",
    price: 3400,
    oldPrice: 4500,
    rating: 4.7,
    reviews: 152,
    inStock: true,
    featured: false,
    variants: ["إطار ذهبي / عدسة سوداء", "إطار أسود بالكامل"],
    specs: ["حماية UV400 كاملة", "عدسات Polarized", "إطار معدني خفيف"],
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80"
    ],
    description: "نظارات شمسية أنيقة بعدسات مستقطبة تمنع التوهج وتحمي العين من الأشعة فوق البنفسجية، مرفقة بعلبة جلدية ومنديل تنظيف."
  },
  {
    id: "fy-09",
    name: "خلاط محمول ذكي لتحضير العصائر FreshBlend",
    category: "المنزل والمطبخ",
    price: 3800,
    oldPrice: 4800,
    rating: 4.8,
    reviews: 215,
    inStock: true,
    featured: false,
    variants: ["أبيض", "وردي باستيل", "أخضر نعناعي"],
    specs: ["6 شفرات ستانلس", "قابل للشحن USB-C", "سعة 500 مل"],
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=900&q=80"
    ],
    description: "خلاط عصائر شخصي لاسلكي قوي لتحضير السموثي والعصائر الطازجة ومشروبات البروتين في المنزل أو النادي الرياضي."
  },
  {
    id: "fy-10",
    name: "ساعة ذكية متكاملة Horizon Ultra AMOLED",
    category: "إلكترونيات ذكية",
    price: 9800,
    oldPrice: 12500,
    rating: 4.9,
    reviews: 267,
    inStock: true,
    featured: true,
    variants: ["سوار برتقالي ألترا", "سوار أسود رياضي", "سوار رمادي تيتانيوم"],
    specs: ["شاشة AMOLED", "مكالمات بلوتوث", "بطارية 14 يوم"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=900&q=80"
    ],
    description: "ساعة ذكية تدعم المكالمات والإشعارات باللغة العربية مع متابعة دقيقة للنشاط الرياضي ونبضات القلب."
  }
];

function getProductImages(product) {
  if (!product) return [];
  if (Array.isArray(product.images) && product.images.length > 0) {
    return product.images.filter(Boolean);
  }
  return product.image ? [product.image] : [];
}

// دالة تتبع أحداث الإعلانات (Facebook & TikTok Pixel)
function trackAdEvent(eventName, payload = {}) {
  try {
    if (window.fbq && typeof window.fbq === "function") {
      window.fbq("track", eventName, payload);
    }
    if (window.ttq && typeof window.ttq.track === "function") {
      window.ttq.track(eventName, payload);
    }
  } catch (err) {
    // عدم التأثير على تجربة الزبون في حال غياب البيكسل
  }
}

// تطبيق أسعار التوصيل المخصصة للولايات
function applyCustomShippingRates(ratesMap) {
  if (!ratesMap || typeof ratesMap !== "object") return;
  ALGERIA_WILAYAS.forEach((w) => {
    if (ratesMap[w.code]) {
      if (typeof ratesMap[w.code].homePrice === "number") w.homePrice = ratesMap[w.code].homePrice;
      if (typeof ratesMap[w.code].deskPrice === "number") w.deskPrice = ratesMap[w.code].deskPrice;
    }
  });
}

function enrichDefaultImages(list) {
  return list.map((p) => {
    if (String(p.id).startsWith("fy-")) {
      const def = DEFAULT_PRODUCTS.find((d) => d.id === p.id);
      if (def) {
        let imgs = Array.isArray(p.images) ? p.images.filter((img) => !img.includes("ac-cover-2")) : [];
        if (p.id === "fy-ac-01" || imgs.length === 0) imgs = [...def.images];
        return {
          ...p,
          images: imgs,
          image: imgs[0] || def.image,
          variants: Array.isArray(p.variants) && p.variants.length > 0 ? p.variants : [...(def.variants || [])],
          video: p.video || def.video || (p.id === "fy-ac-01" ? "images/ac-cover.mp4" : "")
        };
      }
    }
    return p;
  });
}

function loadSavedProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem("foryou_products") || "null");
    if (Array.isArray(saved) && saved.length > 0) {
      const isOnlyOldElectronics =
        saved.length > 0 && saved.every((p) => String(p.id).startsWith("vlt-"));
      if (!isOnlyOldElectronics) {
        if (!saved.some((p) => p.id === "fy-ac-01")) {
          saved.unshift(DEFAULT_PRODUCTS[0]);
        } else {
          const acP = saved.find((p) => p.id === "fy-ac-01");
          if (acP) {
            acP.images = ["images/ac-cover-1.jpg"];
            acP.image = "images/ac-cover-1.jpg";
            acP.video = "images/ac-cover.mp4";
          }
        }
        const enriched = enrichDefaultImages(saved);
        localStorage.setItem("foryou_products", JSON.stringify(enriched));
        return enriched;
      }
    }
  } catch (e) {}
  localStorage.setItem("foryou_products", JSON.stringify(DEFAULT_PRODUCTS));
  return [...DEFAULT_PRODUCTS];
}

let PRODUCTS = loadSavedProducts();

async function syncProductsFromServer() {
  if (!window.location.protocol.startsWith("http")) return;
  try {
    const res = await fetch("/api/products");
    if (res.ok) {
      const serverProducts = await res.json();
      if (Array.isArray(serverProducts) && serverProducts.length > 0) {
        PRODUCTS = enrichDefaultImages(serverProducts);
        if (!PRODUCTS.some((p) => p.id === "fy-ac-01")) {
          PRODUCTS.unshift(DEFAULT_PRODUCTS[0]);
        }
        localStorage.setItem("foryou_products", JSON.stringify(PRODUCTS));
        renderCatalog();
        renderCart();
        if (state.activeProductId) {
          openProductPage(state.activeProductId, false);
        }
      } else if (!PRODUCTS || PRODUCTS.length === 0) {
        PRODUCTS = [...DEFAULT_PRODUCTS];
        localStorage.setItem("foryou_products", JSON.stringify(PRODUCTS));
        renderCatalog();
      }
    }
  } catch (e) {}
}

window.addEventListener("storage", (e) => {
  if (e.key === "foryou_products") {
    PRODUCTS = loadSavedProducts();
    renderCatalog();
    renderCart();
  }
});

// تنسيق السعر بالدينار الجزائري
function formatDZD(amount) {
  return `${Number(amount).toLocaleString("fr-DZ")} د.ج`;
}

// حالة التطبيق
const state = {
  search: "",
  category: "الكل",
  maxPrice: "all",
  inStockOnly: false,
  sortBy: "featured",
  cart: JSON.parse(localStorage.getItem("voltdz_cart") || "[]"),
  checkoutItems: [], // العناصر الجاري طلبها في نافذة التأكيد (إما طلب مباشر أو من السلة)
  checkoutMode: "cart", // "direct" أو "cart"
  activeProductId: null, // معرف المنتج المفتوح في صفحة المنتج المستقلة
  pdpQty: 1, // الكمية المختارة داخل صفحة المنتج
  selectedVariant: "", // اللون أو المقاس المختار
  galleryIndex: 0 // فهرس الصورة المعروضة حالياً في سلايدر المنتج
};

// عناصر DOM
const heroSection = document.getElementById("heroSection");
const catalogSection = document.getElementById("catalog");
const productPageSection = document.getElementById("productPageSection");
const searchInput = document.getElementById("searchInput");
const categoryPills = document.getElementById("categoryPills");
const priceFilter = document.getElementById("priceFilter");
const inStockOnly = document.getElementById("inStockOnly");
const sortSelect = document.getElementById("sortSelect");
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const emptyResetBtn = document.getElementById("emptyResetBtn");
const resetFiltersLogo = document.getElementById("resetFiltersLogo");
const filterFeaturedBtn = document.getElementById("filterFeaturedBtn");

// نافذة المنتج والسلة
const productModalBackdrop = document.getElementById("productModalBackdrop");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");
const cartTrigger = document.getElementById("cartTrigger");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const toastContainer = document.getElementById("toastContainer");

// عناصر نافذة الطلب الجزائرية (58 ولاية + البلديات)
const checkoutModalBackdrop = document.getElementById("checkoutModalBackdrop");
const closeCheckoutModalBtn = document.getElementById("closeCheckoutModalBtn");
const orderForm = document.getElementById("orderForm");
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const customerPhone2 = document.getElementById("customerPhone2");
const wilayaSelect = document.getElementById("wilayaSelect");
const communeSelect = document.getElementById("communeSelect");
const customerAddress = document.getElementById("customerAddress");
const deliveryHomeLabel = document.getElementById("deliveryHomeLabel");
const deliveryDeskLabel = document.getElementById("deliveryDeskLabel");
const homePriceBadge = document.getElementById("homePriceBadge");
const deskPriceBadge = document.getElementById("deskPriceBadge");
const checkoutItemsList = document.getElementById("checkoutItemsList");
const summarySubtotal = document.getElementById("summarySubtotal");
const summaryWilayaName = document.getElementById("summaryWilayaName");
const summaryShipping = document.getElementById("summaryShipping");
const summaryGrandTotal = document.getElementById("summaryGrandTotal");
const formErrorMsg = document.getElementById("formErrorMsg");

// نافذة نجاح الطلب
const successModalBackdrop = document.getElementById("successModalBackdrop");
const orderReceipt = document.getElementById("orderReceipt");
const closeSuccessBtn = document.getElementById("closeSuccessBtn");

// تعبئة قائمة ولايات الجزائر الـ 58
function populateWilayasDropdown() {
  wilayaSelect.innerHTML =
    `<option value="">-- اختر الولاية (58 ولاية) --</option>` +
    ALGERIA_WILAYAS.map(
      (w) => `<option value="${w.code}">${w.code} - ${w.name}</option>`
    ).join("");
}

// عند تغيير الولاية: تحديث البلديات وأسعار التوصيل
function handleWilayaChange() {
  const code = wilayaSelect.value;
  const wilaya = ALGERIA_WILAYAS.find((w) => w.code === code);
  const homeRadio = document.querySelector('input[name="deliveryType"][value="home"]');
  const deskRadio = document.querySelector('input[name="deliveryType"][value="desk"]');

  if (!wilaya) {
    communeSelect.innerHTML = `<option value="">-- اختر الولاية أولاً --</option>`;
    communeSelect.disabled = true;
    homePriceBadge.textContent = "اختر الولاية";
    deskPriceBadge.textContent = "اختر الولاية";
    if (homeRadio) homeRadio.disabled = false;
    if (deskRadio) deskRadio.disabled = false;
    deliveryDeskLabel.style.opacity = "1";
    updateCheckoutSummary();
    return;
  }

  communeSelect.disabled = false;
  communeSelect.innerHTML =
    `<option value="">-- اختر البلدية في ولاية ${wilaya.name} --</option>` +
    wilaya.communes.map((c) => `<option value="${c}">${c}</option>`).join("");

  homePriceBadge.textContent = wilaya.homePrice > 0 ? formatDZD(wilaya.homePrice) : "غير متوفر";
  deskPriceBadge.textContent = wilaya.deskPrice > 0 ? formatDZD(wilaya.deskPrice) : "غير متوفر للمكتب";

  if (deskRadio) {
    deskRadio.disabled = wilaya.deskPrice === 0;
    deliveryDeskLabel.style.opacity = wilaya.deskPrice === 0 ? "0.45" : "1";
    if (wilaya.deskPrice === 0 && deskRadio.checked && homeRadio) {
      homeRadio.checked = true;
    }
  }

  if (homeRadio) {
    homeRadio.disabled = wilaya.homePrice === 0;
    deliveryHomeLabel.style.opacity = wilaya.homePrice === 0 ? "0.45" : "1";
  }

  updateCheckoutSummary();
}

function getSelectedDeliveryType() {
  const checked = document.querySelector('input[name="deliveryType"]:checked');
  return checked ? checked.value : "home";
}

function updateCheckoutSummary() {
  const subtotal = state.checkoutItems.reduce((sum, entry) => {
    const product = PRODUCTS.find((p) => p.id === entry.id);
    return sum + (product ? product.price * entry.qty : 0);
  }, 0);

  checkoutItemsList.innerHTML = state.checkoutItems
    .map((entry) => {
      const product = PRODUCTS.find((p) => p.id === entry.id);
      if (!product) return "";
      return `
        <div class="checkout-item-row">
          <div style="display:flex; align-items:center; gap:0.55rem;">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <div style="font-weight:700;">${product.name}</div>
              <div style="font-size:0.78rem; color:var(--text-muted);">الكمية: ${entry.qty}</div>
            </div>
          </div>
          <strong style="color:var(--accent);">${formatDZD(product.price * entry.qty)}</strong>
        </div>
      `;
    })
    .join("");

  summarySubtotal.textContent = formatDZD(subtotal);

  const code = wilayaSelect.value;
  const wilaya = ALGERIA_WILAYAS.find((w) => w.code === code);
  const deliveryType = getSelectedDeliveryType();

  deliveryHomeLabel.classList.toggle("active", deliveryType === "home");
  deliveryDeskLabel.classList.toggle("active", deliveryType === "desk");

  if (wilaya) {
    const shipCost = deliveryType === "home" ? wilaya.homePrice : wilaya.deskPrice;
    summaryWilayaName.textContent = `${wilaya.code} - ${wilaya.name}`;
    summaryShipping.textContent = formatDZD(shipCost);
    summaryGrandTotal.textContent = formatDZD(subtotal + shipCost);
  } else {
    summaryWilayaName.textContent = "اختر الولاية";
    summaryShipping.textContent = "-- د.ج";
    summaryGrandTotal.textContent = formatDZD(subtotal);
  }
}

// فتح استمارة الطلب الجزائرية (مباشر أو من السلة)
function openCheckoutModal(items, mode = "cart") {
  if (!items || items.length === 0) return;
  state.checkoutItems = items.map((i) => ({ ...i }));
  state.checkoutMode = mode;
  formErrorMsg.classList.add("hidden");
  updateCheckoutSummary();
  closeQuickView();
  toggleCart(false);
  checkoutModalBackdrop.classList.remove("hidden");
}

function closeCheckoutModal() {
  checkoutModalBackdrop.classList.add("hidden");
}

// التحقق من رقم الهاتف الجزائري (10 أرقام يبدأ بـ 05 أو 06 أو 07)
function isValidAlgerianPhone(phone) {
  const cleaned = phone.replace(/\s+/g, "");
  return /^0[567]\d{8}$/.test(cleaned);
}

// التصنيفات مع العدد
function getCategories() {
  const counts = { الكل: PRODUCTS.length };
  PRODUCTS.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

function renderCategories() {
  const categories = getCategories();
  categoryPills.innerHTML = categories
    .map(
      (cat) => `
      <button
        class="category-pill ${state.category === cat.name ? "active" : ""}"
        data-category="${cat.name}"
        role="tab"
        aria-selected="${state.category === cat.name}"
      >
        <span>${cat.name}</span>
        <span class="pill-count">${cat.count}</span>
      </button>
    `
    )
    .join("");
}

// الفلترة والترتيب
function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  const filtered = PRODUCTS.filter((product) => {
    const matchesCategory =
      state.category === "الكل" || product.category === state.category;

    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.specs.some((s) => s.toLowerCase().includes(query));

    const matchesPrice =
      state.maxPrice === "all" || product.price <= Number(state.maxPrice);

    const matchesStock = !state.inStockOnly || product.inStock;

    return matchesCategory && matchesSearch && matchesPrice && matchesStock;
  });

  return filtered.sort((a, b) => {
    if (state.sortBy === "price-asc") return a.price - b.price;
    if (state.sortBy === "price-desc") return b.price - a.price;
    if (state.sortBy === "rating-desc") return b.rating - a.rating;
    return Number(b.featured) - Number(a.featured);
  });
}

function hasActiveFilters() {
  return (
    state.search.trim() !== "" ||
    state.category !== "الكل" ||
    state.maxPrice !== "all" ||
    state.inStockOnly ||
    state.sortBy !== "featured"
  );
}

// توليد بطاقة منتج واحدة (تستخدم في الكتالوج الرئيسي وفي قسم المنتجات المشابهة)
function renderProductCardHTML(product) {
  const imgs = getProductImages(product);
  return `
    <article class="product-card" data-id="${product.id}">
      <div class="card-media" data-quickview="${product.id}" title="اضغط لعرض صفحة المنتج وتصفح صوره">
        <div class="card-badges">
          ${product.featured ? `<span class="badge badge-featured">الأكثر مبيعاً</span>` : ""}
          ${product.oldPrice ? `<span class="badge badge-sale">تخفيض ${formatDZD(product.oldPrice - product.price)}</span>` : ""}
          ${product.freeShipping ? `<span class="badge" style="background:linear-gradient(135deg,#059669,#10b981);color:#fff;">🎁 توصيل مجاني</span>` : ""}
          ${!product.inStock ? `<span class="badge badge-out">نفدت الكمية</span>` : ""}
        </div>
        ${imgs.length > 1 ? `<span class="photo-count-badge">📷 ${imgs.length} صور</span>` : ""}
        <img src="${imgs[0] || product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${product.category}</span>
          <span class="card-rating">★ ${product.rating.toFixed(1)} (${product.reviews})</span>
        </div>
        <h3 class="card-title" data-quickview="${product.id}">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <div class="spec-tags">
          ${product.specs.map((spec) => `<span class="spec-tag">${spec}</span>`).join("")}
        </div>
        <div class="card-footer">
          <div class="price-group">
            <span class="price-current">${formatDZD(product.price)}</span>
            ${product.oldPrice ? `<span class="price-old">${formatDZD(product.oldPrice)}</span>` : ""}
          </div>
          <button
            class="direct-order-btn"
            style="width:100%; padding:0.65rem 1rem; font-size:0.9rem;"
            data-direct-order="${product.id}"
            ${!product.inStock ? "disabled" : ""}
          >
            ${product.inStock ? "🛒 اطلب الآن — الدفع عند الاستلام" : "غير متوفر حالياً"}
          </button>
        </div>
      </div>
    </article>
  `;
}

// عرض المنتجات في الصفحة الرئيسية
function renderCatalog() {
  if (!PRODUCTS || PRODUCTS.length === 0) {
    PRODUCTS = loadSavedProducts();
  }
  renderCategories();
  const list = getFilteredProducts();

  const total = PRODUCTS.length;
  if (list.length === total && !hasActiveFilters()) {
    resultsCount.textContent = `عرض جميع المنتجات (${total} منتج)`;
  } else {
    resultsCount.textContent = `عرض ${list.length} من أصل ${total} منتج${
      state.category !== "الكل" ? ` في قسم "${state.category}"` : ""
    }${state.search ? ` لبحث "${state.search}"` : ""}`;
  }

  clearFiltersBtn.classList.toggle("hidden", !hasActiveFilters());

  if (list.length === 0) {
    productGrid.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  productGrid.classList.remove("hidden");
  productGrid.innerHTML = list.map(renderProductCardHTML).join("");
}

// ====== صفحة تفاصيل المنتج المستقلة + معرض الصور القابل للتحريك (Swipe & Slide) ======
function setGallerySlide(index) {
  const product = PRODUCTS.find((p) => p.id === state.activeProductId);
  if (!product) return;
  const images = getProductImages(product);
  if (images.length === 0) return;

  const total = images.length;
  state.galleryIndex = ((index % total) + total) % total;

  const track = document.getElementById("pdpGalleryTrack");
  const counter = document.getElementById("pdpGalleryCounter");
  if (track) {
    track.style.transform = `translateX(-${state.galleryIndex * 100}%)`;
  }
  if (counter) {
    counter.textContent = `${state.galleryIndex + 1} / ${total}`;
  }

  document.querySelectorAll(".gallery-dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === state.galleryIndex);
  });

  document.querySelectorAll(".gallery-thumb").forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === state.galleryIndex);
  });
}

function bindGallerySwipeAndDrag() {
  const slider = document.getElementById("pdpGallerySlider");
  const track = document.getElementById("pdpGalleryTrack");
  if (!slider || !track) return;

  let startX = 0;
  let startY = 0;
  let currentDeltaX = 0;
  let isDragging = false;
  let directionLocked = null; // 'horizontal' | 'vertical' | null

  function onPointerDown(clientX, clientY = 0) {
    isDragging = true;
    startX = clientX;
    startY = clientY;
    currentDeltaX = 0;
    directionLocked = null;
    track.style.transition = "none";
  }

  function onPointerMove(clientX, clientY = 0, isTouch = false) {
    if (!isDragging) return;
    const dx = clientX - startX;
    const dy = clientY - startY;

    if (isTouch && !directionLocked) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      directionLocked = Math.abs(dy) > Math.abs(dx) ? "vertical" : "horizontal";
    }

    if (directionLocked === "vertical") {
      // المستخدم يتصفح الصفحة للأعلى أو الأسفل، لا نحرك الصور أفقياً
      isDragging = false;
      track.style.transition = "transform 0.36s cubic-bezier(0.22, 1, 0.36, 1)";
      setGallerySlide(state.galleryIndex);
      return;
    }

    currentDeltaX = dx;
    const width = slider.clientWidth || 1;
    const percentOffset = (currentDeltaX / width) * 100;
    track.style.transform = `translateX(calc(-${state.galleryIndex * 100}% + ${percentOffset}%))`;
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "transform 0.36s cubic-bezier(0.22, 1, 0.36, 1)";
    const threshold = Math.min(55, (slider.clientWidth || 300) * 0.15);
    if (currentDeltaX < -threshold) {
      setGallerySlide(state.galleryIndex + 1);
    } else if (currentDeltaX > threshold) {
      setGallerySlide(state.galleryIndex - 1);
    } else {
      setGallerySlide(state.galleryIndex);
    }
    currentDeltaX = 0;
    directionLocked = null;
  }

  // اللمس على الهاتف (Touch Swipe مع احترام التمرير العمودي للصفحة)
  slider.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    { passive: true }
  );
  slider.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY, true);
      }
    },
    { passive: true }
  );
  slider.addEventListener("touchend", onPointerUp);
  slider.addEventListener("touchcancel", onPointerUp);

  // السحب بالماوس على الكمبيوتر (Mouse Drag)
  slider.addEventListener("mousedown", (e) => {
    if (e.target.closest("button")) return;
    e.preventDefault();
    onPointerDown(e.clientX, e.clientY);
  });
  slider.addEventListener("mousemove", (e) => {
    if (isDragging) onPointerMove(e.clientX, e.clientY, false);
  });
  slider.addEventListener("mouseup", () => {
    if (isDragging) onPointerUp();
  });
  slider.addEventListener("mouseleave", () => {
    if (isDragging) onPointerUp();
  });
}

function updatePdpOrderSummary() {
  const product = PRODUCTS.find((p) => p.id === state.activeProductId);
  if (!product) return;

  const isFreeShip = Boolean(product.freeShipping);
  const bundleDiscount = state.pdpQty >= 2 ? 200 : 0;
  const rawSubtotal = product.price * state.pdpQty;
  const subtotal = Math.max(0, rawSubtotal - bundleDiscount);
  const subEl = document.getElementById("pdpSubtotalText");
  const shipWilayaEl = document.getElementById("pdpShipWilayaText");
  const shipCostEl = document.getElementById("pdpShippingText");
  const grandEl = document.getElementById("pdpGrandTotalText");
  const wilayaSel = document.getElementById("pdpWilayaSelect");
  const homeLbl = document.getElementById("pdpDeliveryHomeLabel");
  const deskLbl = document.getElementById("pdpDeliveryDeskLabel");
  const checkedRadio = document.querySelector('input[name="pdpDeliveryType"]:checked');
  const deliveryType = checkedRadio ? checkedRadio.value : "home";

  if (homeLbl) homeLbl.classList.toggle("active", deliveryType === "home");
  if (deskLbl) deskLbl.classList.toggle("active", deliveryType === "desk");

  document.querySelectorAll(".bundle-offer-card").forEach((card) => {
    const qty = Number(card.dataset.bundleQty);
    if (qty === 1) {
      card.classList.toggle("active", state.pdpQty === 1);
    } else if (qty === 2) {
      card.classList.toggle("active", state.pdpQty >= 2);
    }
  });

  if (subEl) {
    if (bundleDiscount > 0) {
      subEl.innerHTML = `${formatDZD(product.price)} × ${state.pdpQty} <span style="color:#e11d48; font-size:0.78rem;">(−${formatDZD(bundleDiscount)})</span> = ${formatDZD(subtotal)}`;
    } else {
      subEl.textContent = `${formatDZD(product.price)} × ${state.pdpQty} = ${formatDZD(subtotal)}`;
    }
  }

  const wilaya = wilayaSel ? ALGERIA_WILAYAS.find((w) => w.code === wilayaSel.value) : null;
  if (wilaya) {
    const rawShipCost = deliveryType === "home" ? wilaya.homePrice : wilaya.deskPrice;
    const shipCost = isFreeShip ? 0 : rawShipCost;
    if (shipWilayaEl) shipWilayaEl.textContent = `${wilaya.code} - ${wilaya.name}`;
    if (shipCostEl) shipCostEl.textContent = isFreeShip ? "مجاني 🎁 (0 د.ج)" : formatDZD(shipCost);
    if (grandEl) grandEl.textContent = formatDZD(subtotal + shipCost);
  } else {
    if (shipWilayaEl) shipWilayaEl.textContent = isFreeShip ? "الـ 58 ولاية" : "اختر الولاية";
    if (shipCostEl) shipCostEl.textContent = isFreeShip ? "مجاني 🎁 (0 د.ج)" : "-- د.ج";
    if (grandEl) grandEl.textContent = formatDZD(subtotal);
  }
}

function saveCustomerDraft() {
  try {
    const nameEl = document.getElementById("pdpCustomerName");
    const phoneEl = document.getElementById("pdpCustomerPhone");
    const wilayaEl = document.getElementById("pdpWilayaSelect");
    const communeEl = document.getElementById("pdpCommuneSelect");
    const addrEl = document.getElementById("pdpCustomerAddress");
    const checkedRadio = document.querySelector('input[name="pdpDeliveryType"]:checked');
    const draft = {
      name: nameEl ? nameEl.value : "",
      phone: phoneEl ? phoneEl.value : "",
      wilayaCode: wilayaEl ? wilayaEl.value : "",
      commune: communeEl ? communeEl.value : "",
      address: addrEl ? addrEl.value : "",
      deliveryType: checkedRadio ? checkedRadio.value : "home"
    };
    localStorage.setItem("foryou_customer_draft", JSON.stringify(draft));
  } catch (e) {}
}

function bindPdpOrderForm(product) {
  const wilayaSel = document.getElementById("pdpWilayaSelect");
  const communeSel = document.getElementById("pdpCommuneSelect");
  const homeBadge = document.getElementById("pdpHomePriceBadge");
  const deskBadge = document.getElementById("pdpDeskPriceBadge");
  const homeLbl = document.getElementById("pdpDeliveryHomeLabel");
  const deskLbl = document.getElementById("pdpDeliveryDeskLabel");
  const pdpForm = document.getElementById("pdpOrderForm");
  const pdpError = document.getElementById("pdpFormErrorMsg");
  const pdpName = document.getElementById("pdpCustomerName");
  const pdpPhone = document.getElementById("pdpCustomerPhone");
  const pdpPhone2 = document.getElementById("pdpCustomerPhone2");
  const pdpAddress = document.getElementById("pdpCustomerAddress");
  const isFreeShip = Boolean(product.freeShipping);

  if (!pdpForm || !wilayaSel) return;

  [pdpPhone, pdpPhone2].forEach((inp) => {
    if (!inp) return;
    inp.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d]/g, "").slice(0, 10);
      saveCustomerDraft();
    });
  });

  if (pdpName) pdpName.addEventListener("input", saveCustomerDraft);
  if (pdpAddress) pdpAddress.addEventListener("input", saveCustomerDraft);
  if (communeSel) communeSel.addEventListener("change", saveCustomerDraft);

  wilayaSel.addEventListener("change", () => {
    const wilaya = ALGERIA_WILAYAS.find((w) => w.code === wilayaSel.value);
    const homeRadio = document.querySelector('input[name="pdpDeliveryType"][value="home"]');
    const deskRadio = document.querySelector('input[name="pdpDeliveryType"][value="desk"]');

    if (!wilaya) {
      communeSel.innerHTML = `<option value="">-- اختر الولاية أولاً --</option>`;
      communeSel.disabled = true;
      homeBadge.textContent = isFreeShip ? "مجاني 🎁" : "اختر الولاية";
      deskBadge.textContent = isFreeShip ? "مجاني 🎁" : "اختر الولاية";
      if (homeRadio) homeRadio.disabled = false;
      if (deskRadio) deskRadio.disabled = false;
      if (deskLbl) deskLbl.style.opacity = "1";
      saveCustomerDraft();
      updatePdpOrderSummary();
      return;
    }

    communeSel.disabled = false;
    communeSel.innerHTML =
      `<option value="">-- اختر البلدية في ولاية ${wilaya.name} --</option>` +
      wilaya.communes.map((c) => `<option value="${c}">${c}</option>`).join("");

    homeBadge.textContent = isFreeShip
      ? "مجاني 🎁"
      : wilaya.homePrice > 0
      ? formatDZD(wilaya.homePrice)
      : "غير متوفر";
    deskBadge.textContent = isFreeShip
      ? "مجاني 🎁"
      : wilaya.deskPrice > 0
      ? formatDZD(wilaya.deskPrice)
      : "غير متوفر للمكتب";

    if (deskRadio) {
      deskRadio.disabled = !isFreeShip && wilaya.deskPrice === 0;
      if (deskLbl) deskLbl.style.opacity = !isFreeShip && wilaya.deskPrice === 0 ? "0.45" : "1";
      if (!isFreeShip && wilaya.deskPrice === 0 && deskRadio.checked && homeRadio) {
        homeRadio.checked = true;
      }
    }

    if (homeRadio) {
      homeRadio.disabled = !isFreeShip && wilaya.homePrice === 0;
      if (homeLbl) homeLbl.style.opacity = !isFreeShip && wilaya.homePrice === 0 ? "0.45" : "1";
    }

    saveCustomerDraft();
    updatePdpOrderSummary();
  });

  document.querySelectorAll('input[name="pdpDeliveryType"]').forEach((r) => {
    r.addEventListener("change", () => {
      saveCustomerDraft();
      updatePdpOrderSummary();
    });
  });

  // استرجاع معلومات الزبون المحفوظة تلقائياً حتى لا يعيد كتابتها
  try {
    const savedDraft = JSON.parse(localStorage.getItem("foryou_customer_draft") || "null");
    if (savedDraft) {
      if (pdpName && savedDraft.name) pdpName.value = savedDraft.name;
      if (pdpPhone && savedDraft.phone) pdpPhone.value = savedDraft.phone;
      if (pdpAddress && savedDraft.address) pdpAddress.value = savedDraft.address;
      if (savedDraft.deliveryType) {
        const radio = document.querySelector(
          `input[name="pdpDeliveryType"][value="${savedDraft.deliveryType}"]`
        );
        if (radio) radio.checked = true;
      }
      if (savedDraft.wilayaCode) {
        wilayaSel.value = savedDraft.wilayaCode;
        wilayaSel.dispatchEvent(new Event("change"));
        if (savedDraft.commune) {
          communeSel.value = savedDraft.commune;
        }
      }
    }
  } catch (e) {}

  pdpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    pdpError.classList.add("hidden");

    const nameVal = pdpName.value.trim();
    const phoneVal = pdpPhone.value.trim();
    const phone2Val = pdpPhone2 ? pdpPhone2.value.trim() : "";
    const wilayaCode = wilayaSel.value;
    const communeVal = communeSel.value;
    const addressVal = pdpAddress.value.trim();
    const checkedRadio = document.querySelector('input[name="pdpDeliveryType"]:checked');
    const deliveryType = checkedRadio ? checkedRadio.value : "home";

    if (nameVal.length < 3) {
      pdpError.textContent = "⚠️ يرجى إدخال الاسم واللقب الكامل.";
      pdpError.classList.remove("hidden");
      pdpName.focus();
      return;
    }

    if (!isValidAlgerianPhone(phoneVal)) {
      pdpError.textContent = "⚠️ يرجى إدخال رقم هاتف جزائري صحيح مكون من 10 أرقام (يبدأ بـ 05 أو 06 أو 07).";
      pdpError.classList.remove("hidden");
      pdpPhone.focus();
      return;
    }

    if (!wilayaCode) {
      pdpError.textContent = "⚠️ يرجى اختيار الولاية من القائمة.";
      pdpError.classList.remove("hidden");
      wilayaSel.focus();
      return;
    }

    if (!communeVal) {
      pdpError.textContent = "⚠️ يرجى اختيار البلدية من القائمة.";
      pdpError.classList.remove("hidden");
      communeSel.focus();
      return;
    }

    // حماية Anti-Spam لمنع تكرار نفس الطلب بالخطأ خلال 3 دقائق
    try {
      const lastGuard = JSON.parse(localStorage.getItem("foryou_last_order_guard") || "null");
      if (
        lastGuard &&
        lastGuard.phone === phoneVal &&
        lastGuard.productId === product.id &&
        Date.now() - Number(lastGuard.timestamp || 0) < 180000
      ) {
        pdpError.textContent =
          "✅ تم تسجيل طلبك لهذا المنتج بنجاح منذ لحظات! سنتصل بك قريباً لتأكيد الطلب (لا داعي لإعادة الإرسال).";
        pdpError.classList.remove("hidden");
        return;
      }
    } catch (err) {}

    const wilaya = ALGERIA_WILAYAS.find((w) => w.code === wilayaCode);
    const rawShipCost = deliveryType === "home" ? wilaya.homePrice : wilaya.deskPrice;
    if (!isFreeShip && rawShipCost <= 0) {
      pdpError.textContent = "⚠️ عذراً، هذا النوع من التوصيل غير متوفر حالياً للولاية المختارة.";
      pdpError.classList.remove("hidden");
      return;
    }
    const shipCost = isFreeShip ? 0 : rawShipCost;

    const submitBtn = pdpForm.querySelector('button[type="submit"]');
    const origBtnText = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "⏳ جاري تسجيل طلبك...";
    }

    const bundleDiscount = state.pdpQty >= 2 ? 200 : 0;
    const subtotal = Math.max(0, product.price * state.pdpQty - bundleDiscount);
    const grandTotal = subtotal + shipCost;
    const orderNumber = "FY-" + Math.floor(100000 + Math.random() * 900000);
    const itemDisplayName = state.selectedVariant
      ? `${product.name} [${state.selectedVariant}]`
      : product.name;

    const newOrder = {
      orderNumber,
      createdAt: new Date().toISOString(),
      customerName: nameVal,
      phone: phoneVal,
      phone2: phone2Val || "",
      wilayaCode: wilaya.code,
      wilayaName: wilaya.name,
      commune: communeVal,
      address: addressVal || "",
      deliveryType,
      items: [
        {
          id: product.id,
          name: itemDisplayName,
          price: Math.round(subtotal / state.pdpQty),
          qty: state.pdpQty
        }
      ],
      subtotal,
      shippingCost: shipCost,
      grandTotal,
      status: "pending",
      telegramSent: false
    };

    const existingOrders = JSON.parse(localStorage.getItem("foryou_orders") || "[]");
    existingOrders.unshift(newOrder);
    localStorage.setItem("foryou_orders", JSON.stringify(existingOrders));
    localStorage.setItem(
      "foryou_last_order_guard",
      JSON.stringify({ phone: phoneVal, productId: product.id, timestamp: Date.now() })
    );

    trackAdEvent("Purchase", {
      content_name: itemDisplayName,
      content_ids: [product.id],
      content_type: "product",
      value: grandTotal,
      currency: "DZD"
    });

    await sendOrderToTelegram(newOrder);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = origBtnText;
    }

    orderReceipt.innerHTML = `
      <div><strong>رقم الطلبية:</strong> <span dir="ltr">${orderNumber}</span></div>
      <div><strong>المنتج:</strong> ${itemDisplayName} (الكمية: ${state.pdpQty})</div>
      <div><strong>الزبون:</strong> ${nameVal}</div>
      <div><strong>رقم الهاتف:</strong> <span dir="ltr">${phoneVal}${phone2Val ? ` / ${phone2Val}` : ""}</span></div>
      <div><strong>الولاية والبلدية:</strong> ${wilaya.code} - ${wilaya.name} (${communeVal})</div>
      ${addressVal ? `<div><strong>العنوان:</strong> ${addressVal}</div>` : ""}
      <div><strong>نوع التوصيل:</strong> ${deliveryType === "home" ? "توصيل إلى باب المنزل 🏠" : "مكتب التوصيل (Stop Desk) 🏢"} ${isFreeShip ? "(مجاني 🎁)" : ""}</div>
      <div style="margin-top:0.4rem; padding-top:0.4rem; border-top:1px dashed var(--border-subtle); font-size:1rem;">
        <strong>المبلغ الإجمالي عند الاستلام:</strong>
        <strong style="color:var(--emerald);">${formatDZD(grandTotal)}</strong>
      </div>
    `;

    updatePdpOrderSummary();
    successModalBackdrop.classList.remove("hidden");
  });
}

function openProductPage(productId, pushHistory = true) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product || !productPageSection) return;

  const variants = Array.isArray(product.variants) ? product.variants.filter(Boolean) : [];
  const isFreeShip = Boolean(product.freeShipping);
  state.activeProductId = product.id;
  state.pdpQty = 1;
  state.selectedVariant = variants.length > 0 ? variants[0] : "";
  state.galleryIndex = 0;

  if (pushHistory && window.location.hash !== `#product=${product.id}`) {
    history.pushState({ productId: product.id }, "", `#product=${product.id}`);
  }

  trackAdEvent("ViewContent", {
    content_name: product.name,
    content_ids: [product.id],
    content_type: "product",
    value: product.price,
    currency: "DZD"
  });

  const images = getProductImages(product);
  const related = PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 4);

  const wilayasOptionsHTML =
    `<option value="">-- اختر الولاية (58 ولاية) --</option>` +
    ALGERIA_WILAYAS.map((w) => `<option value="${w.code}">${w.code} - ${w.name}</option>`).join("");

  productPageSection.innerHTML = `
    <div class="pdp-main-card">
      <!-- وسائط المنتج: فيديو نقي أو معرض صور -->
      <div class="pdp-gallery">
        ${
          (product.video || product.id === "fy-ac-01")
            ? `
          <div style="width:100%; border-radius:12px; overflow:hidden; background:#000; box-shadow:0 6px 20px rgba(0,0,0,0.35); position:relative;">
            <video
              controls
              playsinline
              preload="none"
              style="width:100%; display:block; max-height:500px; object-fit:contain; background:#000; border-radius:12px;"
              poster="${images[0] || 'images/ac-cover-1.jpg'}"
            >
              <source src="${product.video || 'images/ac-cover.mp4'}" type="video/mp4">
              <source src="images/ac-cover.mp4" type="video/mp4">
              <source src="images/Ads for webv.mp4" type="video/mp4">
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        `
            : `
          <div class="gallery-slider" id="pdpGallerySlider" dir="ltr">
            <div class="gallery-track" id="pdpGalleryTrack">
              ${images
                .map(
                  (imgUrl, idx) => `
                <div class="gallery-slide">
                  <img src="${imgUrl}" alt="${product.name} - صورة ${idx + 1}" />
                </div>
              `
                )
                .join("")}
            </div>

            ${
              images.length > 1
                ? `
              <button type="button" class="gallery-nav-btn prev" id="pdpPrevImgBtn" aria-label="الصورة السابقة">❮</button>
              <button type="button" class="gallery-nav-btn next" id="pdpNextImgBtn" aria-label="الصورة التالية">❯</button>
              <span class="gallery-counter" id="pdpGalleryCounter">1 / ${images.length}</span>
              <span class="gallery-swipe-hint">↔ اسحب لتحريك الصور</span>
              <div class="gallery-dots">
                ${images
                  .map(
                    (_, idx) =>
                      `<button type="button" class="gallery-dot ${idx === 0 ? "active" : ""}" data-slide-to="${idx}" aria-label="انتقل للصورة ${idx + 1}"></button>`
                  )
                  .join("")}
              </div>
            `
                : `<span class="gallery-counter">1 / 1</span>`
            }
          </div>

          ${
            images.length > 1
              ? `
            <div class="gallery-thumbs">
              ${images
                .map(
                  (imgUrl, idx) => `
                <button type="button" class="gallery-thumb ${idx === 0 ? "active" : ""}" data-slide-to="${idx}">
                  <img src="${imgUrl}" alt="مصغرة ${idx + 1}" />
                </button>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }
        `
        }
      </div>

      <!-- السعر + استمارة وضع معلومات العميل للشراء مباشرة دون نصوص طويلة -->
      <div class="pdp-info">
        <h1 class="pdp-title">${product.name}</h1>

        <div class="pdp-price-box">
          <span class="pdp-price-current">${formatDZD(product.price)}</span>
          ${product.oldPrice ? `<span class="pdp-price-old">${formatDZD(product.oldPrice)}</span>` : ""}
          ${
            product.oldPrice && product.oldPrice > product.price
              ? `<span class="pdp-save-badge">🔥 وفر ${formatDZD(product.oldPrice - product.price)}</span>`
              : ""
          }
          ${
            isFreeShip
              ? `<span class="pdp-save-badge" style="background:rgba(5,150,105,0.12);color:var(--emerald);border-color:rgba(5,150,105,0.35);">🎁 توصيل مجاني للـ 58 ولاية</span>`
              : ""
          }
        </div>

        <!-- استمارة الشراء المباشر المدمجة في صفحة المنتج -->
        <form id="pdpOrderForm" class="pdp-order-box" novalidate>
          <div class="pdp-order-box-header">
            <h3>📋 للطلب - ضع معلوماتك هنا</h3>
          </div>

          ${
            variants.length > 0
              ? `
            <div class="pdp-variants-wrap">
              <span class="pdp-variants-label">🎨 اختر اللون / المقاس: <strong id="pdpSelectedVariantLabel" style="color:var(--emerald);">${state.selectedVariant}</strong></span>
              <div class="pdp-variants-pills">
                ${variants
                  .map(
                    (v, idx) =>
                      `<button type="button" class="pdp-variant-pill ${idx === 0 ? "active" : ""}" data-variant-val="${v}">${v}</button>`
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }

          <div class="form-row-2">
            <div class="form-group">
              <label for="pdpCustomerName">الاسم واللقب الكامل <span class="req">*</span></label>
              <input
                type="text"
                id="pdpCustomerName"
                required
                placeholder="مثال: محمد أمين بن علي"
                autocomplete="name"
              />
            </div>

            <div class="form-group">
              <label for="pdpCustomerPhone">رقم الهاتف <span class="req">*</span></label>
              <input
                type="tel"
                id="pdpCustomerPhone"
                dir="ltr"
                required
                placeholder="05 / 06 / 07 XX XX XX XX"
                maxlength="10"
                autocomplete="tel"
              />
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label for="pdpWilayaSelect">الولاية (58 ولاية) <span class="req">*</span></label>
              <select id="pdpWilayaSelect" required>
                ${wilayasOptionsHTML}
              </select>
            </div>

            <div class="form-group">
              <label for="pdpCommuneSelect">البلدية <span class="req">*</span></label>
              <select id="pdpCommuneSelect" required disabled>
                <option value="">-- اختر الولاية أولاً --</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label>طريقة التوصيل <span class="req">*</span></label>
            <div class="delivery-options">
              <label class="delivery-radio active" id="pdpDeliveryHomeLabel">
                <input type="radio" name="pdpDeliveryType" value="home" checked />
                <div class="delivery-radio-body">
                  <strong>🏠 توصيل إلى باب المنزل</strong>
                  <span id="pdpHomePriceBadge">${isFreeShip ? "مجاني 🎁" : "اختر الولاية"}</span>
                </div>
              </label>
              <label class="delivery-radio" id="pdpDeliveryDeskLabel">
                <input type="radio" name="pdpDeliveryType" value="desk" />
                <div class="delivery-radio-body">
                  <strong>🏢 مكتب التوصيل (Stop Desk)</strong>
                  <span id="pdpDeskPriceBadge">${isFreeShip ? "مجاني 🎁" : "اختر الولاية"}</span>
                </div>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label for="pdpCustomerAddress">العنوان التفصيلي أو ملاحظة (اختياري)</label>
            <input
              type="text"
              id="pdpCustomerAddress"
              placeholder="مثال: حي 500 مسكن، بالقرب من مكتب البريد..."
            />
          </div>

          <!-- عرض قطعتين لزيادة المبيعات -->
          <div class="bundle-offers-grid">
            <div class="bundle-offer-card active" data-bundle-qty="1">
              <div class="bundle-offer-title">🛍️ قطعة واحدة (1)</div>
              <div class="bundle-offer-price">${formatDZD(product.price)}</div>
            </div>
            <div class="bundle-offer-card" data-bundle-qty="2">
              <span class="bundle-save-tag">🔥 وفر 200 د.ج</span>
              <div class="bundle-offer-title">🎁 عرض قطعتين (2)</div>
              <div class="bundle-offer-price">${formatDZD(Math.max(0, product.price * 2 - 200))}</div>
            </div>
          </div>

          <div class="pdp-qty-row">
            <span style="font-weight:800; font-size:0.9rem;">الكمية المطلوبة:</span>
            <div class="pdp-qty-picker">
              <button type="button" id="pdpQtyMinus" aria-label="إنقاص الكمية">−</button>
              <span id="pdpQtyVal">1</span>
              <button type="button" id="pdpQtyPlus" aria-label="زيادة الكمية">+</button>
            </div>
          </div>

          <!-- ملخص السعر والتوصيل المباشر -->
          <div class="pdp-order-totals">
            <div class="row">
              <span>ثمن المنتج:</span>
              <strong id="pdpSubtotalText">${formatDZD(product.price)} × 1 = ${formatDZD(product.price)}</strong>
            </div>
            <div class="row">
              <span>سعر التوصيل (<span id="pdpShipWilayaText">${isFreeShip ? "الـ 58 ولاية" : "اختر الولاية"}</span>):</span>
              <strong id="pdpShippingText" style="color:var(--accent);">${isFreeShip ? "مجاني 🎁 (0 د.ج)" : "-- د.ج"}</strong>
            </div>
            <div class="row grand">
              <span>المبلغ الإجمالي عند الاستلام:</span>
              <strong id="pdpGrandTotalText" style="color:var(--emerald); font-size:1.18rem;">${formatDZD(product.price)}</strong>
            </div>
          </div>

          <div class="form-error hidden" id="pdpFormErrorMsg"></div>

          <div class="pdp-actions">
            <button
              type="submit"
              class="btn btn-primary btn-lg btn-glow btn-block"
              style="width:100%;"
              ${!product.inStock ? "disabled" : ""}
            >
              ✅ تأكيد الطلب الآن (الدفع عند الاستلام)
            </button>
          </div>
        </form>
      </div>
    </div>

    ${
      related.length > 0
        ? `
      <div class="pdp-related-section">
        <div class="pdp-related-header">
          <h3>🛍️ منتجات أخرى قد تعجبك</h3>
          <button type="button" class="btn btn-secondary" id="pdpSeeAllBtn" style="padding:0.45rem 0.95rem; font-size:0.84rem;">عرض كل المنتجات</button>
        </div>
        <div class="product-grid">
          ${related.map(renderProductCardHTML).join("")}
        </div>
      </div>
    `
        : ""
    }
  `;

  if (heroSection) heroSection.classList.add("hidden");
  if (catalogSection) catalogSection.classList.add("hidden");
  productPageSection.classList.remove("hidden");

  bindGallerySwipeAndDrag();
  bindPdpOrderForm(product);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeProductPage(pushHistory = true) {
  if (!state.activeProductId) return;
  state.activeProductId = null;
  if (productPageSection) productPageSection.classList.add("hidden");
  if (heroSection) heroSection.classList.remove("hidden");
  if (catalogSection) catalogSection.classList.remove("hidden");
  if (pushHistory && window.location.hash.startsWith("#product=")) {
    history.pushState({}, "", window.location.pathname + window.location.search);
  }
}

function openQuickView(productId) {
  openProductPage(productId, true);
}

function closeQuickView() {
  productModalBackdrop.classList.add("hidden");
}

// إدارة السلة
function saveCart() {
  localStorage.setItem("voltdz_cart", JSON.stringify(state.cart));
  renderCart();
}

function addToCart(productId, qtyToAdd = 1) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product || !product.inStock) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += qtyToAdd;
  } else {
    state.cart.push({ id: product.id, qty: qtyToAdd });
  }
  saveCart();
  showToast(`تمت إضافة "${product.name}" إلى السلة`);
}

function updateQty(productId, delta) {
  const idx = state.cart.findIndex((item) => item.id === productId);
  if (idx === -1) return;

  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  saveCart();
}

function renderCart() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.textContent = totalQty;

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.2rem; margin-bottom: 0.5rem;">🛒</p>
        <p>سلة المشتريات فارغة حالياً.</p>
      </div>
    `;
    cartSubtotal.textContent = "0 د.ج";
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  let subtotal = 0;

  cartItems.innerHTML = state.cart
    .map((entry) => {
      const product = PRODUCTS.find((p) => p.id === entry.id);
      if (!product) return "";
      const lineTotal = product.price * entry.qty;
      subtotal += lineTotal;
      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-item-info">
            <div class="cart-item-title">${product.name}</div>
            <div class="cart-item-price">${formatDZD(product.price)} × ${entry.qty} = ${formatDZD(lineTotal)}</div>
            <div class="cart-qty-controls">
              <button class="qty-btn" data-qty-id="${product.id}" data-delta="-1" aria-label="إنقاص الكمية">−</button>
              <span>${entry.qty}</span>
              <button class="qty-btn" data-qty-id="${product.id}" data-delta="1" aria-label="زيادة الكمية">+</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  cartSubtotal.textContent = formatDZD(subtotal);
}

function toggleCart(open) {
  cartDrawer.classList.toggle("open", open);
  cartBackdrop.classList.toggle("hidden", !open);
}

function resetAllFilters() {
  closeProductPage();
  state.search = "";
  state.category = "الكل";
  state.maxPrice = "all";
  state.inStockOnly = false;
  state.sortBy = "featured";

  searchInput.value = "";
  priceFilter.value = "all";
  inStockOnly.checked = false;
  sortSelect.value = "featured";

  renderCatalog();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = `⚡ ${message}`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2800);
}

// الأحداث (Event Listeners)
searchInput.addEventListener("input", (e) => {
  if (state.activeProductId) closeProductPage();
  state.search = e.target.value;
  renderCatalog();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput && checkoutModalBackdrop.classList.contains("hidden")) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === "Escape") {
    closeQuickView();
    closeCheckoutModal();
    toggleCart(false);
  }
  // تحريك صور المنتج بالأسهم (يمين / يسار) عندما تكون صفحة المنتج مفتوحة
  if (
    state.activeProductId &&
    checkoutModalBackdrop.classList.contains("hidden") &&
    !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName)
  ) {
    if (e.key === "ArrowRight") setGallerySlide(state.galleryIndex + 1);
    if (e.key === "ArrowLeft") setGallerySlide(state.galleryIndex - 1);
  }
});

// دعم زر الرجوع في المتصفح والروابط المباشرة للمنتج
function handleHashRoute() {
  const hash = window.location.hash || "";
  if (hash.startsWith("#product=")) {
    const prodId = decodeURIComponent(hash.replace("#product=", ""));
    if (PRODUCTS.some((p) => p.id === prodId)) {
      openProductPage(prodId, false);
      return;
    }
  }
  if (state.activeProductId) {
    closeProductPage(false);
  }
}

window.addEventListener("popstate", handleHashRoute);
window.addEventListener("hashchange", handleHashRoute);

categoryPills.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;
  state.category = btn.dataset.category;
  renderCatalog();
});

priceFilter.addEventListener("change", (e) => {
  state.maxPrice = e.target.value;
  renderCatalog();
});

inStockOnly.addEventListener("change", (e) => {
  state.inStockOnly = e.target.checked;
  renderCatalog();
});

sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  renderCatalog();
});

clearFiltersBtn.addEventListener("click", resetAllFilters);
emptyResetBtn.addEventListener("click", resetAllFilters);
resetFiltersLogo.addEventListener("click", (e) => {
  e.preventDefault();
  resetAllFilters();
});

filterFeaturedBtn.addEventListener("click", () => {
  resetAllFilters();
  state.sortBy = "featured";
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
});

// أحداث النقر العامة
document.addEventListener("click", (e) => {
  // أزرار التحكم داخل صفحة المنتج المستقلة
  if (e.target.closest("#pdpBackBtn") || e.target.closest("#pdpHomeBreadcrumb") || e.target.closest("#pdpSeeAllBtn")) {
    e.preventDefault();
    closeProductPage();
    return;
  }

  const pdpCatLink = e.target.closest("[data-pdp-cat]");
  if (pdpCatLink) {
    e.preventDefault();
    state.category = pdpCatLink.dataset.pdpCat;
    closeProductPage();
    renderCatalog();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (e.target.closest("#pdpPrevImgBtn")) {
    setGallerySlide(state.galleryIndex - 1);
    return;
  }

  if (e.target.closest("#pdpNextImgBtn")) {
    setGallerySlide(state.galleryIndex + 1);
    return;
  }

  const slideToBtn = e.target.closest("[data-slide-to]");
  if (slideToBtn) {
    setGallerySlide(Number(slideToBtn.dataset.slideTo));
    return;
  }

  const variantPill = e.target.closest("[data-variant-val]");
  if (variantPill) {
    state.selectedVariant = variantPill.dataset.variantVal;
    const lbl = document.getElementById("pdpSelectedVariantLabel");
    if (lbl) lbl.textContent = state.selectedVariant;
    document.querySelectorAll(".pdp-variant-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.variantVal === state.selectedVariant);
    });
    return;
  }

  const bundleCard = e.target.closest("[data-bundle-qty]");
  if (bundleCard) {
    state.pdpQty = Number(bundleCard.dataset.bundleQty) || 1;
    const valEl = document.getElementById("pdpQtyVal");
    if (valEl) valEl.textContent = state.pdpQty;
    updatePdpOrderSummary();
    return;
  }

  if (e.target.closest("#pdpQtyMinus")) {
    state.pdpQty = Math.max(1, state.pdpQty - 1);
    const valEl = document.getElementById("pdpQtyVal");
    if (valEl) valEl.textContent = state.pdpQty;
    updatePdpOrderSummary();
    return;
  }

  if (e.target.closest("#pdpQtyPlus")) {
    state.pdpQty += 1;
    const valEl = document.getElementById("pdpQtyVal");
    if (valEl) valEl.textContent = state.pdpQty;
    updatePdpOrderSummary();
    return;
  }

  if (e.target.closest("#pdpAddToCartBtn") && state.activeProductId) {
    addToCart(state.activeProductId, state.pdpQty);
    return;
  }

  const directBtn = e.target.closest("[data-direct-order]");
  if (directBtn) {
    const productId = directBtn.dataset.directOrder;
    openProductPage(productId);
    return;
  }

  const quickViewEl = e.target.closest("[data-quickview]");
  if (quickViewEl) {
    openProductPage(quickViewEl.dataset.quickview);
    return;
  }

  const productCardEl = e.target.closest(".product-card[data-id]");
  if (productCardEl && !e.target.closest("button") && !e.target.closest("a")) {
    const productId = productCardEl.dataset.id;
    if (productId) {
      openProductPage(productId);
      return;
    }
  }

  const addBtn = e.target.closest("[data-add]");
  if (addBtn) {
    addToCart(addBtn.dataset.add);
    return;
  }

  const qtyBtn = e.target.closest("[data-qty-id]");
  if (qtyBtn) {
    updateQty(qtyBtn.dataset.qtyId, Number(qtyBtn.dataset.delta));
    return;
  }

  const footerCatLink = e.target.closest("[data-cat]");
  if (footerCatLink) {
    closeProductPage();
    state.category = footerCatLink.dataset.cat;
    renderCatalog();
  }
});

// أحداث نافذة الطلب الجزائرية
wilayaSelect.addEventListener("change", handleWilayaChange);

document.querySelectorAll('input[name="deliveryType"]').forEach((radio) => {
  radio.addEventListener("change", updateCheckoutSummary);
});

// السماح بإدخال الأرقام فقط في خانة الهاتف
[customerPhone, customerPhone2].forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d]/g, "").slice(0, 10);
  });
});

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formErrorMsg.classList.add("hidden");

  const nameVal = customerName.value.trim();
  const phoneVal = customerPhone.value.trim();
  const phone2Val = customerPhone2.value.trim();
  const wilayaCode = wilayaSelect.value;
  const communeVal = communeSelect.value;
  const addressVal = customerAddress.value.trim();
  const deliveryType = getSelectedDeliveryType();

  if (nameVal.length < 3) {
    formErrorMsg.textContent = "⚠️ يرجى إدخال الاسم واللقب الكامل.";
    formErrorMsg.classList.remove("hidden");
    customerName.focus();
    return;
  }

  if (!isValidAlgerianPhone(phoneVal)) {
    formErrorMsg.textContent = "⚠️ يرجى إدخال رقم هاتف جزائري صحيح مكون من 10 أرقام (يبدأ بـ 05 أو 06 أو 07).";
    formErrorMsg.classList.remove("hidden");
    customerPhone.focus();
    return;
  }

  if (phone2Val && !isValidAlgerianPhone(phone2Val)) {
    formErrorMsg.textContent = "⚠️ رقم الهاتف الإضافي غير صحيح (يجب أن يتكون من 10 أرقام ويبدأ بـ 05 أو 06 أو 07).";
    formErrorMsg.classList.remove("hidden");
    customerPhone2.focus();
    return;
  }

  if (!wilayaCode) {
    formErrorMsg.textContent = "⚠️ يرجى اختيار الولاية من القائمة.";
    formErrorMsg.classList.remove("hidden");
    wilayaSelect.focus();
    return;
  }

  if (!communeVal) {
    formErrorMsg.textContent = "⚠️ يرجى اختيار البلدية من القائمة.";
    formErrorMsg.classList.remove("hidden");
    communeSelect.focus();
    return;
  }

  const wilaya = ALGERIA_WILAYAS.find((w) => w.code === wilayaCode);
  const shipCost = deliveryType === "home" ? wilaya.homePrice : wilaya.deskPrice;
  if (shipCost <= 0) {
    formErrorMsg.textContent = "⚠️ عذراً، هذا النوع من التوصيل غير متوفر حالياً للولاية المختارة.";
    formErrorMsg.classList.remove("hidden");
    return;
  }
  const orderItemsDetailed = state.checkoutItems.map((entry) => {
    const p = PRODUCTS.find((item) => item.id === entry.id);
    return {
      id: entry.id,
      name: p ? p.name : entry.id,
      price: p ? p.price : 0,
      qty: entry.qty
    };
  });
  const subtotal = orderItemsDetailed.reduce((sum, item) => sum + item.price * item.qty, 0);
  const grandTotal = subtotal + shipCost;
  const orderNumber = "FY-" + Math.floor(100000 + Math.random() * 900000);

  const newOrder = {
    orderNumber,
    createdAt: new Date().toISOString(),
    customerName: nameVal,
    phone: phoneVal,
    phone2: phone2Val || "",
    wilayaCode: wilaya.code,
    wilayaName: wilaya.name,
    commune: communeVal,
    address: addressVal || "",
    deliveryType,
    items: orderItemsDetailed,
    subtotal,
    shippingCost: shipCost,
    grandTotal,
    status: "pending", // pending | confirmed | shipped | cancelled
    telegramSent: false
  };

  // حفظ الطلب في سجل لوحة التحكم (localStorage)
  const existingOrders = JSON.parse(localStorage.getItem("foryou_orders") || "[]");
  existingOrders.unshift(newOrder);
  localStorage.setItem("foryou_orders", JSON.stringify(existingOrders));

  // إرسال الطلب تلقائياً إلى تيليجرام إذا كان مربوطاً
  sendOrderToTelegram(newOrder);

  // عرض وصل تأكيد الطلب
  orderReceipt.innerHTML = `
    <div><strong>رقم الطلبية:</strong> <span dir="ltr">${orderNumber}</span></div>
    <div><strong>الزبون:</strong> ${nameVal}</div>
    <div><strong>رقم الهاتف:</strong> <span dir="ltr">${phoneVal}${phone2Val ? ` / ${phone2Val}` : ""}</span></div>
    <div><strong>الولاية والبلدية:</strong> ${wilaya.code} - ${wilaya.name} (${communeVal})</div>
    ${addressVal ? `<div><strong>العنوان:</strong> ${addressVal}</div>` : ""}
    <div><strong>نوع التوصيل:</strong> ${deliveryType === "home" ? "توصيل إلى باب المنزل 🏠" : "مكتب التوصيل (Stop Desk) 🏢"}</div>
    <div style="margin-top:0.4rem; padding-top:0.4rem; border-top:1px dashed var(--border-subtle); font-size:1rem;">
      <strong>المبلغ الإجمالي عند الاستلام:</strong>
      <strong style="color:var(--emerald);">${formatDZD(grandTotal)}</strong>
    </div>
  `;

  if (state.checkoutMode === "cart") {
    state.cart = [];
    saveCart();
  }

  orderForm.reset();
  handleWilayaChange();
  closeCheckoutModal();
  successModalBackdrop.classList.remove("hidden");
});

// دالة إرسال الطلب إلى الخادم وتيليجرام
async function sendOrderToTelegram(order) {
  try {
    if (window.location.protocol.startsWith("http")) {
      const apiRes = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
      });
      if (apiRes.ok) {
        const resData = await apiRes.json();
        if (resData.telegramSent) return true;
      }
    }
  } catch (e) {
    // في حال الفتح المباشر كملف محلي نكمل عبر localStorage
  }

  try {
    const tgConfig = JSON.parse(localStorage.getItem("foryou_telegram_config") || "{}");
    if (!tgConfig.botToken || !tgConfig.chatId) return false;

    const itemsLines = order.items
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

    const response = await fetch(
      `https://api.telegram.org/bot${tgConfig.botToken.trim()}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: tgConfig.chatId.trim(),
          text: message,
          parse_mode: "Markdown"
        })
      }
    );

    const data = await response.json();
    if (data && data.ok) {
      const orders = JSON.parse(localStorage.getItem("foryou_orders") || "[]");
      const target = orders.find((o) => o.orderNumber === order.orderNumber);
      if (target) {
        target.telegramSent = true;
        localStorage.setItem("foryou_orders", JSON.stringify(orders));
      }
      return true;
    }
  } catch (err) {
    console.error("Telegram notification error:", err);
  }
  return false;
}

closeModalBtn.addEventListener("click", closeQuickView);
productModalBackdrop.addEventListener("click", (e) => {
  if (e.target === productModalBackdrop) closeQuickView();
});

closeCheckoutModalBtn.addEventListener("click", closeCheckoutModal);
checkoutModalBackdrop.addEventListener("click", (e) => {
  if (e.target === checkoutModalBackdrop) closeCheckoutModal();
});

closeSuccessBtn.addEventListener("click", () => {
  successModalBackdrop.classList.add("hidden");
});

if (cartTrigger) cartTrigger.addEventListener("click", () => toggleCart(true));
if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCart(false));
if (cartBackdrop) cartBackdrop.addEventListener("click", () => toggleCart(false));

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (state.cart.length === 0) return;
    openCheckoutModal(state.cart, "cart");
  });
}

// زر واتساب العائم للاستفسار السريع + الاختصار السري للوحة التحكم في التذييل
(function initWhatsAppAndSecretAdmin() {
  const waBtn = document.getElementById("floatingWhatsappBtn");
  const secretAdmin = document.getElementById("secretAdminTrigger");
  let storeWhatsapp = "213550000000";

  try {
    const localCfg = JSON.parse(localStorage.getItem("foryou_telegram_config") || "{}");
    if (localCfg.whatsapp) storeWhatsapp = localCfg.whatsapp;
  } catch (e) {}

  if (window.location.protocol.startsWith("http")) {
    fetch("/api/config")
      .then((r) => (r.ok ? r.json() : null))
      .then((cfg) => {
        if (cfg && cfg.whatsapp) {
          storeWhatsapp = cfg.whatsapp;
        }
      })
      .catch(() => {});
  }

  // تهيئة وتفعيل أكواد التتبع (Facebook Pixel & TikTok Pixel) وأسعار الشحن المخصصة
  (function initPixelsAndShippingRates() {
    function injectMetaPixel(pixelId) {
      if (!pixelId || window.fbq) return;
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      try {
        fbq('init', pixelId);
        fbq('track', 'PageView');
      } catch (err) {}
    }

    function injectTikTokPixel(pixelId) {
      if (!pixelId || window.ttq) return;
      !function (w, d, t) {
        w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=r+"?sdkid="+e+"&lib="+t;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)};
        try {
          ttq.load(pixelId);
          ttq.page();
        } catch (err) {}
      }(window, document, 'ttq');
    }

    try {
      const localCfg = JSON.parse(localStorage.getItem("foryou_telegram_config") || "{}");
      if (localCfg.fbPixelId) injectMetaPixel(localCfg.fbPixelId);
      if (localCfg.tiktokPixelId) injectTikTokPixel(localCfg.tiktokPixelId);
      if (localCfg.shippingRates) applyCustomShippingRates(localCfg.shippingRates);
    } catch (e) {}

    if (window.location.protocol.startsWith("http")) {
      fetch("/api/config")
        .then((r) => (r.ok ? r.json() : null))
        .then((cfg) => {
          if (!cfg) return;
          if (cfg.fbPixelId) injectMetaPixel(cfg.fbPixelId);
          if (cfg.tiktokPixelId) injectTikTokPixel(cfg.tiktokPixelId);
          if (cfg.shippingRates) {
            applyCustomShippingRates(cfg.shippingRates);
            populateWilayasDropdown();
          }
        })
        .catch(() => {});
    }
  })();

  if (waBtn) {
    waBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let cleanNum = String(storeWhatsapp || "213550000000").replace(/[^\d]/g, "");
      if (cleanNum.startsWith("0")) cleanNum = "213" + cleanNum.slice(1);
      const activeProd = state.activeProductId
        ? PRODUCTS.find((p) => p.id === state.activeProductId)
        : null;
      const text = activeProd
        ? `السلام عليكم متجر Foryou، أريد الاستفسار حول المنتج: ${activeProd.name} (${formatDZD(activeProd.price)})`
        : "السلام عليكم متجر Foryou، أريد الاستفسار حول منتجاتكم والتوصيل.";
      window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });
  }

  if (secretAdmin) {
    let clickCount = 0;
    let clickTimer = null;
    secretAdmin.addEventListener("click", () => {
      clickCount++;
      clearTimeout(clickTimer);
      if (clickCount >= 3) {
        clickCount = 0;
        window.location.href = "admin.html";
      } else {
        clickTimer = setTimeout(() => {
          clickCount = 0;
        }, 1200);
      }
    });
  }
})();

// تهيئة المتجر
populateWilayasDropdown();
renderCatalog();
renderCart();
handleHashRoute();
syncProductsFromServer();

// ====== الخلفية التفاعلية المتحركة (Canvas + 3D Map Tilt + Live Wilaya Ticker) ======
(function initInteractiveAlgeriaBackground() {
  // إلغاء الرسوميات التفاعلية الثقيلة على الهواتف لتسريع التصفح والاستجابة 100%
  const isMobile = window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
  if (isMobile) return;

  const canvas = document.getElementById("bgCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, active: false };

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    const PARTICLE_COUNT = Math.min(65, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: Math.random() * 2 + 1,
      color: Math.random() > 0.45 ? "#10b981" : "#38bdf8"
    }));

    // شهب ضوئية سريعة تعبر الخلفية
    const meteors = [];
    function spawnMeteor() {
      meteors.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.5),
        vx: (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 3),
        vy: 1.5 + Math.random() * 2.5,
        len: 60 + Math.random() * 60,
        alpha: 1,
        color: Math.random() > 0.5 ? "16, 185, 129" : "56, 189, 248"
      });
    }
    setInterval(() => {
      if (meteors.length < 3) spawnMeteor();
    }, 2200);

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);

      // تحديث ورسم النقاط المضيئة وخطوط الشبكة
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // تفاعل خفيف مع حركة الماوس
        if (mouse.active) {
          const dxm = mouse.x - p.x;
          const dym = mouse.y - p.y;
          const distMouse = Math.hypot(dxm, dym);
          if (distMouse < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - distMouse / 160) * 0.25})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 130) * 0.16})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // رسم الشهب الضوئية
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.alpha -= 0.014;

        if (m.alpha <= 0) {
          meteors.splice(i, 1);
          continue;
        }

        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - m.vx * 14,
          m.y - m.vy * 14
        );
        grad.addColorStop(0, `rgba(${m.color}, ${m.alpha})`);
        grad.addColorStop(1, `rgba(${m.color}, 0)`);

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.stroke();
      }

      requestAnimationFrame(drawFrame);
    }

    drawFrame();
  }

  // تأثير الإمالة ثلاثية الأبعاد (3D Tilt) لخريطة الجزائر في الواجهة (لأجهزة الكمبيوتر فقط حتى لا يعيق اللمس في الهاتف)
  const holoStage = document.getElementById("algeriaHoloStage");
  if (holoStage && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    holoStage.addEventListener("mousemove", (e) => {
      const rect = holoStage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      holoStage.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    });
    holoStage.addEventListener("mouseleave", () => {
      holoStage.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  }

  // شريط التوصيل المباشر المتغير المنطلق من ولاية معسكر (29) نحو الولايات الـ 58
  const ticker = document.getElementById("liveRouteTicker");
  if (ticker) {
    const routes = [
      "📡 الانطلاق من معسكر (29) ⬅ وهران (31) • الجزائر (16) • قسنطينة (25)",
      "🚚 شحن سريع من معسكر (29) ⬅ سطيف (19) • تلمسان (13) • عنابة (23)",
      "⚡ تغطية الجنوب الكبير: معسكر (29) ⬅ أدرار (01) • تمنراست (11) • بشار (08)",
      "📦 الدفع عند الاستلام: معسكر (29) ⬅ غرداية (47) • ورقلة (30) • تندوف (37)"
    ];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % routes.length;
      ticker.textContent = routes[idx];
    }, 3500);
  }
})();
