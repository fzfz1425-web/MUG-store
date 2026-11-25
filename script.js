
const WHATSAPP_NUMBER = "966597816556";

/* =========================
   منتجات MUG الحقيقية
========================= */

const products = [
  // الأكواب الفخارية
  {
    id: "pottery-1",
    name: "الكوب الفخاري الأخضر",
    category: "pottery",
    categoryName: "فخاري",
    price: 65,
    image: "IMG_2173.JPG",
    description: "كوب أخضر بقاعدة بيضاء وصحن، يحمل عبارة صباحية ملهمة عن الأماني والسعي."
  },
  {
    id: "pottery-2",
    name: "الكوب الفخاري الأزرق",
    category: "pottery",
    categoryName: "فخاري",
    price: 65,
    image: "IMG_2172.JPG",
    description: "كوب أزرق بقاعدة رملية وصحن، بتصميم هادئ وعبارة صباحية ملهمة."
  },
  {
    id: "pottery-3",
    name: "كوب الرموز الملونة",
    category: "pottery",
    categoryName: "فخاري",
    price: 55,
    image: "IMG_2187.JPG",
    description: "كوب كريمي مزين برموز وملصقات بارزة وملونة."
  },
  {
    id: "pottery-4",
    name: "كوب جناح الفراشة",
    category: "pottery",
    categoryName: "فخاري",
    price: 70,
    image: "IMG_2190.JPG",
    description: "كوب كريمي بمقبض على شكل جناح فراشة، يحمل عبارة: we all are a mess, of thousands unfinished thoughts."
  },
  {
    id: "pottery-5",
    name: "كوب ابدأ واستمر",
    category: "pottery",
    categoryName: "فخاري",
    price: 65,
    image: "IMG_2185.JPG",
    description: "كوب أبيض مائل للرمادي دون مقبض، يحمل عبارة: ابدأ.. استمر.. تصل، وقاعدة النجاح."
  },

  // الأكواب الزجاجية
  {
    id: "glass-1",
    name: "كوب الكتب والورد",
    category: "glass",
    categoryName: "زجاجي",
    price: 45,
    image: "IMG_2193.JPG",
    description: "كوب زجاجي بغطاء خشبي ومصاصة، برسوم الكتب والورد وعبارة: Just a girl who loves..."
  },
  {
    id: "glass-2",
    name: "كوب الفراشات الوردية",
    category: "glass",
    categoryName: "زجاجي",
    price: 40,
    image: "IMG_2191.JPG",
    description: "كوب زجاجي بمقبض وردي ورسومات الفراشات والورود، مع عبارة: You're unique and one of a kind."
  },
  {
    id: "glass-3",
    name: "كوب BOOKS & coffee",
    category: "glass",
    categoryName: "زجاجي",
    price: 45,
    image: "IMG_2194.JPG",
    description: "كوب زجاجي بغطاء خشبي ومصاصة، لعشاق الكتب والقهوة."
  },
  {
    id: "glass-4",
    name: "كوب الكتب والكرز",
    category: "glass",
    categoryName: "زجاجي",
    price: 40,
    image: "IMG_2192.JPG",
    description: "كوب شفاف بمقبض، مزين برسومات الكتب والورود والكرز والفيونكات."
  },

  // الأكواب المطبوعة
  {
    id: "printed-1",
    name: "كوب شمسي بداخلي",
    category: "printed",
    categoryName: "مطبوع",
    price: 45,
    image: "IMG_2182.JPG",
    description: "كوب أصفر فاتح بحافة زرقاء وشمس في الداخل، يحمل عبارة: من وجد شمسه التي بداخله لن يبحث عن أي نور في الخارج."
  },
  {
    id: "printed-2",
    name: "كوب هانت",
    category: "printed",
    categoryName: "مطبوع",
    price: 40,
    image: "IMG_2177.JPG",
    description: "كوب أبيض برسومات الشمس والغيوم والنجوم، يحمل عبارة: هانت."
  },
  {
    id: "printed-3",
    name: "كوب المهندس",
    category: "printed",
    categoryName: "مطبوع",
    price: 40,
    image: "IMG_2176.JPG",
    description: "كوب أبيض برسومات ورود صغيرة، يحمل عبارة: أنا مش بني آدم أنا مهندس."
  },
  {
    id: "printed-4",
    name: "كوب Megan",
    category: "printed",
    categoryName: "مطبوع",
    price: 45,
    image: "IMG_2196.JPG",
    description: "كوب أبيض بطباعة فيونكة وردية وقلوب حمراء واسم Megan."
  },

  // الأكواب المنحوتة
  {
    id: "carved-1",
    name: "مجموعة Bloom with Grace",
    category: "carved",
    categoryName: "منحوت",
    price: 95,
    image: "IMG_2188.JPG",
    description: "مجموعة أكواب وأوانٍ بتفاصيل فنية وحروف بارزة ومحفورة، تحمل عبارة: bloom with grace."
  },
  {
    id: "carved-2",
    name: "مجموعة Strong Independent",
    category: "carved",
    categoryName: "منحوت",
    price: 90,
    image: "IMG_2178.JPG",
    description: "مجموعة أكواب فخارية محفورة بعبارات: وحيدات، مبهرة، STRONG INDEPENDENT."
  },

  // البكجات والهدايا
  {
    id: "gifts-1",
    name: "بكج يا شمسي",
    category: "gifts",
    categoryName: "بكجات وهدايا",
    price: 125,
    image: "IMG_2181.JPG",
    description: "بكج هدية داخل صندوق، يحتوي على كوب وصحن برسمة الشمس ورسالة داخل الغطاء."
  },
  {
    id: "gifts-2",
    name: "بكج أحلام وأنس",
    category: "gifts",
    categoryName: "بكجات وهدايا",
    price: 150,
    image: "IMG_2184.JPG",
    description: "بكج داخل صندوق كرتوني يضم كوبين بالأسماء والعبارات: أحلام وأنس."
  },
  {
    id: "gifts-3",
    name: "بكج سنوبي",
    category: "gifts",
    categoryName: "بكجات وهدايا",
    price: 110,
    image: "IMG_2195.JPG",
    description: "كوب أبيض بمقبض أحمر مع علبته، بطباعة شخصية سنوبي."
  },
  {
    id: "gifts-4",
    name: "بكج الباستيل",
    category: "gifts",
    categoryName: "بكجات وهدايا",
    price: 145,
    image: "IMG_2197.JPG",
    description: "مجموعة أكواب هدايا مخططة بألوان باستيل ناعمة، مع فيونكات وأسماء."
  }
];

const categoryLabels = {
  pottery: "الأكواب الفخارية",
  glass: "الأكواب الزجاجية",
  printed: "الأكواب المطبوعة",
  carved: "الأكواب المنحوتة",
  gifts: "البكجات والهدايا"
};

const validCategories = ["all", ...Object.keys(categoryLabels)];

/* =========================
   السلة
========================= */

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("mugCart") || "[]");
  if (!Array.isArray(cart)) cart = [];
} catch {
  cart = [];
}

cart = cart.filter(item =>
  products.some(product => product.id === item.id) &&
  Number.isInteger(item.qty) &&
  item.qty > 0
);

const money = number =>
  `${number.toLocaleString("en-US")} ر.س`;

/* =========================
   بطاقة المنتج
========================= */

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"
        >
        <div class="product-fallback">MUG</div>
      </div>

      <div class="product-info">
        <span class="product-category">
          ${product.categoryName}
        </span>

        <h3>${product.name}</h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-bottom">
          <span class="price">${money(product.price)}</span>

          <button
            class="add-button"
            data-add="${product.id}"
            aria-label="أضف ${product.name} إلى السلة"
          >+</button>
        </div>
      </div>
    </article>
  `;
}

/* =========================
   الفلاتر والروابط المباشرة
========================= */

function getCategoryFromURL() {
  const category = window.location.hash.replace("#", "").trim();

  return validCategories.includes(category) ? category : "all";
}

function setActiveFilter(category) {
  document.querySelectorAll(".filter-chip").forEach(button => {
    const isActive = button.dataset.filter === category;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyFilter(category, updateURL = false) {
  const selectedCategory = validCategories.includes(category)
    ? category
    : "all";

  setActiveFilter(selectedCategory);

  const all = document.getElementById("all-products");

  if (all) {
    const shown = selectedCategory === "all"
      ? products
      : products.filter(product => product.category === selectedCategory);

    all.innerHTML = shown.map(productCard).join("") ||
      '<p class="no-results">لا توجد منتجات في هذا القسم.</p>';
  }

  if (updateURL && document.getElementById("all-products")) {
    const newURL = selectedCategory === "all"
      ? window.location.pathname + window.location.search
      : `${window.location.pathname}${window.location.search}#${selectedCategory}`;

    history.replaceState(null, "", newURL);
  }
}

/* =========================
   عرض المنتجات
========================= */

function renderProducts() {
  const featured = document.getElementById("featured-products");

  if (featured) {
    featured.innerHTML = products
      .filter(product =>
        ["pottery", "printed", "gifts"].includes(product.category)
      )
      .slice(0, 4)
      .map(productCard)
      .join("");
  }

  const all = document.getElementById("all-products");

  if (all) {
    applyFilter(getCategoryFromURL());
  }
}

/* =========================
   حفظ وتحديث السلة
========================= */

function saveCart() {
  localStorage.setItem("mugCart", JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const item = cart.find(item => item.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart();
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  saveCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  document.querySelectorAll(".cart-count").forEach(element => {
    element.textContent = count;
  });

  document.querySelectorAll(".cart-items").forEach(element => {
    if (!cart.length) {
      element.innerHTML = `
        <div class="cart-empty">
          سلتك فارغة حاليًا<br>
          ابدأ باختيار منتجاتك المفضلة.
        </div>
      `;
      return;
    }

    element.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);

      return `
        <div class="cart-row">
          <div>
            <h4>${product.name}</h4>
            <small>${money(product.price)} للقطعة</small>
          </div>

          <div class="quantity-controls">
            <button data-qty="${product.id}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button data-qty="${product.id}" data-delta="1">+</button>
          </div>
        </div>
      `;
    }).join("");
  });

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);

  document.querySelectorAll(".cart-total-value").forEach(element => {
    element.textContent = money(total);
  });

  document.querySelectorAll(".checkout-button").forEach(element => {
    element.disabled = !cart.length;
  });
}

/* =========================
   فتح وإغلاق السلة
========================= */

function openCart() {
  document.querySelector(".cart-drawer")?.classList.add("open");
  document.querySelector(".cart-overlay")?.classList.add("open");
}

function closeCart() {
  document.querySelector(".cart-drawer")?.classList.remove("open");
  document.querySelector(".cart-overlay")?.classList.remove("open");
}

/* =========================
   الطلب عبر واتساب
========================= */

function checkout() {
  if (!cart.length) return;

  const lines = cart.map(item => {
    const product = products.find(p => p.id === item.id);

    return `• ${product.name} × ${item.qty} — ${money(product.price * item.qty)}`;
  });

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);

  const message = `
مرحبًا MUG،
أرغب بطلب المنتجات التالية:

${lines.join("\n")}

الإجمالي التقديري: ${money(total)}

أرجو تأكيد توفر المنتجات وتكلفة التوصيل.
`;

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener");
}

/* =========================
   أحداث الأزرار
========================= */

document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    addToCart(addButton.dataset.add);
  }

  const quantityButton = event.target.closest("[data-qty]");

  if (quantityButton) {
    changeQty(
      quantityButton.dataset.qty,
      Number(quantityButton.dataset.delta)
    );
  }

  if (event.target.closest("[data-open-cart]")) {
    openCart();
  }

  if (
    event.target.closest("[data-close-cart]") ||
    event.target.matches("[data-cart-overlay]")
  ) {
    closeCart();
  }

  if (event.target.closest("[data-checkout]")) {
    checkout();
  }

  const filterButton = event.target.closest("[data-filter]");

  if (filterButton) {
    applyFilter(filterButton.dataset.filter, true);
  }
});

/* =========================
   دعم الرجوع والتنقل بالروابط
========================= */

window.addEventListener("hashchange", () => {
  if (document.getElementById("all-products")) {
    applyFilter(getCategoryFromURL());
  }
});

/* =========================
   قائمة الجوال
========================= */

const menuButton = document.querySelector(".menu-toggle");

menuButton?.addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const isOpen = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
});

/* =========================
   السنة الحالية
========================= */

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});

/* =========================
   تشغيل الموقع
========================= */

renderProducts();
renderCart();
