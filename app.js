// Shreeji Krupa General Store & Farsan - Real-Time Inventory & PDF Cash Receipt App

// Version key to force browser LocalStorage sync with USER'S EXACT EMBEDDED BASE64 IMAGE DATA
const INVENTORY_VERSION = "v15.0_synchronized_hero_and_grid_cart";

// Fallback images if Base64 script isn't ready
const getImg = (key, fallbackUrl) => {
  if (typeof USER_GOOGLE_IMAGES !== 'undefined' && USER_GOOGLE_IMAGES[key]) {
    return USER_GOOGLE_IMAGES[key];
  }
  return fallbackUrl;
};

// Real Shop Products - 100% Unique, Working, Embedded Base64 Images from User's Exact Google URLs!
const INITIAL_PRODUCTS = [
  // 🥨 KHAMAN & FARSAN (User Provided Exact Images - Embedded Base64)
  {
    id: "p16",
    title: "Special Nylon Khaman Dhokla",
    category: "farsan",
    price: 160,
    mrp: 200,
    stock: 25,
    maxStockCapacity: 50,
    unit: "1 kg",
    rating: 4.9,
    reviewsCount: 160,
    badge: "Fresh Morning Batch",
    image: getImg('khaman', 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'),
    description: "Soft, spongy steamed nylon khaman tempered with mustard seeds, green chillies, fresh coriander & coconut."
  },
  {
    id: "p17",
    title: "Spicy Clove Ratlami Sev",
    category: "farsan",
    price: 240,
    mrp: 280,
    stock: 35,
    maxStockCapacity: 60,
    unit: "1 kg",
    rating: 4.85,
    reviewsCount: 110,
    badge: "Authentic Spicy",
    image: getImg('ratlami_sev', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'),
    description: "Spicy clove-infused Ratlami Sev prepared daily with pure peanut oil and traditional masala."
  },
  {
    id: "p18",
    title: "Bhavnagari Thick Gathiya",
    category: "farsan",
    price: 120,
    mrp: 150,
    stock: 28,
    maxStockCapacity: 50,
    unit: "500g Pack",
    rating: 4.8,
    reviewsCount: 85,
    badge: "Gujarati Classic",
    image: getImg('gathiya', 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80'),
    description: "Soft and melt-in-mouth thick ajwain gram flour gathiya, perfect with fried chillies."
  },
  {
    id: "p19",
    title: "Pure Ghee Saffron Kesar Jalebi",
    category: "sweets",
    price: 320,
    mrp: 380,
    stock: 12,
    maxStockCapacity: 30,
    unit: "1 kg",
    rating: 4.95,
    reviewsCount: 240,
    badge: "Hot & Syrupy",
    image: getImg('jalebi', 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80'),
    description: "Crispy spiral jalebis dipped in pure saffron-cardamom sugar syrup, cooked fresh in Shuddha Ghee."
  },

  // 🍚 MAMRA & SPECIAL SNACKS (User Provided Exact Images - Embedded Base64)
  {
    id: "p1",
    title: "Kolhapuri Spicy Tikha Mamra",
    category: "mamra",
    price: 60,
    mrp: 75,
    stock: 45,
    maxStockCapacity: 80,
    unit: "500g Pack",
    rating: 4.9,
    reviewsCount: 155,
    badge: "Chatpata Special",
    image: getImg('tikha_mamra', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'),
    description: "Crispy puffed rice tossed in spicy red chilli Kolhapuri masala, roasted peanuts, and garlic."
  },
  {
    id: "p2",
    title: "Garlic Lasaniya Sev Mamra Mix",
    category: "mamra",
    price: 80,
    mrp: 95,
    stock: 35,
    maxStockCapacity: 60,
    unit: "500g Pack",
    rating: 4.85,
    reviewsCount: 120,
    badge: "Spicy Garlic",
    image: getImg('tikha_mamra', 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'),
    description: "Traditional Gujarati mixture of crispy mamra, garlic fried sev, curry leaves, and spices."
  },
  {
    id: "p3",
    title: "Plain Crispy Nylon Mamra",
    category: "mamra",
    price: 45,
    mrp: 55,
    stock: 60,
    maxStockCapacity: 100,
    unit: "500g Pack",
    rating: 4.75,
    reviewsCount: 90,
    badge: "Bhel Special",
    image: getImg('plain_mamra', 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80'),
    description: "Ultra light and crunchy roasted white rice mamra, ideal for home bhel and daily snacking."
  },

  // 🥤 COLD DRINKS & BEVERAGES (User Provided Exact Images - Embedded Base64)
  {
    id: "p4",
    title: "Thums Up Cold Drink (2 Litre Bottle)",
    category: "colddrinks",
    price: 95,
    mrp: 105,
    stock: 40,
    maxStockCapacity: 70,
    unit: "2 Litre Bottle",
    rating: 4.95,
    reviewsCount: 240,
    badge: "Chilled",
    image: getImg('thumsup', 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'),
    description: "Strong fizzy cola taste. Served ice cold directly from our store refrigerator."
  },
  {
    id: "p5",
    title: "Sprite Cold Drink (2 Litre Bottle)",
    category: "colddrinks",
    price: 95,
    mrp: 105,
    stock: 30,
    maxStockCapacity: 60,
    unit: "2 Litre Bottle",
    rating: 4.85,
    reviewsCount: 180,
    badge: "Chilled",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80",
    description: "Refreshing lemon-lime clear fizzy soda drink, perfect for parties and snacks."
  },
  {
    id: "p6",
    title: "Maaza Mango Juice (1.2 Litre Bottle)",
    category: "colddrinks",
    price: 75,
    mrp: 85,
    stock: 25,
    maxStockCapacity: 50,
    unit: "1.2 Litre Bottle",
    rating: 4.9,
    reviewsCount: 165,
    badge: "Real Mango",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
    description: "Rich Alphonsos mango pulp drink. Thick, sweet, and delicious for all ages."
  },
  {
    id: "p7",
    title: "Red Bull Energy Drink (250ml Can)",
    category: "colddrinks",
    price: 125,
    mrp: 135,
    stock: 20,
    maxStockCapacity: 40,
    unit: "250ml Can",
    rating: 4.8,
    reviewsCount: 110,
    badge: "Energy Boost",
    image: getImg('redbull', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'),
    description: "Vitalizes body and mind. Premium chilled energy drink."
  },

  // 🥔 WAFERS & CHIPS
  {
    id: "p8",
    title: "Balaji Masala Wafers Packet",
    category: "wafers",
    price: 35,
    mrp: 40,
    stock: 50,
    maxStockCapacity: 100,
    unit: "Packet (135g)",
    rating: 4.8,
    reviewsCount: 140,
    badge: "Crispy Snack",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    description: "Crispy potato chips tossed in chatpata red chilli and spices mixture."
  },
  {
    id: "p9",
    title: "Lay's India's Magic Masala Chips",
    category: "wafers",
    price: 30,
    mrp: 35,
    stock: 65,
    maxStockCapacity: 100,
    unit: "Family Pack (115g)",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    description: "Ridged potato chips coated with signature Indian spicy chatpata flavor."
  },
  {
    id: "p10",
    title: "Pringles Sour Cream & Onion Can",
    category: "wafers",
    price: 115,
    mrp: 135,
    stock: 18,
    maxStockCapacity: 40,
    unit: "Can (107g)",
    rating: 4.85,
    reviewsCount: 95,
    badge: "Imported Style",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=600&q=80",
    description: "Stackable potato crisps seasoned with savory sour cream and tangy onion."
  },

  // 🍪 BISCUITS & COOKIES
  {
    id: "p11",
    title: "Oreo Vanilla Cream Biscuits Pack",
    category: "biscuits",
    price: 40,
    mrp: 45,
    stock: 40,
    maxStockCapacity: 80,
    unit: "Pack (120g)",
    rating: 4.85,
    reviewsCount: 195,
    badge: "Kids Favorite",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    description: "Rich chocolate sandwich cookies filled with smooth vanilla cream inside."
  },
  {
    id: "p12",
    title: "Britannia Good Day Butter Biscuits",
    category: "biscuits",
    price: 30,
    mrp: 35,
    stock: 55,
    maxStockCapacity: 90,
    unit: "Pack (150g)",
    rating: 4.75,
    reviewsCount: 120,
    badge: "Tea Time",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
    description: "Crunchy butter cookies packed with rich taste, ideal companion for hot tea."
  },
  {
    id: "p13",
    title: "Parle-G Gold Biscuits Family Pack",
    category: "biscuits",
    price: 120,
    mrp: 140,
    stock: 35,
    maxStockCapacity: 70,
    unit: "1 kg Mega Pack",
    rating: 4.95,
    reviewsCount: 420,
    badge: "Value Pack",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    description: "Original glucose biscuits enriched with wheat and milk goodness."
  },

  // 🍫 CHOCOLATES
  {
    id: "p14",
    title: "Cadbury Dairy Milk Silk Chocolate",
    category: "chocolates",
    price: 175,
    mrp: 190,
    stock: 22,
    maxStockCapacity: 50,
    unit: "Bar (150g)",
    rating: 4.95,
    reviewsCount: 280,
    badge: "Silky Smooth",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
    description: "Melt-in-your-mouth premium milk chocolate crafted with rich cocoa and milk solid."
  },
  {
    id: "p15",
    title: "Ferrero Rocher Gift Pack (16 Pieces)",
    category: "chocolates",
    price: 520,
    mrp: 599,
    stock: 12,
    maxStockCapacity: 30,
    unit: "Gift Box",
    rating: 4.9,
    reviewsCount: 95,
    badge: "Luxury Gift",
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80",
    description: "Crispy hazelnut chocolate spheres wrapped in golden foil."
  },

  // 🏏 SPORTS & GAMES (User Provided Shuttlecock Image - Embedded Base64)
  {
    id: "p20",
    title: "Kashmiri Willow Cricket Bat & Leather Ball",
    category: "sports",
    price: 1499,
    mrp: 1999,
    stock: 8,
    maxStockCapacity: 20,
    unit: "Bat + Red Ball Set",
    rating: 4.8,
    reviewsCount: 64,
    badge: "Sports Special",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80",
    description: "Handcrafted Size 6 Kashmiri Willow cricket bat with comfortable cane grip and official 4-piece leather match ball."
  },
  {
    id: "p21",
    title: "Nivia Storm Football (Official Size 5)",
    category: "sports",
    price: 650,
    mrp: 850,
    stock: 14,
    maxStockCapacity: 25,
    unit: "1 Ball",
    rating: 4.7,
    reviewsCount: 42,
    badge: "High Durability",
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&w=600&q=80",
    description: "32-panel hand-stitched synthetic leather football with high shape retention for grass and turf ground games."
  },
  {
    id: "p22",
    title: "Yonex Professional Badminton Rackets Set",
    category: "sports",
    price: 1199,
    mrp: 1599,
    stock: 5,
    maxStockCapacity: 15,
    unit: "Set of 2 Rackets + Cover",
    rating: 4.9,
    reviewsCount: 88,
    badge: "Low Stock Alert",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    description: "Lightweight aluminum-frame badminton racket pair with high tension strings and padded full-zip carrying bag."
  },
  {
    id: "p23",
    title: "Feather Shuttlecock Box (Pack of 10)",
    category: "sports",
    price: 450,
    mrp: 600,
    stock: 18,
    maxStockCapacity: 30,
    unit: "Box of 10",
    rating: 4.75,
    reviewsCount: 35,
    badge: "Top Choice",
    image: getImg('shuttlecock', 'https://images.unsplash.com/photo-1613918431703-884204d021c3?auto=format&fit=crop&w=600&q=80'),
    description: "Duck feather shuttlecocks designed for accurate flight stability and durable outdoor tournament play."
  }
];

// App State
let products = [];
let cart = [];
let orders = [];
let usersDb = [];
let currentUser = null;
let activeCategory = 'all';
let currentSearch = '';
let currentSort = 'default';
let activeView = 'shop';
let pendingCheckoutAction = false;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initUserDatabase();
  loadData();
  setupEventListeners();
  renderApp();
  
  // Live Hero Digital Memo Clock
  setInterval(updateHeroLiveClock, 1000);
  updateHeroLiveClock();
});

function updateHeroLiveClock() {
  const clockEl = document.getElementById('hero-live-clock');
  if (clockEl) {
    const now = new Date();
    clockEl.innerText = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  }
}

// Initialize Persistent User Account Database with dual LocalStorage & SessionStorage backup
function initUserDatabase() {
  let savedUsersStr = localStorage.getItem('skf_users_db');
  if (!savedUsersStr) {
    savedUsersStr = sessionStorage.getItem('skf_users_db');
  }

  if (savedUsersStr) {
    try {
      usersDb = JSON.parse(savedUsersStr);
    } catch (e) {
      usersDb = [];
    }
  }

  // Pre-seed default Admin and default Customer if empty
  const defaultAdminExists = usersDb.some(u => u && (u.email === 'admin@shreejikrupa.com' || u.role === 'admin'));
  if (!defaultAdminExists) {
    usersDb.push({
      id: 'usr_admin_default',
      name: 'Store Keeper',
      email: 'admin@shreejikrupa.com',
      phone: '9876543210',
      address: 'Shreeji Krupa Main Office',
      password: 'admin123',
      role: 'admin'
    });
  }

  const defaultCustomerExists = usersDb.some(u => u && (u.email === 'nayan@shreejikrupa.com' || u.email === 'customer@shreejikrupa.com'));
  if (!defaultCustomerExists) {
    usersDb.push({
      id: 'usr_cust_default',
      name: 'Nayan Patel',
      email: 'nayan@shreejikrupa.com',
      phone: '9876543210',
      address: 'Main Bazaar Road, City Center',
      password: 'customer123',
      role: 'user'
    });
  }

  // Pre-seed Neel customer account if not present
  const neelUserExists = usersDb.some(u => u && (u.email === 'neel@gmail.com'));
  if (!neelUserExists) {
    usersDb.push({
      id: 'usr_neel_default',
      name: 'Neel',
      email: 'neel@gmail.com',
      phone: '9876543210',
      address: 'Main Market, City Center',
      password: '123456',
      role: 'user'
    });
  }

  saveUserDatabase();
}

function saveUserDatabase() {
  const jsonStr = JSON.stringify(usersDb);
  localStorage.setItem('skf_users_db', jsonStr);
  sessionStorage.setItem('skf_users_db', jsonStr);
}

// Load Data with LocalStorage Persistence for Admin Edits & Sync
function loadData() {
  const savedProductsStr = localStorage.getItem('skf_products');
  if (savedProductsStr) {
    try {
      products = JSON.parse(savedProductsStr);
    } catch (e) {
      products = JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
      saveProducts();
    }
  } else {
    products = JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
    saveProducts();
  }

  const savedCart = localStorage.getItem('skf_cart');
  if (savedCart) {
    try { cart = JSON.parse(savedCart); } catch (e) { cart = []; }
  }

  const savedOrders = localStorage.getItem('skf_orders');
  if (savedOrders) {
    try { orders = JSON.parse(savedOrders); } catch (e) { orders = []; }
  }

  const savedAuth = localStorage.getItem('skf_auth');
  if (savedAuth) {
    try { currentUser = JSON.parse(savedAuth); } catch (e) { currentUser = null; }
  }

  // Restore Active View across Page Refreshes for Store Manager / Admin
  const savedView = localStorage.getItem('skf_active_view');
  if (savedView) {
    activeView = savedView;
  } else if (currentUser && currentUser.role === 'admin') {
    activeView = 'admin';
  }
}

function saveProducts() {
  localStorage.setItem('skf_products', JSON.stringify(products));
}

function saveCart() {
  localStorage.setItem('skf_cart', JSON.stringify(cart));
  updateCartBadge();
  renderHeroCardCartButton();
}

function saveOrders() {
  localStorage.setItem('skf_orders', JSON.stringify(orders));
}

function saveAuth() {
  if (currentUser) {
    localStorage.setItem('skf_auth', JSON.stringify(currentUser));
  } else {
    localStorage.removeItem('skf_auth');
  }
}

// Synchronized Hero Banner Card Cart Button & Counter
function renderHeroCardCartButton() {
  const container = document.getElementById('hero-cart-btn-container');
  if (!container) return;

  const khamanProduct = products.find(p => p.id === 'p16');
  if (!khamanProduct) return;

  const cartItem = cart.find(ci => ci.id === 'p16');
  const inCartQty = cartItem ? cartItem.qty : 0;
  const maxStock = khamanProduct.stock;

  if (inCartQty > 0) {
    container.innerHTML = `
      <div class="flex items-center justify-between bg-slate-900 rounded-xl p-2 border border-amber-500/80 shadow-lg">
        <span class="text-xs font-black text-amber-400 pl-1 flex items-center gap-1.5">
          <i class="fa-solid fa-cart-shopping text-amber-400"></i> In Cart:
        </span>
        <div class="flex items-center gap-2">
          <button onclick="updateQuantity('p16', -1)" class="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-black text-white flex items-center justify-center shadow-md active:scale-95 transition-all">-</button>
          <span class="px-2 text-sm font-black text-amber-400 font-mono">${inCartQty}</span>
          <button onclick="handleAddToCart('p16')" ${inCartQty >= maxStock ? 'disabled class="w-8 h-8 bg-slate-800 text-slate-500 rounded-lg text-sm font-black flex items-center justify-center opacity-50 cursor-not-allowed"' : 'class="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-black text-white flex items-center justify-center shadow-md active:scale-95 transition-all"'}>+</button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button onclick="handleAddToCart('p16')" class="w-full btn-vibrant text-white text-xs font-black py-2.5 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg">
        <i class="fa-solid fa-cart-plus text-white text-sm"></i> Add to Cart
      </button>
    `;
  }
}

// Master Render Function
function renderApp() {
  const heroImg = document.getElementById('hero-img-preview');
  if (heroImg) {
    heroImg.src = getImg('khaman', 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80');
  }

  updateUserUIHeader();
  renderCategoryPills();
  renderProducts();
  updateCartBadge();

  // Ensure current active view (e.g. 'admin' or 'shop') is restored
  switchView(activeView);
}

// Header UI update
function updateUserUIHeader() {
  const roleBadge = document.getElementById('role-indicator');
  const authBtn = document.getElementById('auth-btn');
  const adminTabNav = document.getElementById('admin-nav-item');

  if (currentUser) {
    if (currentUser.role === 'admin') {
      roleBadge.innerHTML = `<button onclick="switchView('admin')" title="Click to Return to Admin Portal" class="px-2 py-0.5 sm:px-3 sm:py-1 bg-purple-600/40 hover:bg-purple-600/70 text-purple-100 border border-purple-400/60 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-md whitespace-nowrap transition-all active:scale-95 cursor-pointer">
        <i class="fa-solid fa-user-shield text-[10px] sm:text-xs text-purple-300"></i> <span class="hidden md:inline">${currentUser.name}</span> (Admin Portal) ↩
      </button>`;
      adminTabNav?.classList.remove('hidden');
    } else {
      roleBadge.innerHTML = `<span class="px-2 py-0.5 sm:px-3 sm:py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-md whitespace-nowrap">
        <i class="fa-solid fa-user text-[10px] sm:text-xs text-amber-400"></i> ${currentUser.name.split(' ')[0]}
      </span>`;
      adminTabNav?.classList.add('hidden');
    }

    authBtn.innerHTML = `<i class="fa-solid fa-right-from-bracket text-white"></i> <span class="hidden sm:inline">Logout (${currentUser.name.split(' ')[0]})</span><span class="sm:hidden">Logout</span>`;
    authBtn.onclick = logoutUser;
  } else {
    roleBadge.innerHTML = '';
    adminTabNav?.classList.add('hidden');
    authBtn.innerHTML = `<i class="fa-solid fa-user text-white"></i> Login`;
    authBtn.onclick = () => openAuthModal();
  }
}

// Setup Listeners
function setupEventListeners() {
  document.getElementById('search-input')?.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim().toLowerCase();
    renderProducts();
  });

  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  document.getElementById('nav-shop')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('shop');
  });

  document.getElementById('nav-orders')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('orders');
  });

  document.getElementById('nav-admin')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentUser || currentUser.role !== 'admin') {
      showToast('Store Manager login required.', 'warning');
      openAuthModal('admin');
      return;
    }
    switchView('admin');
  });
}

// View Switcher
function switchView(viewName) {
  activeView = viewName;
  localStorage.setItem('skf_active_view', viewName);
  
  // Clean initial head script class
  document.documentElement.classList.remove('init-admin-view');

  const shopSec = document.getElementById('shop-section');
  const adminSec = document.getElementById('admin-section');
  const ordersSec = document.getElementById('orders-section');
  const heroSec = document.getElementById('hero-banner');
  const adminBanner = document.getElementById('admin-mode-banner');

  shopSec?.classList.add('hidden');
  adminSec?.classList.add('hidden');
  ordersSec?.classList.add('hidden');

  const isAdminUser = currentUser && currentUser.role === 'admin';

  if (viewName === 'shop') {
    shopSec?.classList.remove('hidden');
    heroSec?.classList.remove('hidden');
    renderProducts();

    if (isAdminUser) {
      adminBanner?.classList.remove('hidden');
    } else {
      adminBanner?.classList.add('hidden');
    }
  } else if (viewName === 'admin') {
    adminSec?.classList.remove('hidden');
    heroSec?.classList.add('hidden');
    adminBanner?.classList.add('hidden');
    renderAdminDashboard();
  } else if (viewName === 'orders') {
    ordersSec?.classList.remove('hidden');
    heroSec?.classList.add('hidden');

    if (isAdminUser) {
      adminBanner?.classList.remove('hidden');
    } else {
      adminBanner?.classList.add('hidden');
    }
    renderOrdersView();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Category Pills
function renderCategoryPills() {
  const container = document.getElementById('category-pills');
  if (!container) return;

  const categories = [
    { id: 'all', label: '🏪 All Items', icon: 'fa-store' },
    { id: 'farsan', label: '🥨 Khaman & Farsan', icon: 'fa-pepper-hot' },
    { id: 'sweets', label: '🍯 Sweets', icon: 'fa-cookie-bite' },
    { id: 'mamra', label: '🍚 Tikha Sev Mamra', icon: 'fa-bowl-rice' },
    { id: 'colddrinks', label: '🥤 Cold Drinks', icon: 'fa-bottle-water' },
    { id: 'wafers', label: '🥔 Wafers & Chips', icon: 'fa-bag-shopping' },
    { id: 'biscuits', label: '🍪 Biscuits & Cookies', icon: 'fa-cookie' },
    { id: 'chocolates', label: '🍫 Chocolates', icon: 'fa-cubes' },
    { id: 'sports', label: '🏏 Sports & Games', icon: 'fa-baseball-bat-ball' }
  ];

  container.innerHTML = categories.map(cat => `
    <button onclick="selectCategory('${cat.id}')" 
      class="category-pill ${activeCategory === cat.id ? 'active' : ''} px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-900/90 text-white text-xs font-bold hover:border-amber-500/50 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
      <i class="fa-solid ${cat.icon} text-amber-400"></i> ${cat.label}
    </button>
  `).join('');
}

function selectCategory(catId) {
  activeCategory = catId;
  renderCategoryPills();
  renderProducts();
}

// Render Products Grid (Customer Side)
function renderProducts() {
  const container = document.getElementById('product-grid');
  if (!container) return;

  let filtered = products.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(currentSearch) || 
                          p.description.toLowerCase().includes(currentSearch) ||
                          p.category.toLowerCase().includes(currentSearch);
    return matchesCat && matchesSearch;
  });

  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === 'stock') {
    filtered.sort((a, b) => b.stock - a.stock);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 glass-card p-8">
        <div class="w-16 h-16 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center text-amber-400 text-2xl mb-4 border border-amber-500/30">
          <i class="fa-solid fa-magnifying-glass text-amber-400"></i>
        </div>
        <h3 class="text-lg font-bold text-white">No Items Found</h3>
        <p class="text-slate-300 mt-1 text-xs">Try selecting another category or resetting search filter.</p>
        <button onclick="selectCategory('all'); document.getElementById('search-input').value='';" class="mt-4 px-4 py-2 btn-vibrant text-white font-bold rounded-xl text-xs">View All Inventory</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    let isOutOfStock = p.stock <= 0;
    let isLowStock = p.stock > 0 && p.stock <= 8;

    const maxCapacity = p.maxStockCapacity || 50;
    const stockPercent = Math.min(100, Math.max(0, Math.round((p.stock / maxCapacity) * 100)));
    let meterClass = 'stock-high';
    if (isLowStock) meterClass = 'stock-low';
    if (isOutOfStock) meterClass = 'stock-out';

    const cartItem = cart.find(ci => ci.id === p.id);
    const inCartQty = cartItem ? cartItem.qty : 0;

    return `
      <div class="glass-card product-card glass-card-hover p-4 group">
        <div>
          <div class="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-slate-900">
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover img-zoom" loading="lazy">
            
            <div class="absolute top-2 left-2 z-10">
              <span class="px-2.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-[10px] rounded-lg shadow-md uppercase tracking-wider">
                ${p.badge || 'In Shop'}
              </span>
            </div>

            <div class="absolute bottom-2 left-2 right-2 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 flex justify-between items-center border border-slate-800">
              <span class="text-amber-400 font-bold flex items-center gap-1"><i class="fa-solid fa-star text-amber-400"></i> ${p.rating} (${p.reviewsCount})</span>
              <span class="text-white font-medium text-[11px]">${p.unit}</span>
            </div>
          </div>

          <h3 class="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">${p.title}</h3>
          <p class="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">${p.description}</p>
          
          <!-- Real-Time Visual Stock Meter Progress Bar -->
          <div class="mt-3 bg-slate-900/90 p-2 rounded-xl border border-slate-800">
            <div class="flex justify-between items-center text-[10px] font-bold mb-1">
              <span class="text-slate-300"><i class="fa-solid fa-boxes-stacked text-amber-400"></i> Live Stock:</span>
              ${isOutOfStock ? `<span class="text-red-400 font-black">🔴 Out of Stock</span>` : 
                isLowStock ? `<span class="text-amber-300 font-black animate-pulse">⚡ Only ${p.stock} Left!</span>` : 
                `<span class="text-emerald-400 font-black">🟢 ${p.stock} Units Available</span>`}
            </div>
            <div class="stock-meter-bg">
              <div class="stock-meter-fill ${meterClass}" style="width: ${stockPercent}%;"></div>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
          <div>
            <div class="flex items-baseline gap-2">
              <span class="text-lg font-black text-amber-400 text-glow-gold">₹${p.price}</span>
              ${p.mrp > p.price ? `<span class="text-xs text-slate-400 line-through">₹${p.mrp}</span>` : ''}
            </div>
            ${p.mrp > p.price ? `<span class="text-[10px] font-bold text-emerald-400">Save ₹${p.mrp - p.price}</span>` : ''}
          </div>

          ${isOutOfStock ? `
            <button disabled class="px-3.5 py-2 bg-slate-800 text-slate-400 text-xs font-bold rounded-xl border border-slate-700 cursor-not-allowed flex items-center gap-1">
              <i class="fa-solid fa-ban text-slate-400"></i> Out of Stock
            </button>
          ` : `
            <div class="flex items-center gap-1.5">
              ${inCartQty > 0 ? `
                <div class="flex items-center bg-slate-900 rounded-xl p-1 border border-amber-500/70">
                  <button onclick="updateQuantity('${p.id}', -1)" class="w-6 h-6 bg-slate-800 hover:bg-slate-700 rounded text-xs font-black text-white flex items-center justify-center">-</button>
                  <span class="px-2 text-xs font-black text-amber-400">${inCartQty}</span>
                  <button onclick="handleAddToCart('${p.id}')" class="w-6 h-6 bg-slate-800 hover:bg-slate-700 rounded text-xs font-black text-white flex items-center justify-center">+</button>
                </div>
              ` : `
                <button onclick="handleAddToCart('${p.id}')" 
                  class="btn-vibrant text-white text-xs font-black px-4 py-2.5 rounded-xl flex items-center gap-2 active:scale-95 transition-all">
                  <i class="fa-solid fa-cart-plus text-white text-sm"></i> Add to Cart
                </button>
              `}
            </div>
          `}
        </div>
      </div>
    `;
  }).join('');
}

// Add To Cart
function handleAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    showToast(`Sorry! "${product.title}" is out of stock in store.`, 'error');
    return;
  }

  const existingInCart = cart.find(item => item.id === productId);
  const currentCartQty = existingInCart ? existingInCart.qty : 0;

  if (currentCartQty + 1 > product.stock) {
    showToast(`Store stock limit reached! Only ${product.stock} available.`, 'warning');
    return;
  }

  if (existingInCart) {
    existingInCart.qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      unit: product.unit,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  renderProducts();
  showToast(`Added "${product.title}" to cart! 🛒`, 'success');
}

// Cart Badge
function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  const drawerCount = document.getElementById('cart-drawer-count');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (badge) {
    badge.innerText = totalItems;
    badge.classList.toggle('hidden', totalItems === 0);
  }
  if (drawerCount) drawerCount.innerText = totalItems;
}

// Drawer Controls
function toggleCartDrawer(open = true) {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    renderCartDrawerItems();
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  }
}

// Render Cart Drawer
function renderCartDrawerItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-grand-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 px-4">
        <div class="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-slate-300 text-2xl mb-3">
          <i class="fa-solid fa-basket-shopping text-slate-300"></i>
        </div>
        <p class="text-white font-bold text-sm">Your Cart is Empty</p>
        <p class="text-xs text-slate-300 mt-1">Select items from our store inventory to add to cart.</p>
        <button onclick="toggleCartDrawer(false)" class="mt-4 px-4 py-2 btn-vibrant text-white font-bold rounded-xl text-xs">Browse Shop Items</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = '₹0';
    if (totalEl) totalEl.innerText = '₹0';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (subtotalEl) subtotalEl.innerText = `₹${grandTotal}`;
  if (totalEl) totalEl.innerText = `₹${grandTotal}`;
  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    const maxStock = product ? product.stock : 99;

    return `
      <div class="flex items-center gap-3 p-3 glass-card border border-slate-800 rounded-xl">
        <img src="${item.image}" alt="${item.title}" class="w-14 h-14 object-cover rounded-lg bg-slate-900">
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-white truncate">${item.title}</h4>
          <p class="text-[11px] text-amber-400 font-extrabold mt-0.5">₹${item.price} <span class="text-slate-300 font-normal">/ ${item.unit}</span></p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="updateQuantity('${item.id}', -1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center">-</button>
            <span class="text-xs font-black text-white w-5 text-center">${item.qty}</span>
            <button onclick="updateQuantity('${item.id}', 1)" ${item.qty >= maxStock ? 'disabled class="w-6 h-6 rounded bg-slate-800 text-slate-500 text-xs font-bold flex items-center justify-center opacity-50 cursor-not-allowed"' : 'class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center"'}>+</button>
            <span class="text-[10px] text-slate-400 ml-1">(Stock: ${maxStock})</span>
          </div>
        </div>
        <div class="text-right">
          <p class="text-xs font-black text-white">₹${item.price * item.qty}</p>
          <button onclick="removeFromCart('${item.id}')" class="text-red-400 hover:text-red-300 text-xs mt-2 transition-colors">
            <i class="fa-solid fa-trash-can text-red-400"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Quantity Adjuster
function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  const product = products.find(p => p.id === productId);
  const maxStock = product ? product.stock : 99;

  if (delta > 0 && item.qty + delta > maxStock) {
    showToast(`Cannot exceed shop stock (${maxStock})`, 'warning');
    return;
  }

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  renderProducts();
  renderCartDrawerItems();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderProducts();
  renderCartDrawerItems();
  showToast('Item removed from cart.', 'info');
}

// 1-Click Express Combo Handler
function addComboToCart(productIds) {
  let addedCount = 0;
  for (let id of productIds) {
    const p = products.find(prod => prod.id === id);
    if (p && p.stock > 0) {
      const existing = cart.find(item => item.id === id);
      if (existing) {
        if (existing.qty < p.stock) {
          existing.qty += 1;
          addedCount++;
        }
      } else {
        cart.push({
          id: p.id,
          title: p.title,
          price: p.price,
          unit: p.unit,
          qty: 1,
          category: p.category,
          image: p.image
        });
        addedCount++;
      }
    }
  }

  saveCart();
  renderProducts();
  renderCartDrawerItems();

  if (addedCount > 0) {
    showToast('⚡ Express combo pack added to your cart!', 'success');
  } else {
    showToast('Items in this combo are currently out of stock!', 'warning');
  }
}

// Checkout Modal
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'warning');
    return;
  }

  // Require Login or Registration before proceeding to Cash Bill
  if (!currentUser) {
    toggleCartDrawer(false);
    pendingCheckoutAction = true;
    showToast('🔑 Please Sign In or Register an account to proceed with Cash Bill!', 'warning');
    openAuthModal('login');
    return;
  }

  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  toggleCartDrawer(false);

  // Auto populate customer details if logged in
  if (currentUser) {
    const custNameInput = document.getElementById('cust-name');
    const custPhoneInput = document.getElementById('cust-phone');
    const custAddressInput = document.getElementById('cust-address');

    if (custNameInput) custNameInput.value = currentUser.name || '';
    if (custPhoneInput) custPhoneInput.value = currentUser.phone || '';
    if (custAddressInput) custAddressInput.value = currentUser.address || '';
  }

  modal.classList.remove('hidden');

  const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('checkout-summary-total').innerText = `₹${grandTotal}`;
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal')?.classList.add('hidden');
}

// Process Order
function handlePlaceOrder(event) {
  event.preventDefault();

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const paymentMethod = document.getElementById('cust-payment').value;

  if (!name || !phone || !address) {
    showToast('Please fill out all required details.', 'error');
    return;
  }

  for (let cartItem of cart) {
    const p = products.find(prod => prod.id === cartItem.id);
    if (!p || p.stock < cartItem.qty) {
      showToast(`Stock updated! Only ${p ? p.stock : 0} left for "${cartItem.title}". Adjusting cart.`, 'error');
      renderProducts();
      renderCartDrawerItems();
      closeCheckoutModal();
      toggleCartDrawer(true);
      return;
    }
  }

  const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  cart.forEach(cartItem => {
    const p = products.find(prod => prod.id === cartItem.id);
    if (p) {
      p.stock -= cartItem.qty;
    }
  });
  saveProducts();

  const invoiceId = 'BILL-SKF-' + Math.floor(100000 + Math.random() * 900000);
  const newOrder = {
    id: invoiceId,
    date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    customer: { name, phone, address },
    items: [...cart],
    subtotal: grandTotal,
    grandTotal,
    paymentMethod: paymentMethod.toUpperCase(),
    status: 'Billed & Confirmed'
  };

  orders.unshift(newOrder);
  saveOrders();

  cart = [];
  saveCart();
  renderProducts();

  closeCheckoutModal();

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  }

  openReceiptModal(newOrder);
}

// Receipt Modal
function openReceiptModal(order) {
  const modal = document.getElementById('receipt-modal');
  const detailsContainer = document.getElementById('receipt-details-content');
  if (!modal || !detailsContainer) return;

  detailsContainer.innerHTML = `
    <div class="bg-slate-900 p-5 rounded-xl border border-slate-800 text-left text-xs text-slate-200">
      <div class="flex justify-between items-start pb-4 border-b border-slate-800 gap-3">
        <div>
          <h3 class="text-sm md:text-base font-black text-amber-400">SHREEJI KRUPA FARSAN & GENERAL STORE</h3>
          <p class="text-[11px] text-slate-300 mt-0.5">Phone: +91 98765 43210 | Main Market</p>
        </div>
        <div class="text-right flex flex-col items-end shrink-0">
          <span class="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-xl font-bold text-[10px] uppercase tracking-wider shadow-sm whitespace-nowrap">
            <i class="fa-solid fa-circle-check text-emerald-400"></i> PAID (${order.paymentMethod})
          </span>
          <p class="text-slate-200 mt-1.5 font-mono font-black text-xs">${order.id}</p>
          <p class="text-[10px] text-slate-400">${order.date}</p>
        </div>
      </div>

      <div class="py-3 border-b border-slate-800">
        <p class="font-bold text-white">Billed Customer:</p>
        <p class="text-amber-300 font-semibold">${order.customer.name} (${order.customer.phone})</p>
        <p class="text-slate-300 text-[11px]">${order.customer.address}</p>
      </div>

      <div class="py-3">
        <table class="w-full text-left">
          <thead>
            <tr class="text-slate-300 border-b border-slate-800 text-[11px] font-bold">
              <th class="py-1">Item Description</th>
              <th class="py-1 text-center">Qty</th>
              <th class="py-1 text-right">Price</th>
              <th class="py-1 text-right">Total</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${order.items.map(item => `
              <tr>
                <td class="py-1.5 font-semibold text-white">${item.title}</td>
                <td class="py-1.5 text-center text-slate-300">${item.qty}</td>
                <td class="py-1.5 text-right text-slate-300">₹${item.price}</td>
                <td class="py-1.5 text-right font-bold text-amber-400">₹${item.price * item.qty}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="pt-3 border-t border-slate-800 flex justify-between items-center text-sm font-bold text-white">
        <span>Grand Total Amount:</span>
        <span class="text-amber-400 text-lg font-black">₹${order.grandTotal}</span>
      </div>
    </div>
  `;

  document.getElementById('download-pdf-btn').onclick = () => downloadPDFReceipt(order);
  modal.classList.remove('hidden');
}

function closeReceiptModal() {
  const modal = document.getElementById('receipt-modal');
  if (modal) modal.classList.add('hidden');
}

// ULTRA-VIBRANT COLORFUL PDF CASH MEMO GENERATOR (NO GST)
function downloadPDFReceipt(order) {
  if (!window.jspdf) {
    showToast('PDF Engine loading... please retry.', 'info');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');

  // 1. TOP BRANDING BANNER (Gradient Amber-Orange Fill)
  doc.setFillColor(245, 158, 11); // Vibrant Amber
  doc.rect(0, 0, 210, 30, 'F');

  // Accent Line
  doc.setFillColor(234, 88, 12); // Orange Accent Line
  doc.rect(0, 28, 210, 2, 'F');

  // Company Name - Scaled to 13.5pt for perfect alignment without touching the badge
  doc.setTextColor(15, 23, 42); // Bold Dark Navy
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13.5);
  doc.text("SHREEJI KRUPA FARSAN & GENERAL STORE", 12, 14);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text("OFFICIAL CASH MEMO & STORE RECEIPT", 12, 22);

  // Invoice Number & Date Badge (Right Side Badge - Perfectly Aligned at X=136mm)
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(136, 5, 62, 20, 2.5, 2.5, 'F');
  
  doc.setTextColor(245, 158, 11); // Gold text
  doc.setFontSize(8.5);
  doc.text(`BILL #: ${order.id}`, 140, 12);
  doc.setTextColor(255, 255, 255);
  doc.text(`DATE: ${order.date}`, 140, 19);

  // 2. METADATA SECTION
  doc.setDrawColor(245, 158, 11);
  doc.setLineWidth(0.4);
  doc.line(14, 36, 196, 36);

  // Store Info
  doc.setTextColor(30, 41, 59);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text("STORE DETAILS:", 14, 43);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text("Shreeji Krupa General Store & Farsan", 14, 49);
  doc.text("Main Bazaar Road, City Center", 14, 54);
  doc.text("Contact: +91 98765 43210", 14, 59);

  // Customer Info
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text("CUSTOMER BILLING DETAILS:", 118, 43);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`Name: ${order.customer.name}`, 118, 49);
  doc.text(`Phone: ${order.customer.phone}`, 118, 54);
  doc.text(`Address: ${order.customer.address}`, 118, 59);
  doc.text(`Payment Mode: ${order.paymentMethod}`, 118, 64);

  // 3. COLORFUL ALIGNED INVOICE TABLE
  const tableHead = [['#', 'Item Description', 'Pack / Size', 'Rate (Rs.)', 'Qty', 'Total Amount (Rs.)']];
  
  const tableBody = order.items.map((item, index) => [
    index + 1,
    item.title,
    item.unit || '1 Unit',
    item.price.toLocaleString('en-IN'),
    item.qty,
    (item.price * item.qty).toLocaleString('en-IN')
  ]);

  if (doc.autoTable) {
    doc.autoTable({
      startY: 70,
      head: tableHead,
      body: tableBody,
      theme: 'grid',
      headStyles: {
        fillColor: [245, 158, 11], // Vibrant Amber Fill
        textColor: [15, 23, 42],   // Dark Navy Bold Text
        fontStyle: 'bold',
        fontSize: 9,
        halign: 'center'
      },
      columnStyles: {
        0: { halign: 'center', cellWidth: 10 },
        1: { halign: 'left', cellWidth: 80 },
        2: { halign: 'center', cellWidth: 30 },
        3: { halign: 'right', cellWidth: 25 },
        4: { halign: 'center', cellWidth: 15 },
        5: { halign: 'right', cellWidth: 26 }
      },
      styles: {
        fontSize: 8.5,
        cellPadding: 3.5,
        textColor: [15, 23, 42],
        lineColor: [252, 211, 77], // Soft Gold Border
        lineWidth: 0.3
      },
      alternateRowStyles: {
        fillColor: [254, 243, 199] // Soft Warm Amber Tint
      }
    });

    const finalY = doc.lastAutoTable.finalY + 8;

    // 4. COLORFUL GRAND TOTAL BOX (NO GST AS REQUESTED)
    doc.setDrawColor(234, 88, 12);
    doc.setFillColor(254, 243, 199); // Soft Amber Box Fill
    doc.roundedRect(118, finalY, 78, 20, 2, 2, 'FD');

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(`Subtotal Amount:`, 122, finalY + 8);
    doc.text(`Rs. ${order.grandTotal.toLocaleString('en-IN')}`, 192, finalY + 8, { align: 'right' });

    doc.setFontSize(12);
    doc.setTextColor(220, 38, 38); // Bold Crimson
    doc.text(`Grand Total:`, 122, finalY + 15);
    doc.text(`Rs. ${order.grandTotal.toLocaleString('en-IN')}`, 192, finalY + 15, { align: 'right' });

    // 5. STAMP & THANK YOU NOTE
    doc.setDrawColor(16, 185, 129);
    doc.setFillColor(209, 250, 229);
    doc.roundedRect(14, finalY, 40, 18, 2, 2, 'FD');

    doc.setTextColor(4, 120, 87);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text("PAID IN FULL", 18, finalY + 8);
    doc.setFontSize(7.5);
    doc.text("STORE RECEIPT", 18, finalY + 13);

    doc.setTextColor(100, 116, 139);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'italic');
    doc.text("Thank you for shopping at Shreeji Krupa General Store & Farsan!", 14, finalY + 26);
  } else {
    let yPos = 75;
    tableBody.forEach(row => {
      doc.text(`${row[0]}. ${row[1]} | Qty: ${row[4]} | Total: Rs. ${row[5]}`, 14, yPos);
      yPos += 7;
    });
    doc.text(`Grand Total: Rs. ${order.grandTotal}`, 14, yPos + 10);
  }

  doc.save(`Receipt-${order.id}.pdf`);
  showToast('Colorful PDF Cash Memo downloaded! 📄', 'success');
}

// Past Bills View
function renderOrdersView() {
  const container = document.getElementById('orders-list-container');
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 glass-card p-8">
        <i class="fa-solid fa-receipt text-4xl text-slate-500 mb-3"></i>
        <h3 class="text-lg font-bold text-white">No Past Bills Found</h3>
        <p class="text-slate-300 text-xs mt-1">Your store receipts and downloadable PDF bills will appear here.</p>
        <button onclick="switchView('shop')" class="mt-4 px-4 py-2 btn-vibrant text-white font-bold text-xs rounded-xl">Start Shopping</button>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(order => `
    <div class="glass-card p-5 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-black text-amber-400 font-mono">${order.id}</span>
          <span class="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-[11px] font-bold">${order.status}</span>
        </div>
        <p class="text-xs text-slate-300 mt-1"><i class="fa-regular fa-clock"></i> ${order.date} | Customer: ${order.customer.name}</p>
        <p class="text-xs text-slate-200 font-medium mt-1">${order.items.length} Items: ${order.items.map(i => i.title).join(', ')}</p>
      </div>
      <div class="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <div class="text-right">
          <p class="text-xs text-slate-400">Bill Total</p>
          <p class="text-base font-black text-white">₹${order.grandTotal}</p>
        </div>
        <button onclick='downloadPDFReceipt(${JSON.stringify(order)})' class="btn-cyan text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5">
          <i class="fa-solid fa-file-pdf text-white"></i> Download PDF Bill
        </button>
      </div>
    </div>
  `).join('');
}

// Admin Management Dashboard (Admin Side View)
function renderAdminDashboard() {
  const analyticsContainer = document.getElementById('admin-analytics');
  const productsTableContainer = document.getElementById('admin-products-table');
  const usersTableContainer = document.getElementById('admin-users-table');
  const usersCountBadge = document.getElementById('users-count-badge');

  if (!analyticsContainer || !productsTableContainer) return;

  const totalRevenue = orders.reduce((sum, o) => sum + o.grandTotal, 0);
  const totalOrdersCount = orders.length;
  const registeredUsersCount = usersDb.filter(u => u && u.role !== 'admin').length;
  const lowStockCount = products.filter(p => p.stock <= 8).length;
  const outOfStockCount = products.filter(p => p.stock === 0).length;

  analyticsContainer.innerHTML = `
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
      <div class="glass-card p-4 border border-amber-500/30">
        <p class="text-xs text-slate-300 font-semibold">Billing Revenue</p>
        <h3 class="text-2xl font-black text-amber-400 text-glow-gold mt-1">₹${totalRevenue}</h3>
      </div>
      <div class="glass-card p-4 border border-cyan-500/30">
        <p class="text-xs text-slate-300 font-semibold">Bills Issued</p>
        <h3 class="text-2xl font-black text-cyan-400 mt-1">${totalOrdersCount}</h3>
      </div>
      <div class="glass-card p-4 border border-purple-500/30">
        <p class="text-xs text-slate-300 font-semibold">Registered Users</p>
        <h3 class="text-2xl font-black text-purple-400 mt-1">${registeredUsersCount}</h3>
      </div>
      <div class="glass-card p-4 border border-amber-500/30">
        <p class="text-xs text-slate-300 font-semibold">Low Stock Alerts</p>
        <h3 class="text-2xl font-black text-amber-400 mt-1">${lowStockCount}</h3>
      </div>
      <div class="glass-card p-4 border border-red-500/30">
        <p class="text-xs text-slate-300 font-semibold">Out of Stock</p>
        <h3 class="text-2xl font-black text-red-400 mt-1">${outOfStockCount}</h3>
      </div>
    </div>
  `;

  productsTableContainer.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs text-slate-200">
        <thead class="bg-slate-900 text-slate-300 uppercase text-[10px] tracking-wider border-b border-slate-800">
          <tr>
            <th class="p-3">Product Name</th>
            <th class="p-3">Category</th>
            <th class="p-3">Price / Unit</th>
            <th class="p-3">Live Stock Qty</th>
            <th class="p-3">Status</th>
            <th class="p-3 text-right">Quick Stock Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800">
          ${products.map(p => `
            <tr class="hover:bg-slate-800/60 transition-colors">
              <td class="p-3 flex items-center gap-3">
                <img src="${p.image}" class="w-10 h-10 object-cover rounded-lg bg-slate-900 border border-slate-700">
                <div>
                  <p class="font-bold text-white line-clamp-1">${p.title}</p>
                  <p class="text-[10px] text-slate-400">${p.id}</p>
                </div>
              </td>
              <td class="p-3"><span class="px-2 py-0.5 bg-slate-800 text-slate-200 rounded-md capitalize font-semibold">${p.category}</span></td>
              <td class="p-3 font-bold text-amber-400">₹${p.price} <span class="text-slate-400 text-[10px]">/ ${p.unit}</span></td>
              <td class="p-3 font-mono font-bold text-white">${p.stock}</td>
              <td class="p-3">
                ${p.stock === 0 ? '<span class="text-red-400 font-bold">🔴 Out of Stock</span>' : 
                  p.stock <= 8 ? '<span class="text-amber-300 font-bold">🟡 Low Stock</span>' : 
                  '<span class="text-emerald-400 font-bold">🟢 Available</span>'}
              </td>
              <td class="p-3 text-right">
                <div class="flex items-center justify-end gap-1.5">
                  <button onclick="openEditProductModal('${p.id}')" class="px-2.5 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded text-[11px] font-bold border border-cyan-500/40 flex items-center gap-1 transition-all">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Details
                  </button>
                  <button onclick="quickUpdateStock('${p.id}')" class="px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded text-[11px] font-bold border border-amber-500/40 flex items-center gap-1 transition-all">
                    <i class="fa-solid fa-boxes-stacked"></i> Stock
                  </button>
                  <button onclick="deleteProduct('${p.id}')" class="px-2 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded text-[11px] font-bold transition-all">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Render Registered Users Directory Table
  if (usersTableContainer) {
    const customerUsers = usersDb.filter(u => u && u.role !== 'admin');
    if (usersCountBadge) usersCountBadge.innerText = `${customerUsers.length} Registered Customers`;

    if (customerUsers.length === 0) {
      usersTableContainer.innerHTML = `
        <div class="text-center py-8 text-slate-400 text-xs">
          No registered customer accounts found yet.
        </div>
      `;
    } else {
      usersTableContainer.innerHTML = `
        <table class="w-full text-left text-xs text-slate-200">
          <thead class="bg-slate-900 text-slate-300 uppercase text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              <th class="p-3">Customer Name</th>
              <th class="p-3">Contact Email & Phone</th>
              <th class="p-3">Saved Address</th>
              <th class="p-3">Orders Placed</th>
              <th class="p-3">Total Spent</th>
              <th class="p-3 text-right">User Activity & History</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${customerUsers.map(u => {
              const uEmail = (u.email || '').toLowerCase();
              const uPhone = (u.phone || '').trim();
              const uName = (u.name || 'Customer').trim();

              const userOrders = orders.filter(o => {
                const oPhone = (o.phone || '').trim();
                const oName = (o.customer?.name || o.name || '').trim().toLowerCase();
                return oPhone === uPhone || oName === uName.toLowerCase();
              });

              const userSpent = userOrders.reduce((sum, o) => sum + o.grandTotal, 0);

              return `
                <tr class="hover:bg-slate-800/60 transition-colors">
                  <td class="p-3 font-bold text-white">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-black text-xs flex items-center justify-center shrink-0">
                        ${uName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p class="leading-snug text-white">${uName}</p>
                        <span class="text-[10px] text-emerald-400 font-semibold">Registered User</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3">
                    <p class="font-semibold text-white">${uEmail}</p>
                    <p class="text-[10px] text-slate-400 font-mono">${uPhone}</p>
                  </td>
                  <td class="p-3 text-slate-300 max-w-xs truncate">${u.address || 'Main Market, City'}</td>
                  <td class="p-3 font-bold text-white font-mono">${userOrders.length} Bills</td>
                  <td class="p-3 font-black text-amber-400">₹${userSpent}</td>
                  <td class="p-3 text-right">
                    <button onclick="viewCustomerOrderHistory('${uPhone}', '${uName.replace(/'/g, "\\'")}')" class="px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 rounded-xl font-bold text-[11px] active:scale-95 transition-all">
                      🔍 View Purchased Items (${userOrders.length})
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
    }
  }
}

// View Customer Specific Order History Modal Handler
function viewCustomerOrderHistory(userPhone, userName) {
  const modal = document.getElementById('customer-orders-modal');
  const titleEl = document.getElementById('cust-orders-title');
  const subtitleEl = document.getElementById('cust-orders-subtitle');
  const contentEl = document.getElementById('cust-orders-content');

  if (!modal || !contentEl) return;

  const userOrders = orders.filter(o => {
    const oPhone = (o.phone || '').trim();
    const oName = (o.customer?.name || o.name || '').trim().toLowerCase();
    return oPhone === userPhone || oName === userName.toLowerCase();
  });

  titleEl.innerText = `Purchase History: ${userName}`;
  subtitleEl.innerText = `Phone: ${userPhone} • Total ${userOrders.length} Orders Placed`;

  if (userOrders.length === 0) {
    contentEl.innerHTML = `
      <div class="text-center py-8 bg-slate-900/60 rounded-xl border border-slate-800">
        <i class="fa-solid fa-receipt text-slate-600 text-3xl mb-2"></i>
        <p class="text-xs font-bold text-slate-300">No orders placed by this customer yet.</p>
      </div>
    `;
  } else {
    contentEl.innerHTML = userOrders.map(o => `
      <div class="glass-card p-4 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
          <div>
            <span class="font-mono font-bold text-amber-400">Bill #${o.id}</span>
            <p class="text-[10px] text-slate-400 mt-0.5">${o.date}</p>
          </div>
          <div class="text-right">
            <span class="text-sm font-black text-amber-400">₹${o.grandTotal}</span>
            <p class="text-[10px] text-emerald-400 font-bold">${o.paymentMethod || 'UPI / Cash'}</p>
          </div>
        </div>

        <div class="space-y-1.5 text-xs">
          ${o.items.map(item => `
            <div class="flex justify-between items-center text-slate-300">
              <span>${item.title} <strong class="text-white">x${item.qty}</strong></span>
              <span class="font-semibold text-white">₹${item.price * item.qty}</span>
            </div>
          `).join('')}
        </div>

        <div class="pt-2 flex justify-end">
          <button onclick='downloadPDFReceipt(${JSON.stringify(o)})' class="px-3 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/40 rounded-lg font-bold text-[10px] flex items-center gap-1 active:scale-95 transition-all">
            <i class="fa-solid fa-file-pdf"></i> Download PDF Receipt
          </button>
        </div>
      </div>
    `).join('');
  }

  modal.classList.remove('hidden');
}

function closeCustomerOrdersModal() {
  document.getElementById('customer-orders-modal')?.classList.add('hidden');
}

// Edit Product Handlers (Store Manager)
function openEditProductModal(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  document.getElementById('edit-prod-id').value = p.id;
  document.getElementById('edit-prod-title').value = p.title;
  document.getElementById('edit-prod-category').value = p.category;
  document.getElementById('edit-prod-unit').value = p.unit || '1 Unit';
  document.getElementById('edit-prod-price').value = p.price;
  document.getElementById('edit-prod-mrp').value = p.mrp || p.price;
  document.getElementById('edit-prod-stock').value = p.stock;
  document.getElementById('edit-prod-badge').value = p.badge || '';
  document.getElementById('edit-prod-image').value = p.image;
  document.getElementById('edit-prod-desc').value = p.description || '';

  document.getElementById('edit-product-modal')?.classList.remove('hidden');
}

function closeEditProductModal() {
  document.getElementById('edit-product-modal')?.classList.add('hidden');
}

function handleSaveEditedProduct(event) {
  event.preventDefault();

  const id = document.getElementById('edit-prod-id').value;
  const p = products.find(prod => prod.id === id);
  if (!p) return;

  p.title = document.getElementById('edit-prod-title').value.trim();
  p.category = document.getElementById('edit-prod-category').value;
  p.unit = document.getElementById('edit-prod-unit').value.trim();
  p.price = parseFloat(document.getElementById('edit-prod-price').value);
  p.mrp = parseFloat(document.getElementById('edit-prod-mrp').value) || p.price;
  p.stock = parseInt(document.getElementById('edit-prod-stock').value, 10);
  p.badge = document.getElementById('edit-prod-badge').value.trim() || 'In Shop';
  p.image = document.getElementById('edit-prod-image').value.trim();
  p.description = document.getElementById('edit-prod-desc').value.trim();

  saveProducts();
  renderProducts();
  renderHeroCardCartButton();
  renderAdminDashboard();

  closeEditProductModal();
  showToast(`Product "${p.title}" details updated & synced live to all users! ✏️✨`, 'success');
}

// Add New Product
function openAddProductModal() {
  document.getElementById('add-product-modal')?.classList.remove('hidden');
}

function closeAddProductModal() {
  document.getElementById('add-product-modal')?.classList.add('hidden');
}

function handleCreateProduct(event) {
  event.preventDefault();

  const title = document.getElementById('prod-title').value.trim();
  const category = document.getElementById('prod-category').value;
  const price = parseFloat(document.getElementById('prod-price').value);
  const mrp = parseFloat(document.getElementById('prod-mrp').value) || price;
  const stock = parseInt(document.getElementById('prod-stock').value, 10);
  const unit = document.getElementById('prod-unit').value.trim();
  const image = document.getElementById('prod-image').value.trim() || getImg('khaman', '');
  const description = document.getElementById('prod-desc').value.trim();

  if (!title || isNaN(price) || isNaN(stock)) {
    showToast('Please fill out all required fields.', 'error');
    return;
  }

  const newProd = {
    id: 'p' + (Date.now() % 100000),
    title,
    category,
    price,
    mrp,
    stock,
    maxStockCapacity: Math.max(stock, 50),
    unit: unit || '1 Unit',
    rating: 5.0,
    reviewsCount: 1,
    badge: 'New Arrival',
    image,
    description: description || 'Freshly arrived item in shop.'
  };

  products.unshift(newProd);
  saveProducts();
  renderProducts();
  renderAdminDashboard();
  closeAddProductModal();
  showToast(`Successfully added "${title}" to shop inventory!`, 'success');
}

// Quick Stock Modifier
function quickUpdateStock(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const newStockStr = prompt(`Update live shop stock quantity for "${p.title}" (Current stock: ${p.stock}):`, p.stock);
  if (newStockStr !== null) {
    const newStock = parseInt(newStockStr, 10);
    if (!isNaN(newStock) && newStock >= 0) {
      p.stock = newStock;
      saveProducts();
      renderProducts();
      renderAdminDashboard();
      showToast(`Stock updated to ${newStock} units for "${p.title}".`, 'success');
    }
  }
}

// Delete Product
function deleteProduct(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  if (confirm(`Remove "${p.title}" from store inventory?`)) {
    products = products.filter(prod => prod.id !== productId);
    saveProducts();
    renderProducts();
    renderAdminDashboard();
    showToast('Product removed from store inventory.', 'info');
  }
}

// AUTHENTICATION & ACCOUNT DATABASE CONTROLS

function openAuthModal(defaultTab = 'login') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  switchAuthTab(defaultTab);
}

function closeAuthModal() {
  document.getElementById('auth-modal')?.classList.add('hidden');
}

function switchAuthTab(tabName) {
  const loginForm = document.getElementById('form-customer-login');
  const registerForm = document.getElementById('form-customer-register');
  const adminForm = document.getElementById('form-admin-login');

  const tabLoginBtn = document.getElementById('tab-btn-login');
  const tabRegisterBtn = document.getElementById('tab-btn-register');
  const tabAdminBtn = document.getElementById('tab-btn-admin');

  loginForm?.classList.add('hidden');
  registerForm?.classList.add('hidden');
  adminForm?.classList.add('hidden');

  tabLoginBtn?.classList.remove('text-amber-400', 'border-amber-400');
  tabLoginBtn?.classList.add('border-transparent');
  tabRegisterBtn?.classList.remove('text-amber-400', 'border-amber-400');
  tabRegisterBtn?.classList.add('border-transparent');
  tabAdminBtn?.classList.remove('text-purple-400', 'border-purple-400');
  tabAdminBtn?.classList.add('border-transparent');

  if (tabName === 'login') {
    loginForm?.classList.remove('hidden');
    tabLoginBtn?.classList.add('text-amber-400', 'border-amber-400');
  } else if (tabName === 'register') {
    registerForm?.classList.remove('hidden');
    tabRegisterBtn?.classList.add('text-amber-400', 'border-amber-400');
  } else if (tabName === 'admin') {
    adminForm?.classList.remove('hidden');
    tabAdminBtn?.classList.add('text-purple-400', 'border-purple-400');
  }
}

// Customer Login Handler
function handleCustomerLogin(event) {
  event.preventDefault();
  const identifier = document.getElementById('login-identifier').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value.trim();

  const foundUser = usersDb.find(u => {
    if (!u) return false;
    const userEmail = (u.email || '').trim().toLowerCase();
    const userPhone = (u.phone || '').trim().toLowerCase();
    const userPass = String(u.password || '').trim();
    return (userEmail === identifier || userPhone === identifier) && userPass === password;
  });

  if (foundUser) {
    currentUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      phone: foundUser.phone,
      address: foundUser.address || 'Main Market, City',
      role: foundUser.role || 'user'
    };

    saveAuth();
    updateUserUIHeader();
    closeAuthModal();

    if (currentUser.role === 'admin') {
      switchView('admin');
      showToast(`Welcome back Store Keeper! 🔑`, 'success');
    } else {
      switchView('shop');
      if (pendingCheckoutAction) {
        pendingCheckoutAction = false;
        showToast(`Signed in as ${currentUser.name}! Proceeding to Cash Bill... 🛒`, 'success');
        setTimeout(() => {
          openCheckoutModal();
        }, 300);
      } else {
        showToast(`Welcome back, ${currentUser.name}! 🛒`, 'success');
      }
    }
  } else {
    showToast('Invalid Email/Phone or Password! Click "Register Now" if you need to create/reset your account.', 'error');
  }
}

// Customer Register Handler
function handleCustomerRegister(event) {
  event.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const phone = document.getElementById('reg-phone').value.trim();
  const address = document.getElementById('reg-address').value.trim();
  const pass = document.getElementById('reg-pass').value.trim();
  const confirmPass = document.getElementById('reg-confirm-pass').value.trim();

  if (pass !== confirmPass) {
    showToast('Passwords do not match! Please verify.', 'error');
    return;
  }

  const existingIndex = usersDb.findIndex(u => u && ((u.email || '').toLowerCase() === email || (u.phone || '').trim() === phone));
  if (existingIndex !== -1) {
    // Update existing user account password and details seamlessly
    usersDb[existingIndex].name = name || usersDb[existingIndex].name;
    usersDb[existingIndex].address = address || usersDb[existingIndex].address;
    usersDb[existingIndex].password = pass;
    saveUserDatabase();

    switchAuthTab('login');
    const loginIdInput = document.getElementById('login-identifier');
    const loginPassInput = document.getElementById('login-password');
    if (loginIdInput) loginIdInput.value = email || phone;
    if (loginPassInput) loginPassInput.value = '';

    showToast(`Account password updated for ${name}! Please sign in now with your password. 🔐`, 'success');
    return;
  }

  const newUser = {
    id: 'usr_' + Date.now(),
    name,
    email,
    phone,
    address,
    password: pass,
    role: 'user'
  };

  usersDb.push(newUser);
  saveUserDatabase();

  // Switch to Login tab and pre-fill identifier so user logs in manually as requested
  switchAuthTab('login');

  const loginIdInput = document.getElementById('login-identifier');
  const loginPassInput = document.getElementById('login-password');
  if (loginIdInput) loginIdInput.value = email || phone;
  if (loginPassInput) loginPassInput.value = '';

  showToast(`Account registered successfully for ${name}! Please enter your password to Sign In. 🔐`, 'success');
}

// Admin Login Handler (Pass: admin123)
function handleAdminLogin(event) {
  event.preventDefault();
  const identifier = document.getElementById('admin-identifier').value.trim().toLowerCase();
  const password = document.getElementById('admin-password').value;

  if ((identifier === 'admin@shreejikrupa.com' || identifier === 'admin') && password === 'admin123') {
    currentUser = {
      id: 'usr_admin',
      name: 'Store Manager',
      email: 'admin@shreejikrupa.com',
      phone: '9876543210',
      address: 'Store Main Office',
      role: 'admin'
    };

    saveAuth();
    updateUserUIHeader();
    closeAuthModal();
    switchView('admin');
    showToast('Logged in as Store Manager (Admin Access Granted)! 🔐', 'success');
  } else {
    showToast('Invalid Admin ID or Password! Default: admin@shreejikrupa.com / admin123', 'error');
  }
}

function logoutUser() {
  currentUser = null;
  saveAuth();
  localStorage.removeItem('skf_active_view');
  updateUserUIHeader();
  switchView('shop');
  showToast('Logged out successfully.', 'info');
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  let bgColors = 'bg-slate-800 text-slate-100 border-slate-700';

  if (type === 'success') bgColors = 'bg-emerald-950/95 text-emerald-200 border-emerald-500/50 shadow-emerald-500/20';
  if (type === 'error') bgColors = 'bg-red-950/95 text-red-200 border-red-500/50 shadow-red-500/20';
  if (type === 'warning') bgColors = 'bg-amber-950/95 text-amber-200 border-amber-500/50 shadow-amber-500/20';

  toast.className = `toast-slide-in p-3.5 px-5 rounded-xl border backdrop-blur-md text-xs font-bold shadow-xl flex items-center gap-3 ${bgColors}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white ml-auto text-sm">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
