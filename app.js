/* ==========================================================================
   DEINES - MODA Y COMPLEMENTOS
   Lógica de Aplicación E-commerce (Estilo Shopify)
   ========================================================================== */

// --- Base de Datos de Productos ---
const PRODUCTOS = [
    // Novedades
    {
        id: "bolso-bandolera-menta",
        title: "Bolso Bandolera Menta",
        category: "bandolera",
        price: 49.95,
        oldPrice: null,
        image: "assets/bolso_menta.png",
        colors: ["menta", "lila"],
        isNew: true,
        isSale: false,
        desc: "Exquisito bolso bandolera de piel vegana en color verde menta. Presenta un diseño curvo sofisticado, herrajes de metal dorado de alta calidad y un compartimento principal espacioso para el uso diario.",
        specs: "Material: Cuero vegano sintético (PU) premium | Medidas: 22 x 15 x 6 cm | Correa ajustable: 110 cm"
    },
    {
        id: "bolso-hombro-camel",
        title: "Bolso de Hombro Camel",
        category: "hombro",
        price: 38.95,
        oldPrice: 49.95,
        image: "assets/bolso_camel.png",
        colors: ["camel", "beige"],
        isNew: false,
        isSale: true,
        desc: "Clásico bolso estilo shopper de hombro en color marrón camel cálido. De gran capacidad y con una estructura flexible pero duradera. Perfecto tanto para la oficina como para tus salidas del fin de semana.",
        specs: "Material: Cuero sintético reforzado | Medidas: 32 x 28 x 12 cm | Cierre magnético y bolsillo interno con cremallera"
    },
    {
        id: "bolso-bandolera-coral",
        title: "Bolso Bandolera Coral",
        category: "bandolera",
        price: 49.95,
        oldPrice: null,
        image: "assets/bolso_coral.png",
        colors: ["coral", "camel"],
        isNew: true,
        isSale: false,
        desc: "Bolso cruzado compacto de diseño rectangular en vibrante color coral apagado. Su cierre dorado a presión y su tamaño ideal lo convierten en un accesorio imprescindible para destacar con elegancia.",
        specs: "Material: Piel vegana estructurada | Medidas: 20 x 14 x 5.5 cm | Cadena decorativa desmontable"
    },
    {
        id: "bolso-mano-marino",
        title: "Bolso de Mano Marino",
        category: "mano",
        price: 38.95,
        oldPrice: null,
        image: "assets/bolso_marino.png",
        colors: ["marino", "negro"],
        isNew: false,
        isSale: false,
        desc: "Elegante bolso de mano en color azul marino intenso. Cuenta con una robusta asa superior de mano y una correa larga de hombro ajustable y desmontable para llevarlo cómodamente cruzado.",
        specs: "Material: Cuero sintético texturizado | Medidas: 25 x 18 x 9 cm | Herrajes metálicos dorados"
    },
    {
        id: "mochila-menta",
        title: "Mochila Menta",
        category: "mochila",
        price: 34.95,
        oldPrice: 44.95,
        image: "assets/mochila_menta.png",
        colors: ["menta"],
        isNew: true,
        isSale: true,
        desc: "Mochila urbana de diseño minimalista e impermeable en tono verde menta. Cuenta con un compartimento principal seguro y correas ajustables y acolchadas para mayor confort.",
        specs: "Material: Poliéster impermeable y detalles de PU | Medidas: 28 x 35 x 10 cm | Capacidad aproximada: 10L"
    },
    
    // Más Vendidos
    {
        id: "bolso-hombro-beige",
        title: "Bolso de Hombro Beige",
        category: "hombro",
        price: 59.95,
        oldPrice: null,
        image: "assets/bolso_beige.png",
        colors: ["beige", "camel"],
        isNew: false,
        isSale: false,
        desc: "Soberbio bolso shopper estructurado en tono beige arena. Un accesorio atemporal de alta gama con un amplio compartimento interior dividido y herrajes metálicos reforzados.",
        specs: "Material: Cuero vegano granulado | Medidas: 35 x 26 x 14 cm | Incluye neceser interno desmontable"
    },
    {
        id: "bolso-bandolera-negro",
        title: "Bolso Bandolera Negro",
        category: "bandolera",
        price: 49.95,
        oldPrice: null,
        image: "assets/bolso_negro.png",
        colors: ["negro", "marino"],
        isNew: false,
        isSale: false,
        desc: "La bandolera negra imprescindible. Práctica, compacta y elegante con cremalleras doradas de suave deslizamiento y varios compartimentos con cremallera organizadores.",
        specs: "Material: Piel vegana suave | Medidas: 21 x 15 x 7 cm | Correa bandolera de hombro ajustable"
    },
    {
        id: "bolso-hombro-azul",
        title: "Bolso de Hombro Azul Claro",
        category: "hombro",
        price: 49.95,
        oldPrice: null,
        image: "assets/bolso_azul.png",
        colors: ["azul", "lila"],
        isNew: false,
        isSale: false,
        desc: "Elegante bolso de hombro tipo hobo de tacto suave y color azul pastel. Su silueta relajada y su color luminoso añaden un aire fresco y sofisticado a cualquier look de diario.",
        specs: "Material: Cuero sintético tipo Napa | Medidas: 30 x 24 x 10 cm | Asa de hombro ancha muy cómoda"
    },
    {
        id: "bolso-bandolera-lila",
        title: "Bolso Bandolera Lila",
        category: "bandolera",
        price: 49.95,
        oldPrice: null,
        image: "assets/bolso_lila.png",
        colors: ["lila", "azul"],
        isNew: false,
        isSale: false,
        desc: "Dulce bandolera en color lavanda/lila de estructura rectangular y acabados dorados pulidos. Aporta una dosis perfecta de feminidad y color sin perder la discreción.",
        specs: "Material: PU premium texturizado | Medidas: 19 x 13 x 6 cm | Correa de hombro ajustable"
    },
    {
        id: "mochila-camel",
        title: "Mochila Camel",
        category: "mochila",
        price: 54.95,
        oldPrice: 64.95,
        image: "assets/mochila_camel.png",
        colors: ["camel", "negro"],
        isNew: false,
        isSale: true,
        desc: "Elegante mochila urbana en color marrón camel confeccionada en cuero vegano de alta durabilidad. Perfecta para viajes, universidad o trabajo gracias a su espacio para tablets de hasta 11 pulgadas.",
        specs: "Material: Cuero vegano premium | Medidas: 26 x 32 x 12 cm | Bolsillo de seguridad oculto en la espalda"
    }
];

// --- Estado de la Aplicación ---
let carrito = JSON.parse(localStorage.getItem('deines_cart')) || [];
let activeSearch = false;
let currentModalProductId = null;
let currentModalSelectedColor = "";

// --- Elementos del DOM ---
const gridNovedades = document.getElementById('grid-novedades');
const gridMasVendidos = document.getElementById('grid-mas-vendidos');
const cartSidebar = document.getElementById('cart-sidebar');
const cartTrigger = document.getElementById('btn-cart-trigger');
const closeCartBtn = document.getElementById('btn-close-cart');
const cartItemsList = document.getElementById('cart-items-list');
const cartCountBadge = document.getElementById('cart-count');
const cartEmptyMsg = document.getElementById('cart-empty-message');
const cartFooter = document.getElementById('cart-footer');
const cartSubtotal = document.getElementById('cart-subtotal');
const shippingPromoText = document.getElementById('shipping-promo-text');
const shippingProgressFill = document.getElementById('shipping-progress-fill');
const cartContinueBtn = document.getElementById('btn-cart-continue');

const modalBackdrop = document.getElementById('modal-backdrop');
const quickViewModal = document.getElementById('quick-view-modal');
const closeModalBtn = document.getElementById('btn-close-modal');
const modalImg = document.getElementById('modal-product-img');
const modalCat = document.getElementById('modal-product-cat');
const modalTitle = document.getElementById('modal-product-title');
const modalPrice = document.getElementById('modal-product-price');
const modalDesc = document.getElementById('modal-product-desc');
const modalColorsRow = document.getElementById('modal-product-colors');
const modalQtyVal = document.getElementById('modal-qty-val');
const modalQtyMinus = document.getElementById('modal-qty-minus');
const modalQtyPlus = document.getElementById('modal-qty-plus');
const modalAddCartBtn = document.getElementById('btn-modal-add-cart');

const searchTrigger = document.getElementById('btn-search-trigger');
const searchInput = document.getElementById('search-input');
const navDesktopLinks = document.querySelectorAll('.nav-desktop .nav-link');
const footerFilterLinks = document.querySelectorAll('.footer-col ul a, .collections-slider .collection-card');

const formNewsletter = document.getElementById('form-newsletter');
const inputNewsletterEmail = document.getElementById('newsletter-email');
const feedbackNewsletter = document.getElementById('newsletter-feedback');
const headerMain = document.getElementById('header-main');

// --- Renderizar Catálogo ---
function renderCatalog() {
    if (!gridNovedades || !gridMasVendidos) return;
    
    // Novedades (primeros 5)
    const novedades = PRODUCTOS.slice(0, 5);
    // Más Vendidos (siguientes 5)
    const masVendidos = PRODUCTOS.slice(5, 10);
    
    gridNovedades.innerHTML = novedades.map(p => generateProductCardHTML(p)).join('');
    gridMasVendidos.innerHTML = masVendidos.map(p => generateProductCardHTML(p)).join('');
    
    attachProductEvents();
}

function generateProductCardHTML(p) {
    const saleBadge = p.oldPrice ? `<span class="badge-tag badge-sale">Rebajas</span>` : '';
    const newBadge = p.isNew ? `<span class="badge-tag badge-new">Nuevo</span>` : '';
    const priceOldHTML = p.oldPrice ? `<span class="price-old">${p.oldPrice.toFixed(2)} €</span>` : '';
    
    const colorsHTML = p.colors.map((c, i) => 
        `<span class="color-dot color-${c} ${i === 0 ? 'active' : ''}" data-color="${c}" title="Variante de color: ${c}"></span>`
    ).join('');
    
    return `
        <article class="product-card" data-id="${p.id}" data-category="${p.category}">
            <div class="product-media-wrapper">
                <div class="product-badges">
                    ${newBadge}
                    ${saleBadge}
                </div>
                <button class="btn-wishlist" aria-label="Añadir a deseos" data-id="${p.id}">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <img src="${p.image}" alt="Foto de producto: ${p.title}" class="product-img" loading="lazy" width="220" height="220">
                <div class="product-action-overlay">
                    <button class="btn-quick-view" data-id="${p.id}">Vista Rápida</button>
                    <button class="btn-add-cart-fast" data-id="${p.id}">+ Añadir</button>
                </div>
            </div>
            <div class="product-info">
                <div>
                    <div class="product-meta-cat">${p.category.replace('hombro', 'Bolsos de Hombro').replace('bandolera', 'Bandoleras').replace('mochila', 'Mochilas').replace('mano', 'Bolsos de Mano')}</div>
                    <h3 class="product-title"><a href="#" class="btn-title-quickview" data-id="${p.id}">${p.title}</a></h3>
                </div>
                <div>
                    <div class="product-price-row">
                        <span class="price-current">${p.price.toFixed(2)} €</span>
                        ${priceOldHTML}
                    </div>
                    <div class="product-colors">
                        ${colorsHTML}
                    </div>
                </div>
            </div>
        </article>
    `;
}

// --- Adjuntar Eventos a Tarjetas de Productos ---
function attachProductEvents() {
    // Botones de Vista Rápida
    document.querySelectorAll('.btn-quick-view, .btn-title-quickview').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            openQuickView(id);
        });
    });
    
    // Botones de Añadir Rápido
    document.querySelectorAll('.btn-add-cart-fast').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const colorDot = btn.closest('.product-card').querySelector('.color-dot.active');
            const color = colorDot ? colorDot.getAttribute('data-color') : 'único';
            addToCart(id, 1, color);
        });
    });
    
    // Cambiar Color en la Ficha
    document.querySelectorAll('.product-card .color-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            // Desactivar otros puntos de la misma tarjeta
            dot.closest('.product-colors').querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });
    
    // Wishlist Toggle
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = '#fff';
                btn.style.backgroundColor = 'var(--color-brand-primary)';
                showToast("¡Guardado en tu lista de deseos!");
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = 'var(--color-text-dark)';
                btn.style.backgroundColor = 'var(--color-bg-white)';
            }
        });
    });
}

// --- Carrito de Compras (Cart Logic) ---
function addToCart(productId, qty = 1, color = 'único') {
    const prod = PRODUCTOS.find(p => p.id === productId);
    if (!prod) return;
    
    // Buscar si ya existe la combinación producto + color en el carrito
    const itemExistente = carrito.find(item => item.id === productId && item.color === color);
    
    if (itemExistente) {
        itemExistente.qty += qty;
    } else {
        carrito.push({
            id: prod.id,
            title: prod.title,
            price: prod.price,
            image: prod.image,
            color: color,
            qty: qty
        });
    }
    
    updateCart();
    saveCart();
    openCartSidebar();
    showToast(`¡Añadido al carrito: ${prod.title} (${color})!`);
}

function updateCart() {
    // Actualizar badge del contador
    const totalItems = carrito.reduce((acc, curr) => acc + curr.qty, 0);
    cartCountBadge.textContent = totalItems;
    
    if (carrito.length === 0) {
        cartItemsList.querySelector('.cart-empty-message').style.display = 'flex';
        // Ocultar resto de items
        document.querySelectorAll('.cart-item').forEach(el => el.remove());
        cartFooter.style.display = 'none';
        updateShippingPromo(0);
        return;
    }
    
    // Ocultar mensaje vacío
    cartEmptyMsg.style.display = 'none';
    cartFooter.style.display = 'block';
    
    // Eliminar items dibujados previamente para no duplicar
    document.querySelectorAll('.cart-item').forEach(el => el.remove());
    
    let subtotal = 0;
    
    // Renderizar items
    carrito.forEach(item => {
        subtotal += item.price * item.qty;
        
        const itemHTML = document.createElement('div');
        itemHTML.className = 'cart-item';
        itemHTML.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <div>
                    <h4 class="cart-item-title">${item.title}</h4>
                    <span class="cart-item-meta">Color: ${item.color.toUpperCase()}</span>
                </div>
                <div class="cart-item-qty-row">
                    <div class="qty-selector">
                        <button class="qty-btn btn-qty-minus" data-id="${item.id}" data-color="${item.color}"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn btn-qty-plus" data-id="${item.id}" data-color="${item.color}"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <span class="cart-item-price">${(item.price * item.qty).toFixed(2)} €</span>
                </div>
                <button class="btn-remove-cart-item" data-id="${item.id}" data-color="${item.color}">Eliminar</button>
            </div>
        `;
        cartItemsList.appendChild(itemHTML);
    });
    
    cartSubtotal.textContent = `${subtotal.toFixed(2)} €`;
    updateShippingPromo(subtotal);
    attachCartItemsEvents();
}

function updateShippingPromo(subtotal) {
    const envioGratisMeta = 80;
    if (subtotal === 0) {
        shippingPromoText.innerHTML = `¡Añade <strong>${envioGratisMeta.toFixed(2)} €</strong> más para conseguir envío gratis!`;
        shippingProgressFill.style.width = '0%';
    } else if (subtotal < envioGratisMeta) {
        const resta = envioGratisMeta - subtotal;
        const porcentaje = (subtotal / envioGratisMeta) * 100;
        shippingPromoText.innerHTML = `¡Estás a solo <strong>${resta.toFixed(2)} €</strong> del envío gratuito!`;
        shippingProgressFill.style.width = `${porcentaje}%`;
    } else {
        shippingPromoText.innerHTML = `¡Felicidades! Tienes <strong>ENVÍO GRATUITO</strong> garantizado 🚚`;
        shippingProgressFill.style.width = '100%';
    }
}

function attachCartItemsEvents() {
    // Botones de Incrementar
    document.querySelectorAll('.btn-qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const color = btn.getAttribute('data-color');
            const item = carrito.find(item => item.id === id && item.color === color);
            if (item) {
                item.qty++;
                updateCart();
                saveCart();
            }
        });
    });
    
    // Botones de Decrementar
    document.querySelectorAll('.btn-qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const color = btn.getAttribute('data-color');
            const item = carrito.find(item => item.id === id && item.color === color);
            if (item && item.qty > 1) {
                item.qty--;
                updateCart();
                saveCart();
            }
        });
    });
    
    // Eliminar Item
    document.querySelectorAll('.btn-remove-cart-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const color = btn.getAttribute('data-color');
            carrito = carrito.filter(item => !(item.id === id && item.color === color));
            updateCart();
            saveCart();
            showToast("Producto eliminado del carrito");
        });
    });
}

function saveCart() {
    localStorage.setItem('deines_cart', JSON.stringify(carrito));
}

// --- Control del Sidebar Carrito ---
function openCartSidebar() {
    cartSidebar.classList.add('active');
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// --- Modal de Vista Rápida (Quick View) ---
function openQuickView(id) {
    const prod = PRODUCTOS.find(p => p.id === id);
    if (!prod) return;
    
    currentModalProductId = prod.id;
    currentModalSelectedColor = prod.colors[0];
    
    // Cargar datos
    modalImg.src = prod.image;
    modalImg.alt = prod.title;
    modalCat.textContent = prod.category.toUpperCase();
    modalTitle.textContent = prod.title;
    modalPrice.textContent = `${prod.price.toFixed(2)} €`;
    modalDesc.innerHTML = `${prod.desc}<br><br><small style="color: var(--color-text-muted); display:block; margin-top:8px;">${prod.specs}</small>`;
    modalQtyVal.textContent = "1";
    
    // Renderizar selectores de color
    modalColorsRow.innerHTML = prod.colors.map((c, i) => 
        `<span class="color-dot color-${c} ${i === 0 ? 'active' : ''}" data-color="${c}" title="${c}"></span>`
    ).join('');
    
    // Eventos de variante en el modal
    modalColorsRow.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            modalColorsRow.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            currentModalSelectedColor = dot.getAttribute('data-color');
        });
    });
    
    // Mostrar modal
    quickViewModal.classList.add('active');
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
    quickViewModal.classList.remove('active');
    if (!cartSidebar.classList.contains('active')) {
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// --- Toast Notifications ---
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Auto-eliminar
    setTimeout(() => {
        toast.style.animation = 'none'; // reset
        toast.style.transition = 'opacity 0.5s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// --- Búsqueda y Filtros de Productos ---
function filterProducts(category) {
    const allCards = document.querySelectorAll('.product-card');
    
    allCards.forEach(card => {
        const prodCat = card.getAttribute('data-category');
        const isNew = card.querySelector('.badge-new') !== null;
        const isSale = card.querySelector('.badge-sale') !== null;
        
        let show = false;
        
        if (category === 'todos') {
            show = true;
        } else if (category === 'novedades') {
            show = isNew;
        } else if (category === 'sale') {
            show = isSale;
        } else {
            show = (prodCat === category);
        }
        
        if (show) {
            card.style.display = 'flex';
            card.style.animation = 'slideUp 0.4s forwards ease';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchProducts(query) {
    const allCards = document.querySelectorAll('.product-card');
    const cleanQuery = query.toLowerCase().trim();
    
    allCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        
        if (title.includes(cleanQuery) || category.includes(cleanQuery)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// --- Inicializar Eventos Globales ---
function initEvents() {
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerMain.classList.add('scrolled');
        } else {
            headerMain.classList.remove('scrolled');
        }
    });
    
    // Eventos de apertura/cierre de carrito
    cartTrigger.addEventListener('click', openCartSidebar);
    closeCartBtn.addEventListener('click', closeCartSidebar);
    cartContinueBtn.addEventListener('click', closeCartSidebar);
    
    // Backdrop click cierra todo
    modalBackdrop.addEventListener('click', () => {
        closeCartSidebar();
        closeQuickViewModal();
    });
    
    // Cierre del modal
    closeModalBtn.addEventListener('click', closeQuickViewModal);
    
    // Eventos del sumador en el modal
    modalQtyPlus.addEventListener('click', () => {
        let val = parseInt(modalQtyVal.textContent);
        modalQtyVal.textContent = val + 1;
    });
    
    modalQtyMinus.addEventListener('click', () => {
        let val = parseInt(modalQtyVal.textContent);
        if (val > 1) {
            modalQtyVal.textContent = val - 1;
        }
    });
    
    modalAddCartBtn.addEventListener('click', () => {
        const qty = parseInt(modalQtyVal.textContent);
        addToCart(currentModalProductId, qty, currentModalSelectedColor);
        closeQuickViewModal();
    });
    
    // Toggle de Barra de Búsqueda
    searchTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        activeSearch = !activeSearch;
        if (activeSearch) {
            searchInput.style.width = '180px';
            searchInput.style.opacity = '1';
            searchInput.focus();
        } else {
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
            searchInput.value = '';
            filterProducts('todos');
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });
    
    // Cerrar barra de búsqueda si se hace click fuera
    document.addEventListener('click', (e) => {
        if (activeSearch && !e.target.closest('.search-wrapper')) {
            activeSearch = false;
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
            searchInput.value = '';
            filterProducts('todos');
        }
    });
    
    // Filtros de Cabecera (Desktop)
    navDesktopLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navDesktopLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const cat = link.getAttribute('data-category');
            filterProducts(cat);
            
            // Scroll a productos
            const targetSection = document.getElementById('novedades');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Filtros de pie de página y colecciones circulares
    footerFilterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const filterAttr = link.getAttribute('data-filter') || link.getAttribute('data-category');
            if (filterAttr) {
                e.preventDefault();
                // Sincronizar nav activo
                navDesktopLinks.forEach(l => {
                    if (l.getAttribute('data-category') === filterAttr) {
                        l.classList.add('active');
                    } else {
                        l.classList.remove('active');
                    }
                });
                
                filterProducts(filterAttr);
                
                const targetSection = document.getElementById('novedades');
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Menú Móvil Hamburger Toggle
    const mobileMenuBtn = document.getElementById('hamburger-menu');
    mobileMenuBtn.addEventListener('click', () => {
        showToast("Menú móvil interactivo - Próximamente integrado en plantilla.");
    });
    
    // Simulación de Checkout
    const btnCheckout = document.getElementById('btn-checkout');
    btnCheckout.addEventListener('click', () => {
        let subtotal = carrito.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
        let shipping = subtotal >= 80 ? 0 : 3.95;
        let total = subtotal + shipping;
        
        showPaymentModal(total, () => {
            const numPedido = Math.floor(Math.random() * 900000) + 100000;
            
            // Crear un modal de éxito visual premium
            const checkoutModal = document.createElement('div');
            checkoutModal.style.position = 'fixed';
            checkoutModal.style.top = '50%';
            checkoutModal.style.left = '50%';
            checkoutModal.style.transform = 'translate(-50%, -50%)';
            checkoutModal.style.backgroundColor = 'var(--color-bg-white)';
            checkoutModal.style.padding = '40px';
            checkoutModal.style.borderRadius = '24px';
            checkoutModal.style.boxShadow = 'var(--shadow-modal)';
            checkoutModal.style.zIndex = '2000';
            checkoutModal.style.textAlign = 'center';
            checkoutModal.style.maxWidth = '400px';
            checkoutModal.style.width = '90%';
            checkoutModal.style.animation = 'slideUp 0.4s ease forwards';
            
            checkoutModal.innerHTML = `
                <div style="font-size: 50px; color: var(--color-brand-secondary); margin-bottom: 20px;">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <h2 style="font-family: var(--font-serif); font-size: 26px; margin-bottom: 12px;">¡Gracias por tu compra!</h2>
                <p style="font-size: 14px; color: var(--color-text-muted); margin-bottom: 20px; line-height:1.5;">Tu pedido <strong>#DE-${numPedido}</strong> se ha procesado con éxito y se encuentra en preparación para envío de 24/48h.</p>
                <button id="btn-close-checkout-success" class="campaign-btn" style="width: 100%; border-radius: 20px; padding: 12px;">Aceptar</button>
            `;
            
            document.body.appendChild(checkoutModal);
            closeCartSidebar();
            
            // Oscurecer fondo con máxima prioridad
            modalBackdrop.style.zIndex = '1999';
            modalBackdrop.classList.add('active');
            
            document.getElementById('btn-close-checkout-success').addEventListener('click', () => {
                checkoutModal.remove();
                modalBackdrop.classList.remove('active');
                modalBackdrop.style.zIndex = '';
                document.body.style.overflow = '';
                
                // Vaciar carrito
                carrito = [];
                updateCart();
                saveCart();
            });
        });
    });

    
    // Suscripción Newsletter
    formNewsletter.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = inputNewsletterEmail.value;
        
        // Simular llamada a API
        feedbackNewsletter.innerHTML = "";
        feedbackNewsletter.className = "newsletter-feedback";
        
        setTimeout(() => {
            feedbackNewsletter.textContent = `¡Gracias! Te has suscrito correctamente con ${email}. Recibirás un cupón de 10% de descuento en tu email.`;
            feedbackNewsletter.classList.add('success');
            formNewsletter.reset();
            
            // Ocultar mensaje tras 5 segundos
            setTimeout(() => {
                feedbackNewsletter.style.opacity = '0';
                setTimeout(() => {
                    feedbackNewsletter.textContent = "";
                    feedbackNewsletter.style.opacity = '1';
                }, 500);
            }, 5000);
        }, 800);
    });

    // Acordeón FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Alternar activo para esta pregunta
            question.classList.toggle('active');
            
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.className = 'fa-solid fa-minus';
                icon.style.transform = 'rotate(180deg)';
            } else {
                answer.style.maxHeight = '0';
                icon.className = 'fa-solid fa-plus';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// --- Inicio de la Aplicación ---
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    updateCart();
    initEvents();
    
    // Si estamos en la página del carrito
    if (document.getElementById('cart-page-container')) {
        initCartPage();
    }
});

// --- Lógica de la Página de Carrito Completo (cart.html) ---
let descuentoAplicado = parseFloat(localStorage.getItem('deines_discount')) || 0; // Porcentaje de descuento

function initCartPage() {
    updateCartPage();
    
    // Evento del formulario de cupón
    const couponForm = document.getElementById('coupon-form');
    const couponInput = document.getElementById('coupon-input');
    const couponMessage = document.getElementById('coupon-message');
    
    if (couponForm) {
        if (descuentoAplicado > 0) {
            couponMessage.textContent = "Cupón del 10% aplicado con éxito.";
            couponMessage.className = "coupon-message success";
        }

        couponForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = couponInput.value.toUpperCase().trim();
            
            if (code === 'DEINES10' || code === 'BIENVENIDA') {
                descuentoAplicado = 0.10; // 10%
                localStorage.setItem('deines_discount', descuentoAplicado);
                couponMessage.textContent = "¡Cupón del 10% de descuento aplicado con éxito!";
                couponMessage.className = "coupon-message success";
                showToast("Cupón de descuento aplicado");
                updateCartPage();
            } else {
                couponMessage.textContent = "Código de cupón no válido.";
                couponMessage.className = "coupon-message error";
            }
        });
    }
    
    // Botón de Checkout de la página de carrito
    const btnCartPageCheckout = document.getElementById('btn-cart-page-checkout');
    if (btnCartPageCheckout) {
        btnCartPageCheckout.addEventListener('click', () => {
            let subtotal = carrito.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
            let shipping = subtotal >= 80 ? 0 : 3.95;
            let discount = subtotal * descuentoAplicado;
            let total = subtotal + shipping - discount;
            
            showPaymentModal(total, () => {
                const numPedido = Math.floor(Math.random() * 900000) + 100000;
                
                // Crear el modal de éxito
                const checkoutModal = document.createElement('div');
                checkoutModal.style.position = 'fixed';
                checkoutModal.style.top = '50%';
                checkoutModal.style.left = '50%';
                checkoutModal.style.transform = 'translate(-50%, -50%)';
                checkoutModal.style.backgroundColor = 'var(--color-bg-white)';
                checkoutModal.style.padding = '40px';
                checkoutModal.style.borderRadius = '24px';
                checkoutModal.style.boxShadow = 'var(--shadow-modal)';
                checkoutModal.style.zIndex = '2000';
                checkoutModal.style.textAlign = 'center';
                checkoutModal.style.maxWidth = '400px';
                checkoutModal.style.width = '90%';
                checkoutModal.style.animation = 'slideUp 0.4s ease forwards';
                
                checkoutModal.innerHTML = `
                    <div style="font-size: 50px; color: var(--color-brand-secondary); margin-bottom: 20px;">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <h2 style="font-family: var(--font-serif); font-size: 26px; margin-bottom: 12px;">¡Gracias por tu compra!</h2>
                    <p style="font-size: 14px; color: var(--color-text-muted); margin-bottom: 20px; line-height:1.5;">Tu pedido <strong>#DE-${numPedido}</strong> se ha procesado con éxito y se encuentra en preparación para envío de 24/48h.</p>
                    <button id="btn-close-cart-page-success" class="campaign-btn" style="width: 100%; border-radius: 20px; padding: 12px;">Aceptar</button>
                `;
                
                document.body.appendChild(checkoutModal);
                modalBackdrop.style.zIndex = '1999';
                modalBackdrop.classList.add('active');
                
                document.getElementById('btn-close-cart-page-success').addEventListener('click', () => {
                    checkoutModal.remove();
                    modalBackdrop.classList.remove('active');
                    modalBackdrop.style.zIndex = '';
                    
                    // Vaciar carrito
                    carrito = [];
                    descuentoAplicado = 0;
                    localStorage.removeItem('deines_discount');
                    saveCart();
                    updateCart();
                    
                    // Redirigir a inicio
                    window.location.href = "index.html";
                });
            });
        });
    }

}

function updateCartPage() {
    const filledState = document.getElementById('cart-page-filled-state');
    const emptyState = document.getElementById('cart-page-empty-state');
    const itemsList = document.getElementById('cart-page-items-list');
    
    const subtotalEl = document.getElementById('cart-page-subtotal');
    const shippingEl = document.getElementById('cart-page-shipping');
    const discountRow = document.getElementById('cart-page-discount-row');
    const discountEl = document.getElementById('cart-page-discount');
    const totalEl = document.getElementById('cart-page-total-val');
    
    if (!itemsList) return;
    
    if (carrito.length === 0) {
        filledState.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    filledState.style.display = 'grid';
    emptyState.style.display = 'none';
    
    itemsList.innerHTML = "";
    let subtotal = 0;
    
    carrito.forEach(item => {
        subtotal += item.price * item.qty;
        
        const itemHTML = document.createElement('div');
        itemHTML.className = 'cart-page-item';
        itemHTML.innerHTML = `
            <div class="cart-item-product-info">
                <div class="cart-page-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-desc">
                    <h3>${item.title}</h3>
                    <p>Color: ${item.color.toUpperCase()}</p>
                </div>
            </div>
            <div class="cart-page-price">${item.price.toFixed(2)} €</div>
            <div class="cart-page-qty-selector">
                <div class="qty-selector">
                    <button class="qty-btn btn-page-qty-minus" data-id="${item.id}" data-color="${item.color}"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="qty-btn btn-page-qty-plus" data-id="${item.id}" data-color="${item.color}"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div class="cart-page-total">
                <span>${(item.price * item.qty).toFixed(2)} €</span>
                <button class="btn-cart-page-remove" data-id="${item.id}" data-color="${item.color}" aria-label="Eliminar del carrito">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
        itemsList.appendChild(itemHTML);
    });
    
    // Calcular totales
    const envioGratisMeta = 80;
    let shipping = subtotal >= envioGratisMeta ? 0 : 3.95;
    let discount = subtotal * descuentoAplicado;
    let total = subtotal + shipping - discount;
    
    subtotalEl.textContent = `${subtotal.toFixed(2)} €`;
    shippingEl.textContent = shipping === 0 ? "Gratis" : `${shipping.toFixed(2)} €`;
    
    if (discount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-${discount.toFixed(2)} €`;
    } else {
        discountRow.style.display = 'none';
    }
    
    totalEl.textContent = `${total.toFixed(2)} €`;
    
    // Adjuntar eventos específicos de la página del carrito
    attachCartPageEvents();
}

function attachCartPageEvents() {
    // Botones de Incrementar en la página del carrito
    document.querySelectorAll('.btn-page-qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const color = btn.getAttribute('data-color');
            const item = carrito.find(item => item.id === id && item.color === color);
            if (item) {
                item.qty++;
                saveCart();
                updateCart();
                updateCartPage();
            }
        });
    });
    
    // Botones de Decrementar en la página del carrito
    document.querySelectorAll('.btn-page-qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const color = btn.getAttribute('data-color');
            const item = carrito.find(item => item.id === id && item.color === color);
            if (item && item.qty > 1) {
                item.qty--;
                saveCart();
                updateCart();
                updateCartPage();
            }
        });
    });
    
    // Eliminar Item en la página del carrito
    document.querySelectorAll('.btn-cart-page-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const color = btn.getAttribute('data-color');
            carrito = carrito.filter(item => !(item.id === id && item.color === color));
            saveCart();
            updateCart();
            updateCartPage();
            showToast("Producto eliminado del carrito");
        });
    });
}

// --- MÓDULO DE PAGO SEGURO DINÁMICO (CARD, GOOGLE & APPLE PAY) ---
function showPaymentModal(amount, callbackSuccess) {
    // 1. Inyectar HTML del Modal de Pago si no existe
    let payModal = document.getElementById('payment-modal');
    if (!payModal) {
        payModal = document.createElement('div');
        payModal.id = 'payment-modal';
        payModal.className = 'payment-modal';
        document.body.appendChild(payModal);
    }
    
    // Inyectar HTML de las hojas nativas si no existen
    let applePaySheet = document.getElementById('apple-pay-sheet');
    if (!applePaySheet) {
        applePaySheet = document.createElement('div');
        applePaySheet.id = 'apple-pay-sheet';
        applePaySheet.className = 'native-payment-sheet';
        document.body.appendChild(applePaySheet);
    }
    
    let googlePaySheet = document.getElementById('google-pay-sheet');
    if (!googlePaySheet) {
        googlePaySheet = document.createElement('div');
        googlePaySheet.id = 'google-pay-sheet';
        googlePaySheet.className = 'native-payment-sheet';
        document.body.appendChild(googlePaySheet);
    }
    
    const orderId = Math.floor(Math.random() * 900000) + 100000;
    
    // Rellenar contenido del modal principal
    payModal.innerHTML = `
        <button class="btn-close-payment" id="btn-close-payment" aria-label="Cancelar pago">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="payment-modal-header">
            <i class="fa-solid fa-shield-halved"></i>
            <h3>Pasarela de Pago Seguro</h3>
            <span class="order-id-label">Pedido #DE-${orderId}</span>
        </div>
        <div class="payment-amount-banner">
            <span>Total a pagar (IVA incl.):</span>
            <strong>${amount.toFixed(2)} €</strong>
        </div>
        
        <!-- Express Checkout -->
        <div class="express-checkout-section">
            <span class="payment-label">Express Checkout</span>
            <div class="express-buttons">
                <button class="btn-express btn-apple-pay" id="btn-apple-pay-btn">
                    <i class="fa-brands fa-apple"></i> Pay
                </button>
                <button class="btn-express btn-google-pay" id="btn-google-pay-btn">
                    <i class="fa-brands fa-google-pay" style="font-size:38px;"></i>
                </button>
            </div>
        </div>
        
        <div class="payment-divider"><span>o pagar con tarjeta de crédito</span></div>
        
        <!-- Card Form -->
        <form class="card-payment-form" id="card-payment-form">
            <div class="form-group">
                <label for="card-name">Titular de la tarjeta</label>
                <input type="text" id="card-name" placeholder="María García" required autocomplete="cc-name">
            </div>
            <div class="form-group">
                <label for="card-number">Número de tarjeta</label>
                <div style="position:relative; display:flex; align-items:center;">
                    <input type="text" id="card-number" placeholder="4000 1234 5678 9010" maxlength="19" required style="width:100%; padding-right:40px;" autocomplete="cc-number">
                    <i class="fa-solid fa-credit-card" id="card-brand-icon" style="position:absolute; right:12px; color:var(--color-text-muted); font-size:18px;"></i>
                </div>
            </div>
            <div class="form-row-double">
                <div class="form-group">
                    <label for="card-expiry">Expiración</label>
                    <input type="text" id="card-expiry" placeholder="MM/YY" maxlength="5" required autocomplete="cc-exp">
                </div>
                <div class="form-group">
                    <label for="card-cvv">CVV</label>
                    <input type="text" id="card-cvv" placeholder="123" maxlength="4" required autocomplete="cc-csc">
                </div>
            </div>
            <button type="submit" class="btn-pay-submit">
                <i class="fa-solid fa-lock"></i> Pagar seguro ${amount.toFixed(2)} €
            </button>
        </form>
    `;
    
    // Rellenar contenido de la hoja de Apple Pay
    applePaySheet.innerHTML = `
        <div class="sheet-header">
            <h4><i class="fa-brands fa-apple" style="font-size:20px;"></i> Apple Pay</h4>
            <button class="btn-close-payment" id="btn-close-apple-sheet"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="sheet-info-row">
            <span class="label">Comercio</span>
            <span class="val">DEINES COMPLEMENTOS SL</span>
        </div>
        <div class="sheet-info-row">
            <span class="label">Tarjeta</span>
            <span class="val">Visa personal (•••• 4920)</span>
        </div>
        <div class="sheet-info-row">
            <span class="label">Envío</span>
            <span class="val">Augusto Figueroa 32, Madrid (24/48h)</span>
        </div>
        <div class="sheet-info-row" style="border-top:1px solid #e0e0e0; padding-top:10px; margin-top:10px;">
            <span class="label" style="font-weight:700;">TOTAL</span>
            <span class="val" style="font-size:18px; font-weight:800;">${amount.toFixed(2)} €</span>
        </div>
        <button class="sheet-confirm-btn" id="btn-confirm-apple">
            <i class="fa-solid fa-fingerprint"></i> Confirmar con Touch ID
        </button>
    `;
    
    // Rellenar contenido de la hoja de Google Pay
    googlePaySheet.innerHTML = `
        <div class="sheet-header">
            <h4><i class="fa-brands fa-google-pay" style="font-size:36px; vertical-align:middle;"></i></h4>
            <button class="btn-close-payment" id="btn-close-google-sheet"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="sheet-info-row">
            <span class="label">Cuenta de Google</span>
            <span class="val">usuario.deines@gmail.com</span>
        </div>
        <div class="sheet-info-row">
            <span class="label">Método de pago</span>
            <span class="val">Mastercard •••• 1024</span>
        </div>
        <div class="sheet-info-row" style="border-top:1px solid #e0e0e0; padding-top:10px; margin-top:10px;">
            <span class="label" style="font-weight:700;">Total a pagar</span>
            <span class="val" style="font-size:18px; font-weight:800;">${amount.toFixed(2)} €</span>
        </div>
        <button class="sheet-confirm-btn" id="btn-confirm-google" style="background-color:#1a73e8;">
            <i class="fa-solid fa-shield-halved"></i> Pagar con Google Pay
        </button>
    `;
    
    // Abrir Modal
    payModal.classList.add('active');
    modalBackdrop.style.zIndex = '2040';
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // --- BINDING DE COMPORTAMIENTO ---
    
    // Cierre
    const closeBtn = document.getElementById('btn-close-payment');
    closeBtn.addEventListener('click', closeAllPaymentModals);
    
    // Cancelar en las hojas
    document.getElementById('btn-close-apple-sheet').addEventListener('click', () => {
        applePaySheet.classList.remove('active');
    });
    document.getElementById('btn-close-google-sheet').addEventListener('click', () => {
        googlePaySheet.classList.remove('active');
    });
    
    // Formatear Número de Tarjeta e Icono de Marca
    const inputCardNumber = document.getElementById('card-number');
    const brandIcon = document.getElementById('card-brand-icon');
    
    inputCardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        // Limitar a 16 dígitos
        value = value.substring(0, 16);
        
        // Detectar marca
        if (value.startsWith('4')) {
            brandIcon.className = 'fa-brands fa-cc-visa';
            brandIcon.style.color = '#1A1F71'; // Color Visa
        } else if (value.startsWith('5')) {
            brandIcon.className = 'fa-brands fa-cc-mastercard';
            brandIcon.style.color = '#EB001B'; // Color Mastercard
        } else {
            brandIcon.className = 'fa-solid fa-credit-card';
            brandIcon.style.color = 'var(--color-text-muted)';
        }
        
        // Formatear con espacios cada 4 dígitos
        let formatted = value.match(/.{1,4}/g);
        e.target.value = formatted ? formatted.join(' ') : '';
    });
    
    // Formatear Fecha de Caducidad (MM/YY)
    const inputExpiry = document.getElementById('card-expiry');
    inputExpiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.substring(0, 4);
        
        if (value.length > 2) {
            e.target.value = value.substring(0, 2) + '/' + value.substring(2);
        } else {
            e.target.value = value;
        }
    });
    
    // Formatear CVV
    const inputCvv = document.getElementById('card-cvv');
    inputCvv.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
    });
    
    // Enviar Formulario de Tarjeta
    const cardForm = document.getElementById('card-payment-form');
    cardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Mostrar animación de carga en el modal
        payModal.innerHTML = `
            <div class="payment-loading-state">
                <div class="spinner"></div>
                <div class="payment-loading-text" id="loading-step-text">Procesando pago seguro...</div>
            </div>
        `;
        
        const loadingText = document.getElementById('loading-step-text');
        
        // Simular fases de pasarela de pago
        setTimeout(() => {
            if (loadingText) loadingText.textContent = "Verificando saldo y tarjeta...";
            setTimeout(() => {
                if (loadingText) loadingText.textContent = "Autorizando transacción bancaria...";
                setTimeout(() => {
                    closeAllPaymentModals();
                    callbackSuccess();
                }, 1200);
            }, 1200);
        }, 1000);
    });
    
    // Botón Express Apple Pay
    document.getElementById('btn-apple-pay-btn').addEventListener('click', () => {
        applePaySheet.classList.add('active');
    });
    
    document.getElementById('btn-confirm-apple').addEventListener('click', () => {
        const btnConfirm = document.getElementById('btn-confirm-apple');
        btnConfirm.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Procesando Touch ID...`;
        btnConfirm.style.backgroundColor = '#222';
        
        setTimeout(() => {
            btnConfirm.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#2F855A;"></i> Pago Autorizado`;
            btnConfirm.style.backgroundColor = '#fff';
            btnConfirm.style.color = '#2F855A';
            btnConfirm.style.border = '1px solid #2F855A';
            
            setTimeout(() => {
                closeAllPaymentModals();
                callbackSuccess();
            }, 1000);
        }, 1500);
    });
    
    // Botón Express Google Pay
    document.getElementById('btn-google-pay-btn').addEventListener('click', () => {
        googlePaySheet.classList.add('active');
    });
    
    document.getElementById('btn-confirm-google').addEventListener('click', () => {
        const btnConfirm = document.getElementById('btn-confirm-google');
        btnConfirm.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Conectando...`;
        
        setTimeout(() => {
            btnConfirm.innerHTML = `<i class="fa-solid fa-circle-check"></i> Pago Autorizado`;
            btnConfirm.style.backgroundColor = '#2F855A';
            
            setTimeout(() => {
                closeAllPaymentModals();
                callbackSuccess();
            }, 1000);
        }, 1500);
    });
    
    function closeAllPaymentModals() {
        payModal.classList.remove('active');
        applePaySheet.classList.remove('active');
        googlePaySheet.classList.remove('active');
        modalBackdrop.classList.remove('active');
        modalBackdrop.style.zIndex = '';
        document.body.style.overflow = '';
    }
}


