console.log("FX website listo");

// ==========================================================
// ELEMENTOS DEL HTML
// Estos const conectan JavaScript con elementos de index.html
// Si agregas un nuevo ID en HTML y necesitas usarlo en JavaScript,
// normalmente su const se agrega en esta sección.
// ==========================================================

const languageButton = document.getElementById("languageButton");

const heroTitle = document.getElementById("heroTitle");
const heroSmall = document.getElementById("heroSmall");
const heroDescription = document.getElementById("heroDescription");
const heroProductsButton = document.getElementById("heroProductsButton");
const heroAdvertisingButton = document.getElementById("heroAdvertisingButton");
const productsSmall = document.getElementById("productsSmall");
const productsTitle = document.getElementById("productsTitle");
const productsDescription = document.getElementById("productsDescription");
const productsOrderNote = document.getElementById("productsOrderNote");
const advertisingSmall = document.getElementById("advertisingSmall");
const advertisingTitle = document.getElementById("advertisingTitle");
const advertisingDescription = document.getElementById("advertisingDescription");
const adLabel = document.getElementById("adLabel");
const adContactButton = document.getElementById("adContactButton");
const adVideo = document.getElementById("adVideo");
const adNext = document.getElementById("adNext");
const adPrev = document.getElementById("adPrev");
const adBusinessName = document.getElementById("adBusinessName");
const productsFullList = document.getElementById("productsFullList");
const footerCopyright = document.getElementById("footerCopyright");


// ==========================================================
// PARA AGREGAR UN ANUNCIO NUEVO:
// 1. GUARDA EL VIDEO .MP4 DENTRO DE LA CARPETA "videos"
// 2. COPIA UNO DE LOS BLOQUES DE ANUNCIO DE ABAJO
// 3. PÉGALO ANTES DEL ]; FINAL
// 4. CAMBIA EL NOMBRE DEL ARCHIVO EN "video"
// 5. CAMBIA EL NOMBRE DEL NEGOCIO EN "name"
// 6. ASEGÚRATE DE PONER UNA COMA ENTRE CADA ANUNCIO
// ==========================================================


const ads = [
    {
        video: "videos/anuncio-supermercado.mp4",
        name: "Manly Automotive Group"
    },
    {
        video: "videos/commercial2.mp4",
        name: "Manly Honda"
    }

    // ===== AGREGA LOS ANUNCIOS NUEVOS ARRIBA DE ESTA LÍNEA =====
];

let currentAd = 0;

// ==========================================================
// SISTEMA AUTOMÁTICO DE ANUNCIOS
// Cambia el video y el nombre del negocio.
// También controla las flechas y el cambio al terminar un video.
// ==========================================================

function showAd(index) {
    currentAd = index;
    adVideo.src = ads[currentAd].video;
adBusinessName.textContent = ads[currentAd].name;
    adVideo.load();
    adVideo.play();
}

adNext.addEventListener("click", function () {
    let nextAd = currentAd + 1;

    if (nextAd >= ads.length) {
        nextAd = 0;
    }

    showAd(nextAd);
});

adPrev.addEventListener("click", function () {
    let previousAd = currentAd - 1;

    if (previousAd < 0) {
        previousAd = ads.length - 1;
    }

    showAd(previousAd);
});

// ==========================================================
// SIGUIENTE ANUNCIO AUTOMÁTICO
// Cuando termina un video, pasa al siguiente anuncio.
// Al llegar al último, vuelve automáticamente al primero.
// ==========================================================

adVideo.addEventListener("ended", function () {
    let nextAd = currentAd + 1;

    if (nextAd >= ads.length) {
        nextAd = 0;
    }

    showAd(nextAd);
});

const tvSmall = document.getElementById("tvSmall");
const tvTitle = document.getElementById("tvTitle");
const tvDescription = document.getElementById("tvDescription");
const tvService1 = document.getElementById("tvService1");
const tvService2 = document.getElementById("tvService2");
const tvService3 = document.getElementById("tvService3");
const tvButton = document.getElementById("tvButton");
const aboutSmall = document.getElementById("aboutSmall");
const aboutTitle = document.getElementById("aboutTitle");
const aboutDescription = document.getElementById("aboutDescription");
const contactSmall = document.getElementById("contactSmall");
const contactTitle = document.getElementById("contactTitle");
const contactDescription = document.getElementById("contactDescription");
const navHome = document.getElementById("navHome");
const navProducts = document.getElementById("navProducts");
const navAdvertising = document.getElementById("navAdvertising");
const navMenus = document.getElementById("navMenus");
const navAbout = document.getElementById("navAbout");
const navContact = document.getElementById("navContact");
const mobileMenuButton = document.getElementById("mobileMenuButton");
const navLinks = document.querySelector(".nav-links");
const productGrid = document.getElementById("productGrid");

// ========================================
// LISTA DE PRODUCTOS
// Aquí podrás agregar productos nuevos
// ========================================

// ==========================================================
// PARA AGREGAR UN PRODUCTO NUEVO:
// 1. COPIA UNO DE LOS BLOQUES DE PRODUCTO DE ABAJO
// 2. PÉGALO ANTES DEL ]; FINAL
// 3. CAMBIA FOTO, NOMBRE, LABEL, DESCRIPCIONES Y PRESENTACIÓN
// 4. ASEGÚRATE DE PONER UNA COMA ENTRE CADA PRODUCTO
// ==========================================================

const products = [
        // ===== PRODUCTO 1 =====
    {
        // FOTO DEL PRODUCTO
        image: "images/nopales-picados.png",

        // NOMBRE DEL PRODUCTO
        name: "Nopales Picados",

        // TEXTO PEQUEÑO ARRIBA DEL NOMBRE
        label: "Pickled Cactus",

        // DESCRIPCIÓN EN ESPAÑOL
        descriptionEs: "Nopal fresco, limpio y picado, listo para preparar.",

        // DESCRIPCIÓN EN INGLÉS
        descriptionEn: "Fresh, cleaned and chopped nopal, ready to prepare.",

        // PRESENTACIÓN EN ESPAÑOL
        packagingEs: "Bolsa aprox. 12 oz • Caja de 32 bolsas",

        // PRESENTACIÓN EN INGLÉS
        packagingEn: "Approx. 12 oz bag • Case of 32 bags"
    },
    // ===== PRODUCTO 2 =====
    {
        // FOTO DEL PRODUCTO
        image: "images/nopales-pelados.png",

        // NOMBRE DEL PRODUCTO
        name: "Nopales Pelados",

        // TEXTO PEQUEÑO ARRIBA DEL NOMBRE
        label: "Peeled Cactus",

        // DESCRIPCIÓN EN ESPAÑOL
        descriptionEs: "Nopal fresco, limpio y pelado, listo para preparar.",

        // DESCRIPCIÓN EN INGLÉS
        descriptionEn: "Fresh, cleaned and peeled nopal, ready to prepare.",

        // PRESENTACIÓN EN ESPAÑOL
        packagingEs: "Por libra • Caja aprox. 35 lb",

        // PRESENTACIÓN EN INGLÉS
        packagingEn: "Sold by the pound • Approx. 35 lb case"
    },
        // ===== PRODUCTO 3 =====
    {
        // FOTO DEL PRODUCTO
        image: "images/tomatillo-milpero-pelado.png",

        // NOMBRE DEL PRODUCTO
        name: "Tomatillo Milpero Pelado",

        // TEXTO PEQUEÑO ARRIBA DEL NOMBRE
        label: "PEELED TOMATILLO MILPERO",

        // DESCRIPCIÓN EN ESPAÑOL
        descriptionEs: "Tomatillo milpero fresco y pelado, listo para preparar.",

        // DESCRIPCIÓN EN INGLÉS
        descriptionEn: "Fresh, peeled tomatillo milpero, ready to prepare.",

        // PRESENTACIÓN EN ESPAÑOL
        packagingEs: "Embolsado por libra • Caja aprox. 20 lb",

        // PRESENTACIÓN EN INGLÉS
        packagingEn: "Bagged by the pound • Approx. 20 lb case"
    }

// ===== AGREGA LOS PRODUCTOS NUEVOS ARRIBA DE ESTA LÍNEA =====


];

let currentLanguage = "es";

// ==========================================================
// SISTEMA AUTOMÁTICO DE PRODUCTOS
// Crea las tarjetas usando la lista "products".
// También muestra descripción y presentación en el idioma seleccionado.
// NO necesitas crear las tarjetas manualmente en index.html.
// ==========================================================

function renderProducts() {
    productGrid.innerHTML = "";
    products.forEach((product) => {

        const productCard = document.createElement("div");
productCard.classList.add("product-card");

productCard.innerHTML = `
    <div class="product-image">
    <img src="${product.image}" alt="${product.name}">
</div>
<div class="product-info">
    <p>${product.label}</p>
    <h3>${product.name}</h3>
    <p class="product-description">${currentLanguage === "es" ? product.descriptionEs : product.descriptionEn}</p>
<p class="product-packaging">${currentLanguage === "es" ? product.packagingEs : product.packagingEn}</p>
<div class="product-extra"></div>

</div>

`;
productGrid.appendChild(productCard);

});

}





renderProducts();

// ==========================================================
// CAMBIO DE IDIOMA — ESPAÑOL / ENGLISH
// Aquí se cambia el texto de la página según el idioma.
// Dentro de "en" van los textos en INGLÉS.
// Dentro de "es" van los textos en ESPAÑOL.
// ==========================================================


languageButton.addEventListener("click", function () {

    if (currentLanguage === "es") {

        // ==================== TEXTOS EN INGLÉS ====================

        heroTitle.innerHTML = 'Freshness you can <span>feel.</span>';
        heroSmall.textContent = "FRESH PRODUCE • QUALITY • SERVICE";
        heroDescription.textContent = "Fresh products selected for homes, stores, restaurants, and supermarkets.";
        heroProductsButton.textContent = "View products →";
        heroAdvertisingButton.textContent = "Advertise here";
        productsSmall.textContent = "FRESH PRODUCTS";
        productsTitle.innerHTML = 'Quality you can <span>see.</span>';
        productsDescription.textContent = "Explore some of our fresh products. Check availability and packaging options.";
        productsOrderNote.textContent = "✓ Order only the quantity you need.";
        productsFullList.textContent = "Looking for more options? Request our complete list of products and available packaging by email.";
        advertisingSmall.textContent = "LOCAL ADVERTISING";
        advertisingTitle.innerHTML = 'Your business can also <span>be here.</span>';
        advertisingDescription.textContent = "Promote your business, products, and special offers directly to our customers.";
        adLabel.textContent = "FEATURED BUSINESS";
        adContactButton.innerHTML = "Advertise here &rarr;";
        tvSmall.textContent = "DIGITAL MENUS FOR BUSINESSES";
        tvTitle.innerHTML = 'Your menu deserves to <span>look amazing.</span>';
        tvDescription.textContent = "We design digital TV menus for restaurants, taquerias, supermarkets, butcher shops, and other businesses.";
        tvService1.textContent = "Digital menus";
        tvService2.textContent = "Promotions and special offers";
        tvService3.textContent = "Combos and prices";
        tvButton.textContent = "I want a menu for my business →";
        aboutSmall.textContent = "ABOUT US";
        aboutTitle.innerHTML = 'Freshness, quality <span>and trust.</span>';
        aboutDescription.textContent = "We specialize in fresh products prepared for stores, restaurants, and supermarkets. Our commitment is to provide freshness, quality, and practical packaging options that make our customers' work easier.";
        contactSmall.textContent = "LET'S TALK";
        contactTitle.innerHTML = 'Ready to <span>work together?</span>';
        contactDescription.textContent = "Contact us for fresh products, advertising for your business, or digital TV menu design.";
        footerCopyright.textContent = "© 2026 Nopalitos de México. All rights reserved.";
        languageButton.textContent = "Español";
        currentLanguage = "en";
        document.documentElement.lang = "en";
        document.title = "FX | Fresh Products";
        updateMenuLanguage("en");

    } else {

        // ==================== TEXTOS EN ESPAÑOL ====================

        heroTitle.innerHTML = 'Frescura que <span>se siente.</span>';
        heroSmall.textContent = "PRODUCTOS FRESCOS • CALIDAD • SERVICIO";
        heroDescription.textContent = "Productos frescos seleccionados para hogares, tiendas, restaurantes y supermercados.";
        heroProductsButton.textContent = "Ver productos →";
        heroAdvertisingButton.textContent = "Anúnciate aquí";
        productsSmall.textContent = "PRODUCTOS FRESCOS";
        productsTitle.innerHTML = 'Calidad que puedes <span>ver.</span>';
        productsDescription.textContent = "Explora algunos de nuestros productos frescos. Consulta disponibilidad y presentaciones.";
        productsOrderNote.textContent = "✓ Ordena solo la cantidad que necesites.";  
        productsFullList.textContent = "¿Buscas más opciones? Solicita nuestra lista completa de productos y presentaciones por correo electrónico.";  
        advertisingSmall.textContent = "PUBLICIDAD LOCAL";
        advertisingTitle.innerHTML = 'Tu negocio también puede <span>estar aquí.</span>';
        advertisingDescription.textContent = "Promociona tu negocio, productos y ofertas directamente con nuestros clientes.";
        adLabel.textContent = "NEGOCIO DESTACADO";
        adContactButton.textContent = "Anúnciate aquí →";
        tvSmall.textContent = "MENÚS DIGITALES PARA NEGOCIOS";
        tvTitle.innerHTML = 'Tu menú merece <span>verse increíble.</span>';
        tvDescription.textContent = "Diseñamos menús digitales para TVs ideales para restaurantes, taquerías, supermercados, carnicerías y otros negocios.";
        tvService1.textContent = "Menús digitales";
        tvService2.textContent = "Promociones y ofertas";
        tvService3.textContent = "Combos y precios";
        tvButton.textContent = "Quiero un menú para mi negocio →";
        aboutSmall.textContent = "SOBRE NOSOTROS";
        aboutTitle.innerHTML = 'Frescura, calidad <span>y confianza.</span>';
        aboutDescription.textContent = "Nos especializamos en productos frescos preparados para tiendas, restaurantes y supermercados. Nuestro compromiso es ofrecer frescura, calidad y presentaciones prácticas que faciliten el trabajo de nuestros clientes.";
        contactSmall.textContent = "HABLEMOS";
        contactTitle.innerHTML = '¿Listo para <span>trabajar juntos?</span>';
        contactDescription.textContent = "Contáctanos para productos frescos, publicidad para tu negocio o diseño de menús digitales para TV.";
        footerCopyright.textContent = "© 2026 Nopalitos de México. Todos los derechos reservados.";
        languageButton.textContent = "English";
        currentLanguage = "es";
        document.documentElement.lang = "es";
        document.title = "FX | Productos Frescos";
        updateMenuLanguage("es");

    }
renderProducts();

});


    function updateMenuLanguage(language) {

        if (language === "en") {
            navHome.textContent = "Home";
            navProducts.textContent = "Products";
            navAdvertising.textContent = "Advertising";
            navMenus.textContent = "TV Menus";
            navAbout.textContent = "About Us";
            navContact.textContent = "Contact";
        } else {
            navHome.textContent = "Inicio";
            navProducts.textContent = "Productos";
            navAdvertising.textContent = "Publicidad";
            navMenus.textContent = "Menús TV";
            navAbout.textContent = "Nosotros";
            navContact.textContent = "Contacto";
        }
    
    }

// ==========================================================
// MENÚ PARA CELULARES
// Controla el botón ☰ y abre/cierra el menú en pantallas pequeñas.
// ==========================================================

    mobileMenuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    
        if (navLinks.classList.contains("active")) {
            mobileMenuButton.textContent = "✕";
        } else {
            mobileMenuButton.textContent = "☰";
        }
         
});

// ==========================================================
// REPRODUCCIÓN AUTOMÁTICA DE PUBLICIDAD
// Reproduce el anuncio cuando aparece en pantalla.
// Lo pausa cuando el visitante sale de esta sección.
// ==========================================================

const adObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            adVideo.play();
        } else {
            adVideo.pause();
        }
    });
}, {
    threshold: 0.5
});

adObserver.observe(adVideo);














