/* ============================================
   ROMEO'S KICKS — Interactive Script
   ============================================ */

// ---------- PRODUCT DATA ----------
const PRODUCTS = {
  shoes: [
    {
      id: 's1',
      name: 'Air Jordan 1 High Black Toe',
      brand: 'Jordan',
      category: 'jordan',
      price: 70000,
      oldPrice: 120000,
      desc: 'Classic black, white and red high-top with perforated toe, Nike Air branding and that iconic Chicago-inspired color blocking.',
      badge: 'Bestseller',
      image: 'https://i.pinimg.com/736x/20/42/67/204267e6bb9aeed3bb06adcb2d6caeaa.jpg'
    },
    {
      id: 's2',
      name: 'Nike Dunk Low Gorge Green',
      brand: 'Nike',
      category: 'nike',
      price: 70000,
      desc: 'Low-top Dunk in gorge green, sail and burgundy with a gum sole — clean paneling and everyday street energy.',
      image: 'https://i.pinimg.com/1200x/43/77/33/437733d6467f18d866de37f480a0cebd.jpg'
    },
    {
      id: 's3',
      name: 'Adidas Samba OG',
      brand: 'Adidas',
      category: 'adidas',
      price: 70000,
      desc: 'White leather Samba with black three-stripes, grey suede overlays, gold SAMBA text and gum sole — the indoor classic, street-ready.',
      badge: 'New',
      image: 'https://i.pinimg.com/736x/69/82/e9/6982e942a473b6cdb69a3eaf57f31009.jpg'
    },
    {
      id: 's4',
      name: 'Nike Air Force 1 Orange Black',
      brand: 'Nike',
      category: 'nike',
      price: 70000,
      desc: 'Bold AF1 color-block in orange, black and white with perforated toe box, black Swoosh and white midsole.',
      badge: 'Exclusive',
      image: 'https://i.pinimg.com/1200x/16/5e/76/165e76ee5ee8dbcd7ea7aebe5cbe8f3e.jpg'
    },
    {
      id: 's5',
      name: 'Jordan 4 Retro Fire Red',
      brand: 'Jordan',
      category: 'jordan',
      price: 70000,
      desc: 'White leather Jordan 4 with fire-red accents, black support wings, mesh panels and visible Air unit — pure OG heat.',
      image: 'https://i.pinimg.com/736x/ab/ea/af/abeaafe71ec33f26343b1ab9da958768.jpg'
    },
    {
      id: 's6',
      name: "Nike Air Force 1 '07 Triple White",
      brand: 'Nike',
      category: 'nike',
      price: 70000,
      desc: 'All-white leather Air Force 1 with perforated toe, silver lace jewels and the classic cupsole — the clean everyday staple.',
      image: 'https://i.pinimg.com/736x/fc/40/a5/fc40a556515306c12dda4f3f90ce5ca5.jpg'
    },
    {
      id: 's7',
      name: 'Adidas ZX Runner White',
      brand: 'Adidas',
      category: 'adidas',
      price: 70000,
      desc: 'White mesh-and-leather Adidas runner with black three-stripes, sculpted midsole and soft cushioning for all-day wear.',
      badge: 'Limited',
      image: 'https://i.pinimg.com/736x/be/6d/18/be6d18ed1acbd66d5a02f00cc8cb6f46.jpg'
    },
    {
      id: 's8',
      name: 'Puma Court White Classic',
      brand: 'Puma',
      category: 'adidas',
      price: 70000,
      oldPrice: 315000,
      desc: 'Crisp all-white Puma court sneaker with perforated side panel, clean branding and a smooth leather finish.',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&sat=-20'
    }
  ],
  belts: [
    {
      id: 'b1',
      name: 'Star Stud Black Belt',
      brand: "Romeo's",
      category: 'designer',
      price: 20000,
      desc: 'Black leather with silver star studs and dome rivets, finished with a classic rectangular chrome buckle.',
      badge: 'Bestseller',
      image: 'https://i.pinimg.com/1200x/cc/9c/d6/cc9cd640b3f8ec83da21ab68e2d27b8d.jpg'
    },
    {
      id: 'b2',
      name: 'Diesel H Logo Belt',
      brand: 'Designer',
      category: 'designer',
      price: 20000,
      desc: 'Smooth black leather with a polished silver oval H-style logo buckle — sharp, minimal designer finish.',
      badge: 'New',
      image: 'https://i.pinimg.com/1200x/ba/b0/83/bab08364e7b9decb9f86d243993dba58.jpg'
    },
    {
      id: 'b3',
      name: 'Gothic Cross Embossed Belt',
      brand: 'Designer',
      category: 'leather',
      price: 20000,
      desc: 'Black leather embossed with cross motifs and finished with an ornate silver oval filigree buckle.',
      badge: 'Exclusive',
      image: 'https://i.pinimg.com/1200x/76/5c/09/765c0962b5a295fff74e84bbadd2e6a7.jpg'
    },
    {
      id: 'b4',
      name: 'Dense Dome Stud Belt',
      brand: "Romeo's",
      category: 'casual',
      price: 20000,
      desc: 'Black leather packed with multi-row silver dome studs from tip to buckle — heavy street texture.',
      image: 'https://i.pinimg.com/1200x/73/d0/a7/73d0a75edb7c82f9ba82cd6d0d165f9e.jpg'
    },
    {
      id: 'b5',
      name: 'Fleur Cross Oval Duo',
      brand: 'Designer',
      category: 'leather',
      price: 20000,
      desc: 'Black leather with silver fleur-style studs and dual ornate oval cross buckles — gothic luxury hardware.',
      badge: 'Limited',
      image: 'https://i.pinimg.com/1200x/25/ca/96/25ca968b130122a77678114d49d7d8a6.jpg'
    },
    {
      id: 'b6',
      name: 'Choppers Iron Cross Belt',
      brand: 'Designer',
      category: 'designer',
      price: 20000,
      desc: 'Black tooled leather with a large West Coast Choppers iron-cross buckle — pure biker attitude.',
      image: 'https://i.pinimg.com/736x/03/7c/b2/037cb2896d3caa923322a72a70e59971.jpg'
    },
    {
      id: 'b7',
      name: 'Medusa Greca Web Belt',
      brand: 'Designer',
      category: 'romeo',
      price: 20000,
      desc: 'Black and gold Greek-key web strap with a sculpted gold Medusa head buckle — loud designer energy.',
      badge: 'Exclusive',
      image: 'https://i.pinimg.com/736x/60/dc/bd/60dcbd4293de363747960cac6ee07bb6.jpg'
    },
    {
      id: 'b8',
      name: 'Iced Medusa Black Belt',
      brand: 'Designer',
      category: 'romeo',
      price: 20000,
      desc: 'Sleek black leather with a rose-gold Medusa buckle fully paved in crystals, shown with presentation box.',
      badge: 'Bestseller',
      image: 'https://i.pinimg.com/1200x/06/7e/9b/067e9bdf78d39fcc91d5bbb4b44acd77.jpg'
    }
  ]
};


/** Faster card image URL — smaller Pinterest/Imgur sizes for grid cards */
function cardImageUrl(url) {
  if (!url) return url;
  let u = String(url);
  // Pinterest: force medium width (474px) for product grids — much lighter than 1200x
  if (u.includes('i.pinimg.com')) {
    u = u.replace(/\/(?:\d+x|originals)\//, '/474x/');
  }
  // Imgur large thumb ~640px
  const m = u.match(/^(https:\/\/i\.imgur\.com\/)([A-Za-z0-9]+)(\.[a-zA-Z]+)?/i);
  if (m) return m[1] + m[2] + 'l.jpg';
  // Unsplash: request modest size
  if (u.includes('images.unsplash.com') && !u.includes('w=')) {
    u += (u.includes('?') ? '&' : '?') + 'w=600&h=600&fit=crop&q=70';
  }
  return u;
}

/** Full-size image for modal / WhatsApp photo links */
function fullImageUrl(url) {
  if (!url) return url;
  let u = String(url);
  if (u.includes('i.pinimg.com')) {
    u = u.replace(/\/(?:\d+x|originals)\//, '/736x/');
  }
  return u;
}

function formatPrice(n) {
  return '₦' + Number(n).toLocaleString('en-NG');
}

// ---------- STATE ----------
let cart = JSON.parse(localStorage.getItem('romeoCart') || '[]');
// Default theme is always dark unless user previously chose light
let currentTheme = (function () {
  try {
    const t = localStorage.getItem('romeoTheme');
    return t === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
})();

// ---------- DOM ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ---------- INTRO (1.5s) ----------
function runIntro() {
  const overlay = $('#intro-overlay');
  if (!overlay) return;
  setTimeout(() => {
    overlay.classList.add('hide');
    setTimeout(() => overlay.remove(), 500);
  }, 1500);
}

// ---------- THEME (smooth via View Transitions; no laggy multi-element CSS) ----------
function applyTheme(next) {
  currentTheme = next;
  document.documentElement.setAttribute('data-theme', currentTheme);
  try {
    localStorage.setItem('romeoTheme', currentTheme);
  } catch (_) {}
  updateThemeIcon();
}

function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const btn = $('#theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = currentTheme === 'dark' ? 'light' : 'dark';

    // Modern smooth page crossfade (GPU-friendly snapshot)
    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme(next));
      return;
    }

    // Fallback: instant switch (still smooth — no janky partial transitions)
    applyTheme(next);
  });
}

function updateThemeIcon() {
  const icon = $('#theme-icon');
  if (!icon) return;
  icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ---------- HEADER / NAV ----------
function initHeader() {
  const header = $('#header');
  const menuToggle = $('#menu-toggle');
  const nav = $('#nav');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('scrolled', window.scrollY > 40);
      ticking = false;
    });
  }, { passive: true });

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Categories dropdown (click for mobile, hover works via CSS on desktop)
  const dropdown = $('.nav-dropdown');
  const dropToggle = $('.nav-dropdown-toggle');
  if (dropdown && dropToggle) {
    dropToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const open = dropdown.classList.toggle('open');
      dropToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropToggle.setAttribute('aria-expanded', 'false');
      }
    });
    $$('.nav-dropdown-item', dropdown).forEach(item => {
      item.addEventListener('click', () => {
        dropdown.classList.remove('open');
        dropToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (link.classList.contains('nav-dropdown-toggle')) return;
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
      $$('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Active section highlight
  const sections = ['home', 'shoes', 'belts', 'about', 'contact'];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        $$('.nav-link').forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ---------- PARTICLES ----------
function createParticles() {
  const container = $('#particles');
  if (!container) return;
  // ~50% more particles (10 → 15), larger sizes
  const count = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 15;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 7 + 's';
    p.style.animationDuration = 9 + Math.random() * 10 + 's';
    // Larger particles (~3.5px – 7px)
    const size = 3.5 + Math.random() * 3.5;
    p.style.width = p.style.height = size + 'px';
    frag.appendChild(p);
  }
  container.appendChild(frag);
}

// ---------- RENDER PRODUCTS ----------
function renderProducts(section, filter = 'all') {
  const grid = $(`#${section}-grid`);
  const items = PRODUCTS[section] || [];
  const filtered = filter === 'all' ? items : items.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <article class="product-card" data-id="${p.id}" data-section="${section}" style="transition-delay: ${Math.min(i, 6) * 0.04}s">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img class="product-img" src="${cardImageUrl(p.image)}" alt="${p.name}" width="600" height="600" loading="${i < 4 ? 'eager' : 'lazy'}" fetchpriority="${i < 2 ? 'high' : 'auto'}" referrerpolicy="no-referrer" decoding="async">
        <button class="btn btn-primary btn-sm product-quick" data-action="quick" data-id="${p.id}" data-section="${section}">
          Quick View
        </button>
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <div class="product-price">
            ${formatPrice(p.price)}
            ${p.oldPrice ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="add-cart-btn" data-action="add" data-id="${p.id}" data-section="${section}" aria-label="Add to cart">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  $$('.product-img', grid).forEach(img => {
    img.referrerPolicy = 'no-referrer';
  });

  // Reveal animation
  requestAnimationFrame(() => {
    $$('.product-card', grid).forEach(card => {
      setTimeout(() => card.classList.add('visible'), 50);
    });
  });
}

function initFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      const filter = btn.dataset.filter;
      $$(`#${section}-filters .filter-btn`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Belts: brief exit animation then re-render
      if (section === 'belts') {
        const grid = $('#belts-grid');
        if (grid) {
          grid.querySelectorAll('.product-card').forEach((card, i) => {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px) scale(0.97)';
          });
          setTimeout(() => renderProducts(section, filter), 220);
          return;
        }
      }
      renderProducts(section, filter);
    });
  });
}

// ---------- BELTS SECTION FX (tilt + magnetic filters) ----------
function initBeltsFX() {
  const grid = $('#belts-grid');
  const section = $('#belts');
  if (!grid || !section) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip tilt on touch

  // 3D tilt on pointer move over cards
  grid.addEventListener('pointermove', (e) => {
    const card = e.target.closest('.product-card');
    if (!card || !grid.contains(card)) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 12;
    const rotX = (0.5 - y) * 10;
    card.classList.add('is-tilting');
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.02)`;
  });
  grid.addEventListener('pointerleave', (e) => {
    if (e.target.closest('.product-card')) return;
  }, true);
  grid.addEventListener('pointerout', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    if (card.contains(e.relatedTarget)) return;
    card.classList.remove('is-tilting');
    card.style.transform = '';
  });

  // Magnetic filter buttons
  const filterBar = $('#belts-filters');
  if (filterBar) {
    filterBar.addEventListener('pointermove', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
      btn.style.transform = `translate(${dx}px, ${dy}px) scale(${btn.classList.contains('active') ? 1.04 : 1})`;
    });
    filterBar.addEventListener('pointerleave', () => {
      $$('.filter-btn', filterBar).forEach(b => {
        b.style.transform = b.classList.contains('active') ? 'scale(1.04)' : '';
      });
    });
  }
}

// ---------- CART ----------
function saveCart() {
  localStorage.setItem('romeoCart', JSON.stringify(cart));
  updateCartUI();
}

function findProduct(id, section) {
  return (PRODUCTS[section] || []).find(p => p.id === id);
}

function addToCart(id, section) {
  const product = findProduct(id, section);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      section,
      qty: 1
    });
  }
  saveCart();
  showToast(`${product.name} added to cart`);
  // Animate cart button
  const cartBtn = $('#cart-btn');
  cartBtn.style.transform = 'scale(1.15)';
  setTimeout(() => cartBtn.style.transform = '', 200);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  showToast('Item removed');
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  showToast('Cart cleared');
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const countEl = $('#cart-count');
  countEl.textContent = count;
  countEl.classList.toggle('show', count > 0);

  const container = $('#cart-items');
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
        <p style="font-size:0.85rem;margin-top:0.5rem">Add some kicks or belts</p>
      </div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='logo.jfif'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.brand}</div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-action="remove" data-id="${item.id}" aria-label="Remove">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `).join('');
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  $('#cart-total').textContent = formatPrice(total);
}

function initCart() {
  const sidebar = $('#cart-sidebar');
  const overlay = $('#cart-overlay');

  function openCart() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  $('#cart-btn').addEventListener('click', openCart);
  $('#cart-close').addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);
  $('#clear-cart').addEventListener('click', clearCart);
  $('#whatsapp-order-btn').addEventListener('click', () => {
    openWhatsAppOrder();
  });

  // Event delegation for cart items
  $('#cart-items').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if (action === 'inc') updateQty(id, 1);
    if (action === 'dec') updateQty(id, -1);
    if (action === 'remove') removeFromCart(id);
  });

  updateCartUI();
}

// ---------- PRODUCT INTERACTIONS ----------
function initProductEvents() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    const id = btn.dataset.id;
    const section = btn.dataset.section;

    if (action === 'add') {
      addToCart(id, section);
      btn.classList.add('added');
      btn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fas fa-plus"></i>';
      }, 1200);
    }

    if (action === 'quick') {
      openModal(id, section);
    }
  });
}

// ---------- MODAL ----------
function openModal(id, section) {
  const product = findProduct(id, section);
  if (!product) return;

  const body = $('#modal-body');
  body.innerHTML = `
    <img class="modal-img" src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='logo.jfif'">
    <div class="modal-info">
      <p class="modal-brand">${product.brand}</p>
      <h3 class="modal-name">${product.name}</h3>
      <p class="modal-desc">${product.desc}</p>
      <div class="modal-price">${formatPrice(product.price)}
        ${product.oldPrice ? `<span class="old" style="font-size:1rem;color:var(--text-muted);text-decoration:line-through;margin-left:0.5rem">${formatPrice(product.oldPrice)}</span>` : ''}
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" data-action="add" data-id="${product.id}" data-section="${section}">
          <i class="fas fa-shopping-bag"></i> Add to Cart
        </button>
      </div>
    </div>
  `;

  $('#modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function initModal() {
  const overlay = $('#modal-overlay');
  $('#modal-close').addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ---------- WHATSAPP ORDER ----------
const WA_NUMBER = '2348095723573';

function openWhatsAppOrder() {
  let message;
  if (cart.length === 0) {
    message = 'Hi- I would like to order from Romeo Kicks';
  } else {
    const lines = cart.map((item, i) => {
      const qty = Number(item.qty) || 1;
      const unit = Number(item.price) || 0;
      const lineTotal = unit * qty;
      const img = fullImageUrl(item.image || '');
      let line = (i + 1) + '. ' + item.name + String.fromCharCode(10);
      line += '   Qty: ' + qty + ' x ' + formatPrice(unit) + ' = ' + formatPrice(lineTotal) + String.fromCharCode(10);
      if (img) line += '   Photo: ' + img + String.fromCharCode(10);
      return line;
    });
    const total = cart.reduce((s, item) => s + (Number(item.price) || 0) * (Number(item.qty) || 1), 0);
    const nl = String.fromCharCode(10);
    message = 'Hi- I would like to order from Romeo Kicks:' + nl + nl +
      lines.join(nl) +
      nl + '----------------' + nl +
      'TOTAL: ' + formatPrice(total) + nl + nl +
      'Please confirm availability. Thank you!';
  }
  const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener');
}

// ---------- TOAST ----------
function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show', 'success');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ---------- CONTACT FLOW ----------
function initNewsletter() {
  const emailForm = $('#contact-email-form');
  const messageStage = $('#contact-message-stage');
  const messageForm = $('#contact-message-form');
  const emailInput = $('#contact-email');
  const emailChip = $('#contact-email-chip');
  const messageInput = $('#contact-message');

  if (!emailForm) return;

  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;

    showToast('Email entered — write your message below');

    // Soft hide email form, reveal message stage
    emailForm.classList.add('submitted');
    emailChip.innerHTML = `<i class="fas fa-envelope"></i> <span>${email}</span>`;
    messageStage.hidden = false;
    // Force reflow then animate in
    requestAnimationFrame(() => {
      messageStage.classList.add('visible');
      messageInput.focus();
    });
  });

  messageForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (!message) {
      showToast('Please write a message first');
      return;
    }

    const sendBtn = $('#send-to-romeo');
    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.classList.add('sending');
    }

    // Formspree → https://formspree.io/f/xwlpbpdo → your connected Gmail
    try {
      const res = await fetch('https://formspree.io/f/xwlpbpdo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: message,
          _subject: "Romeo's Kicks — Website Contact",
          source: "Romeo's Kicks website contact form"
        })
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'send failed');

      showToast("Message sent to Romeo's Kicks");
      messageInput.value = '';
      messageForm.classList.add('sent');
      setTimeout(() => messageForm.classList.remove('sent'), 2500);
    } catch (err) {
      showToast('Could not send — try again or WhatsApp us');
      console.warn('Contact form error:', err);
    } finally {
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.classList.remove('sending');
      }
    }
  });
}

// ---------- STATS COUNTER ----------
function initStats() {
  const stats = $$('.stat-num');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        animateCount(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
}

function animateCount(el, target) {
  // Smooth ease-out (~2.4s): feels deliberate but still snappy
  const duration = 2400;
  const start = performance.now();
  const parent = el.closest('.stat');
  if (parent) parent.classList.add('is-counting');
  function easeOutExpo(t) {
    return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutExpo(progress);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
      if (parent) parent.classList.remove('is-counting');
    }
  }
  requestAnimationFrame(tick);
}

// ---------- SCROLL REVEAL (extra cards) ----------
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Re-observe product cards when filters change
  const gridObserver = new MutationObserver(() => {
    $$('.product-card:not(.visible)').forEach(card => observer.observe(card));
  });
  ['shoes-grid', 'belts-grid'].forEach(id => {
    const grid = document.getElementById(id);
    if (grid) gridObserver.observe(grid, { childList: true });
  });
}

// ---------- FLOATING WA ----------
function initFloatingWA() {
  const fab = $('#floating-wa');
  if (!fab) return;
  fab.addEventListener('click', (e) => {
    e.preventDefault();
    openWhatsAppOrder();
  });
}

// ---------- INIT ----------
// ---------- SECTION SCROLL REVEAL ----------
function initSectionReveal() {
  const sections = $$('.reveal-section');
  if (!sections.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach(s => s.classList.add('is-inview'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  sections.forEach(s => io.observe(s));
}

// ---------- TESTIMONIALS (cloud-backed for all visitors) ----------
/*
  PERMANENT SHARED REVIEWS
  -----------------------
  1. Go to https://jsonbin.io  (free account) OR https://www.npoint.io
  2. Create a new bin with content exactly:  []
  3. Paste your credentials below in REVIEW_CLOUD
  4. Redeploy once — after that, new reviews auto-appear for everyone

  JSONBin.io (recommended):
    - binId: from the bin URL
    - apiKey: Account → API Keys → X-Master-Key

  npoint.io (no API key):
    - url: https://api.npoint.io/YOUR_BIN_ID
    - leave binId and apiKey empty
*/
const REVIEW_CLOUD = {
  // --- fill ONE of these setups ---
  // A) JSONBin.io
  binId: '',           // e.g. '67f1a2b3c4d5e6f7a8b9c0d1'
  apiKey: '',          // e.g. '$2a$10$....your-master-key'
  // B) npoint.io (simpler, no key)
  url: 'https://api.npoint.io/2ddc22434e4ba7f6312f',             // e.g. 'https://api.npoint.io/abc123def456'
};

const SEED_REVIEWS = [
  {
    id: 'seed-daniel',
    name: 'Daniel Okolo',
    rating: 5,
    tag: 'Verified buyer',
    message: 'Affordable kick, quick delivery, 10/10 customer care. I was impressed with the quality of the shoes I received. They were exactly as described, and the fit was perfect. The materials used are durable, and you can tell they put a lot of thought into the design. I\u2019ve already received several compliments on them!',
    icon: 'shoe',
    seed: true
  },
  {
    id: 'seed-philemon',
    name: 'Philemon Usitaka',
    rating: 5,
    tag: 'Verified buyer',
    message: 'I got what I ordered \u2013 it\u2019s really nice. Super fresh, well packaged, and just what I was hoping for. Thanks a lot! I\u2019ll definitely be buying again.',
    icon: 'package',
    seed: true
  },
  {
    id: 'seed-afeez',
    name: 'Afeez Adeosun Samuel',
    rating: 5,
    tag: 'Verified buyer',
    message: 'The ordering process was smooth and straightforward. I appreciated the detailed product descriptions and the high-quality photos, which gave me a clear idea of what I was buying. The customer service was also excellent; I had a question about sizing, and they responded promptly and helpfully.',
    icon: 'chat',
    seed: true
  }
];

const REVIEW_ICONS = {
  shoe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14c1.5-1 4-2 7-2h5c2 0 4 .5 5 2l1 1.5H3.5L3 14z"/><path d="M4 15.5h16"/><path d="M7 12c.5-2 1.5-4 3-5"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-4-9 4v8l9 4 9-4V8z"/><path d="M3 8l9 4 9-4"/><path d="M12 12v8"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 7L12 17.8 5.8 21.2 7 14.2 2 9.3l6.9-1L12 2z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>'
};

const ICON_CYCLE = ['shoe', 'package', 'chat', 'star', 'heart'];
let adminMode = false;
/** In-memory community reviews (synced from cloud) */
let communityReviews = [];

function cloudConfigured() {
  const npoint = (REVIEW_CLOUD.url || '').trim();
  const bin = (REVIEW_CLOUD.binId || '').trim();
  const key = (REVIEW_CLOUD.apiKey || '').trim();
  return !!(npoint || (bin && key));
}

function cloudMode() {
  if ((REVIEW_CLOUD.url || '').trim()) return 'npoint';
  if ((REVIEW_CLOUD.binId || '').trim() && (REVIEW_CLOUD.apiKey || '').trim()) return 'jsonbin';
  return 'local';
}

async function fetchCommunityReviews() {
  const mode = cloudMode();
  try {
    if (mode === 'npoint') {
      const res = await fetch(REVIEW_CLOUD.url.trim() + '?t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) throw new Error('npoint ' + res.status);
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.reviews || []);
      return list.filter(r => r && r.id && !r.seed);
    }
    if (mode === 'jsonbin') {
      const res = await fetch('https://api.jsonbin.io/v3/b/' + REVIEW_CLOUD.binId.trim() + '/latest', {
        headers: { 'X-Master-Key': REVIEW_CLOUD.apiKey.trim() },
        cache: 'no-store'
      });
      if (!res.ok) throw new Error('jsonbin ' + res.status);
      const data = await res.json();
      const record = data.record;
      const list = Array.isArray(record) ? record : (record && record.reviews) || [];
      return list.filter(r => r && r.id && !r.seed);
    }
  } catch (err) {
    console.warn('Cloud reviews fetch failed, using local cache:', err);
  }
  // Fallback: localStorage
  try {
    const raw = localStorage.getItem('romeoReviews');
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

async function persistCommunityReviews(list) {
  const safe = (list || []).slice(0, 80);
  // Always mirror to localStorage as offline cache
  try {
    localStorage.setItem('romeoReviews', JSON.stringify(safe));
  } catch (_) {}

  const mode = cloudMode();
  if (mode === 'local') {
    console.warn('REVIEW_CLOUD not configured — reviews only save on this device. See script.js header.');
    return { ok: false, mode: 'local' };
  }
  try {
    if (mode === 'npoint') {
      const res = await fetch(REVIEW_CLOUD.url.trim(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(safe)
      });
      if (!res.ok) throw new Error('npoint save ' + res.status);
      return { ok: true, mode: 'npoint' };
    }
    if (mode === 'jsonbin') {
      const res = await fetch('https://api.jsonbin.io/v3/b/' + REVIEW_CLOUD.binId.trim(), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': REVIEW_CLOUD.apiKey.trim()
        },
        body: JSON.stringify(safe)
      });
      if (!res.ok) throw new Error('jsonbin save ' + res.status);
      return { ok: true, mode: 'jsonbin' };
    }
  } catch (err) {
    console.warn('Cloud reviews save failed:', err);
    return { ok: false, mode, error: String(err) };
  }
  return { ok: false, mode: 'local' };
}

function initials(name) {
  const parts = String(name || 'RK').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'RK';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function starsHtml(n) {
  const r = Math.max(1, Math.min(5, Number(n) || 5));
  return '\u2605'.repeat(r) + '\u2606'.repeat(5 - r);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderTestimonials() {
  const track = $('#testimonials-track');
  if (!track) return;

  const all = [...SEED_REVIEWS, ...communityReviews];

  track.innerHTML = all.map((r, i) => {
    const iconKey = r.icon || ICON_CYCLE[i % ICON_CYCLE.length];
    const icon = REVIEW_ICONS[iconKey] || REVIEW_ICONS.star;
    const canDelete = !r.seed;
    return `
      <article class="testimonial-card ${r.seed ? 'seed' : 'community'}" data-id="${r.id}" style="transition-delay: ${Math.min(i, 6) * 0.06}s">
        <div class="testimonial-icon">${icon}</div>
        <div class="testimonial-stars" aria-label="${r.rating} out of 5 stars">${starsHtml(r.rating)}</div>
        <p class="testimonial-text">${escapeHtml(r.message)}</p>
        <div class="testimonial-footer">
          <div class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">${escapeHtml(initials(r.name))}</div>
            <div>
              <div class="testimonial-name">${escapeHtml(r.name)}</div>
              <div class="testimonial-tag">${escapeHtml(r.tag || 'Customer')}</div>
            </div>
          </div>
          ${canDelete ? `<button type="button" class="testimonial-delete" data-action="delete-review" data-id="${r.id}" aria-label="Delete review"><i class="fas fa-trash-alt"></i></button>` : ''}
        </div>
      </article>
    `;
  }).join('');

  requestAnimationFrame(() => {
    $$('.testimonial-card', track).forEach((card, i) => {
      setTimeout(() => card.classList.add('is-shown'), 40 + i * 50);
    });
  });
}

function initTestimonials() {
  const form = $('#review-form');
  const section = $('#testimonials');
  if (!section) return;

  // Load shared reviews for everyone
  (async () => {
    communityReviews = await fetchCommunityReviews();
    renderTestimonials();
    if (!cloudConfigured()) {
      console.info(
        '%cRomeo Reviews: cloud not configured. Set REVIEW_CLOUD in script.js so reviews show for all visitors.',
        'color:#d4af37'
      );
    }
  })();

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = ($('#review-name')?.value || '').trim();
      const message = ($('#review-message')?.value || '').trim();
      const rating = Number($('#review-rating')?.value || 5);
      if (!name || !message) {
        showToast('Please enter your name and review');
        return;
      }
      if (message.length < 8) {
        showToast('Review is a bit short \u2014 add a few more words');
        return;
      }

      const submitBtn = $('#review-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publishing\u2026';
      }

      const review = {
        id: 'r-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
        name,
        message,
        rating,
        tag: 'Community',
        icon: ICON_CYCLE[Math.floor(Math.random() * ICON_CYCLE.length)],
        seed: false,
        createdAt: new Date().toISOString()
      };

      // Optimistic UI
      communityReviews = [review, ...communityReviews];
      renderTestimonials();
      form.reset();

      const result = await persistCommunityReviews(communityReviews);

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit review';
      }

      if (result.ok) {
        showToast('Review published for everyone \u2014 thank you!');
      } else if (result.mode === 'local') {
        showToast('Saved on this device only \u2014 connect cloud in script.js for site-wide');
      } else {
        showToast('Saved locally; cloud sync failed \u2014 try again later');
      }

      // Email owner via Formspree
      try {
        await fetch('https://formspree.io/f/xwlpbpdo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: "Romeo's Kicks \u2014 New website review",
            name,
            rating,
            message,
            source: 'testimonial form',
            cloud: result.ok ? 'synced' : 'local-only'
          })
        });
      } catch (_) {}
    });
  }

  section.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-action="delete-review"]');
    if (!btn) return;
    if (!adminMode) {
      showToast('Admin mode required to delete');
      return;
    }
    const id = btn.dataset.id;
    if (!id || !confirm('Delete this review for everyone on the site?')) return;

    communityReviews = communityReviews.filter(r => r.id !== id);
    renderTestimonials();
    const result = await persistCommunityReviews(communityReviews);
    if (result.ok) showToast('Review deleted for everyone');
    else showToast('Deleted locally; cloud sync failed');
  });

  // Secret admin unlock: click "Client Voices" 7 times, then password
  const eyebrow = $('#testimonials-eyebrow');
  let clicks = 0;
  let clickTimer = null;
  if (eyebrow) {
    eyebrow.addEventListener('click', () => {
      clicks += 1;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => { clicks = 0; }, 2500);
      if (clicks < 7) return;
      clicks = 0;
      const pwd = prompt('Admin password to manage reviews:');
      if (pwd === 'romeoadmin') {
        adminMode = true;
        section.classList.add('admin-mode');
        const hint = $('#review-admin-hint');
        if (hint) {
          hint.hidden = false;
          hint.textContent = cloudConfigured()
            ? 'Admin mode on — deletes remove the review for every visitor.'
            : 'Admin mode on — cloud not set up yet (local only). Configure REVIEW_CLOUD in script.js.';
        }
        showToast('Admin mode enabled');
      } else if (pwd !== null) {
        showToast('Wrong password');
      }
    });
  }

  window.romeoAdmin = function (pwd) {
    if (pwd === 'romeoadmin') {
      adminMode = true;
      section.classList.add('admin-mode');
      const hint = $('#review-admin-hint');
      if (hint) {
        hint.hidden = false;
        hint.textContent = cloudConfigured()
          ? 'Admin mode on — deletes remove the review for every visitor.'
          : 'Admin mode on — cloud not set up yet. Configure REVIEW_CLOUD in script.js.';
      }
      showToast('Admin mode enabled');
      return true;
    }
    showToast('Wrong password');
    return false;
  };
  window.romeoAdminOff = function () {
    adminMode = false;
    section.classList.remove('admin-mode');
    const hint = $('#review-admin-hint');
    if (hint) hint.hidden = true;
    showToast('Admin mode off');
  };

  // Refresh from cloud every 60s so other visitors' new reviews appear
  if (cloudConfigured()) {
    setInterval(async () => {
      if (document.hidden) return;
      const latest = await fetchCommunityReviews();
      const a = JSON.stringify(latest.map(r => r.id).sort());
      const b = JSON.stringify(communityReviews.map(r => r.id).sort());
      if (a !== b) {
        communityReviews = latest;
        renderTestimonials();
      }
    }, 60000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  runIntro();
  initTheme();
  initHeader();
  createParticles();
  renderProducts('shoes');
  renderProducts('belts');
  initFilters();
  initBeltsFX();
  initCart();
  initProductEvents();
  initModal();
  initNewsletter();
  initStats();
  initScrollReveal();
  initSectionReveal();
  initFloatingWA();
  initTestimonials();
});
