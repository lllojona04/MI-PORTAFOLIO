const $ = s => document.querySelector(s),
    isM = window.innerWidth <= 768;

let p = null, 
    i = 0,
    grid = $("#galeria-grid"),
    bus = $("#buscador"),
    cats = document.querySelectorAll("#menu-categorias li"),
    modal = $("#m"), // Ajustado al ID de tu proyecto.html
    imgEl = $("#i"); // Ajustado al ID de tu proyecto.html

// ================= PROYECTOS =================
function mostrar(f = "todos", b = "") {
    if (!grid) return; // Evita errores si no estamos en index.html
    grid.innerHTML = "";
    
    let d = proyectos.filter(x =>
        (f == "todos" || x.categoria == f) &&
        x.titulo.toLowerCase().includes(b.toLowerCase())
    );

    if (!d.length) {
        grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#999;padding:40px'>No hay resultados</p>";
        return;
    }

    d.forEach((x, idx) => {
        let c = document.createElement("div");
        c.className = "card";
        c.style.opacity = 0;
        c.style.transform = "translateY(15px)";

        // Animación de entrada más fluida
        requestAnimationFrame(() => {
            setTimeout(() => {
                c.style.transition = "opacity .4s ease, transform .4s ease";
                c.style.opacity = 1;
                c.style.transform = "translateY(0)";
            }, idx * (isM ? 40 : 60));
        });

        c.innerHTML = `
            <div class="img-container"><img src="${x.portada}" loading="lazy" alt="${x.titulo}"></div>
            <div class="card-info"><h3>${x.titulo}</h3><span>${x.fecha}</span></div>
        `;

        c.onclick = () => location.href = `proyecto.html?id=${x.id}`;
        grid.appendChild(c);
    });
}

// ================= CARRUSEL ULTRA-RÁPIDO =================

// Precarga la siguiente imagen en segundo plano
function preloadNext(index) {
    const nextIdx = (index + 1) % p.galeria.length;
    const nextImg = new Image();
    nextImg.src = p.galeria[nextIdx];
}

function nav(n) {
    i = (i + n + p.galeria.length) % p.galeria.length;
    show();
}

function show() {
    if (!imgEl) return;
    
    // Eliminamos el delay del setTimeout para que sea instantáneo
    imgEl.style.opacity = 0.6; // Efecto visual sutil de cambio
    imgEl.src = p.galeria[i];
    
    imgEl.onload = () => {
        imgEl.style.opacity = 1;
        preloadNext(i); // Cuando carga la actual, empezamos a bajar la siguiente
    };
}

// ================= UI & EVENTOS =================
if (bus) {
    bus.oninput = e => {
        let c = $('#menu-categorias .active')?.dataset.categoria || "todos";
        mostrar(c, e.target.value);
    };
}

cats.forEach(c => {
    c.onclick = () => {
        cats.forEach(x => x.classList.remove("active"));
        c.classList.add("active");
        mostrar(c.dataset.categoria, bus.value);
    };
});

// Teclado
document.onkeydown = e => {
    if (modal && modal.style.display == "flex") {
        if (e.key == "Escape") closeGal(); // Usando el nombre de función de tu HTML
        if (e.key == "ArrowRight") nav(1);
        if (e.key == "ArrowLeft") nav(-1);
    }
};

// Touch/Swipe optimizado
let sx = 0;
if (modal) {
    modal.addEventListener("touchstart", e => sx = e.touches[0].clientX, {passive: true});
    modal.addEventListener("touchend", e => {
        let dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 50) nav(dx < 0 ? 1 : -1);
    }, {passive: true});
}

// Inicialización
if (grid) mostrar();
