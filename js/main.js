/* =========================================================================
   VELVET — Nail Studio
   Lógica del sitio: datos, servicios, calculadora, galería, navegación.
   ========================================================================= */

"use strict";

/* ---------- Utilidades ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const formato = new Intl.NumberFormat("es-AR");
const precio = (n) => "$" + formato.format(n);

async function cargarJSON(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`No se pudo cargar ${url}`);
  return r.json();
}

/* ---------- Estado global ---------- */
let precios = null;
let config = null;
let galeria = null;

const estado = {
  tecnica: null,       // { id, nombre, precio }
  decoraciones: {},    // { id: cantidadDeUñas }
  retiro: null         // { id, nombre, precio } | null
};

/* =========================================================================
   Inicialización
   ========================================================================= */
document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
  configurarNavegacion();
  configurarAcordeon();
  configurarAnio();
  configurarVolverArriba();

  try {
    [precios, config, galeria] = await Promise.all([
      cargarJSON("data/precios.json"),
      cargarJSON("data/config.json"),
      cargarJSON("data/galeria.json")
    ]);
  } catch (err) {
    console.error("Error al cargar los datos:", err);
    mostrarErrorDeDatos();
    return;
  }

  aplicarConfig();
  renderServicios();
  renderCalculadora();
  renderGaleria();
  iniciarReveal();
}

function mostrarErrorDeDatos() {
  const msg = "No se pudieron cargar los datos. Abrí el sitio desde un servidor (ver README.md).";
  const sv = $("#servicios-grid");
  const gc = $("#calc-tecnicas");
  if (sv) sv.innerHTML = `<p class="nota-precios">${msg}</p>`;
  if (gc) gc.innerHTML = `<p class="nota-precios">${msg}</p>`;
}

/* =========================================================================
   Configuración (marca, contacto)
   ========================================================================= */
function aplicarConfig() {
  document.title = `${config.marca} | ${config.descriptor}`;

  $("#hero-propuesta").textContent = config.propuesta;

  const wa = linkWhatsApp(config.mensajeReserva);
  const ig = config.instagram || "#";

  $("#nav-reservar").href = wa;
  $("#whatsapp-flotante").href = wa;
  $("#contacto-whatsapp").href = wa;
  $("#contacto-instagram").href = ig;
  $("#contacto-instagram").textContent = config.instagramUsuario;
  $("#contacto-horarios").textContent = config.horarios;
  $("#footer-instagram").href = ig;
  $("#footer-whatsapp").href = wa;
}

function linkWhatsApp(mensaje) {
  const num = (config.whatsapp || "").replace(/\D/g, "");
  const base = `https://wa.me/${num}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

/* =========================================================================
   Servicios
   ========================================================================= */
function renderServicios() {
  const grid = $("#servicios-grid");
  const iconos = { semipermanente: "✨", capping: "💅", softgel: "🌸", softgelxxl: "💎" };

  grid.innerHTML = precios.tecnicas.map((t) => `
    <article class="servicio">
      <div class="servicio__icono">${iconos[t.id] || "✦"}</div>
      <h3>${t.nombre}</h3>
      <p>${t.descripcion}</p>
      <div class="servicio__precio">${precio(t.precio)}</div>
    </article>
  `).join("");
}

/* =========================================================================
   Calculadora
   ========================================================================= */
function renderCalculadora() {
  renderTecnicas();
  renderDecoraciones();
  renderRetiros();
  actualizarResumen();
}

function renderTecnicas() {
  const cont = $("#calc-tecnicas");
  cont.innerHTML = precios.tecnicas.map((t) => `
    <label class="tecnica" data-id="${t.id}">
      <input type="radio" name="tecnica" value="${t.id}" />
      <span class="tecnica__nombre">${t.nombre}</span>
      <span class="tecnica__precio">${precio(t.precio)}</span>
    </label>
  `).join("");

  cont.addEventListener("click", (e) => {
    const label = e.target.closest(".tecnica");
    if (!label) return;
    const t = precios.tecnicas.find((x) => x.id === label.dataset.id);
    estado.tecnica = t;
    $$(".tecnica", cont).forEach((l) => l.classList.toggle("tecnica--activa", l === label));
    actualizarResumen();
  });
}

function renderDecoraciones() {
  const cont = $("#calc-decoraciones");
  cont.innerHTML = precios.decoraciones.map((d) => `
    <div class="decoracion" data-id="${d.id}">
      <div class="decoracion__info">
        <span class="decoracion__nombre">${d.nombre}</span>
        <span class="decoracion__precio">${precio(d.precioPorUna)} por uña</span>
      </div>
      <div class="stepper">
        <button type="button" class="stepper__menos" aria-label="Quitar" disabled>−</button>
        <span class="stepper__valor">0</span>
        <button type="button" class="stepper__mas" aria-label="Agregar">+</button>
      </div>
      <span class="decoracion__subtotal"></span>
    </div>
  `).join("");

  cont.addEventListener("click", (e) => {
    const fila = e.target.closest(".decoracion");
    if (!fila) return;
    const id = fila.dataset.id;
    const max = precios.maxUnas || 10;
    const actual = estado.decoraciones[id] || 0;

    if (e.target.closest(".stepper__mas")) {
      estado.decoraciones[id] = Math.min(actual + 1, max);
    } else if (e.target.closest(".stepper__menos")) {
      estado.decoraciones[id] = Math.max(actual - 1, 0);
    } else {
      return;
    }

    const valor = estado.decoraciones[id];
    $(".stepper__valor", fila).textContent = valor;
    $(".stepper__menos", fila).disabled = valor === 0;
    $(".stepper__mas", fila).disabled = valor === max;

    const dec = precios.decoraciones.find((x) => x.id === id);
    const sub = $(".decoracion__subtotal", fila);
    sub.textContent = valor > 0 ? precio(dec.precioPorUna * valor) : "";
    sub.classList.toggle("visible", valor > 0);

    actualizarResumen();
  });
}

function renderRetiros() {
  const cont = $("#calc-retiros");

  const ninguno = `
    <label class="retiro retiro--activa" data-id="">
      <input type="radio" name="retiro" value="" checked />
      <div>No necesito</div>
    </label>`;
  const opciones = precios.retiros.map((r) => `
    <label class="retiro" data-id="${r.id}">
      <input type="radio" name="retiro" value="${r.id}" />
      <div>${r.nombre}</div>
      <div class="retiro__precio">${precio(r.precio)}</div>
    </label>`).join("");

  cont.innerHTML = ninguno + opciones;

  cont.addEventListener("click", (e) => {
    const label = e.target.closest(".retiro");
    if (!label) return;
    const id = label.dataset.id;
    estado.retiro = id ? precios.retiros.find((r) => r.id === id) : null;
    $$(".retiro", cont).forEach((l) => l.classList.toggle("retiro--activa", l === label));
    actualizarResumen();
  });
}

function calcularTotal() {
  const lineas = [];

  if (estado.tecnica) {
    lineas.push({ concepto: estado.tecnica.nombre, monto: estado.tecnica.precio });
  }

  for (const [id, cantidad] of Object.entries(estado.decoraciones)) {
    if (cantidad > 0) {
      const d = precios.decoraciones.find((x) => x.id === id);
      lineas.push({ concepto: `${d.nombre} × ${cantidad} uña${cantidad > 1 ? "s" : ""}`, monto: d.precioPorUna * cantidad });
    }
  }

  if (estado.retiro) {
    lineas.push({ concepto: estado.retiro.nombre, monto: estado.retiro.precio });
  }

  const total = lineas.reduce((s, l) => s + l.monto, 0);
  return { lineas, total };
}

function actualizarResumen() {
  const cont = $("#resumen-lineas");
  const totalEl = $("#resumen-total");
  const btn = $("#btn-whatsapp");

  if (!estado.tecnica) {
    cont.innerHTML = `<p class="resumen__vacio">Elegí una técnica para empezar a cotizar.</p>`;
    totalEl.textContent = "$0";
    btn.classList.add("deshabilitado");
    btn.removeAttribute("href");
    return;
  }

  const { lineas, total } = calcularTotal();

  cont.innerHTML = lineas.map((l) => `
    <div class="resumen__linea">
      <span class="concepto">${l.concepto}</span>
      <span class="monto">${precio(l.monto)}</span>
    </div>
  `).join("");

  totalEl.textContent = precio(total);
  btn.classList.remove("deshabilitado");
  btn.href = linkWhatsApp(mensajeWhatsApp(lineas, total));
}

function mensajeWhatsApp(lineas, total) {
  let m = config.mensajeReserva || `¡Hola! Quisiera consultar por un turno en ${config.marca}.`;
  m += "\n\nMi presupuesto estimado:";
  for (const l of lineas) m += `\n• ${l.concepto}: ${precio(l.monto)}`;
  m += `\n\nTotal estimado: ${precio(total)}`;
  return m;
}

/* =========================================================================
   Galería
   ========================================================================= */
let categoriaActiva = "Todos";

function renderGaleria() {
  renderFiltros();
  renderItems();
}

function renderFiltros() {
  const cont = $("#galeria-filtros");
  const cats = ["Todos", ...(galeria.categorias || [])];
  cont.innerHTML = cats.map((c) => `
    <button class="filtro ${c === categoriaActiva ? "filtro--activo" : ""}" data-cat="${c}">${c}</button>
  `).join("");

  cont.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro");
    if (!btn) return;
    categoriaActiva = btn.dataset.cat;
    $$(".filtro", cont).forEach((b) => b.classList.toggle("filtro--activo", b === btn));
    renderItems();
  });
}

function renderItems() {
  const grid = $("#galeria-grid");
  let items = galeria.items || [];

  if (categoriaActiva !== "Todos") {
    items = items.filter((i) => i.categoria === categoriaActiva);
  }

  if (items.length === 0) {
    grid.innerHTML = `<p class="galeria__vacio">Muy pronto vas a ver los trabajos de VELVET acá. ✦</p>`;
    return;
  }

  grid.innerHTML = items.map((i) => `
    <figure class="trabajo" data-titulo="${i.titulo || ""}" data-img="${i.imagen || ""}">
      ${i.imagen ? `<img src="${i.imagen}" alt="${i.titulo || "Trabajo de VELVET"}" loading="lazy" />` : `<div class="trabajo__placeholder">VELVET</div>`}
      <figcaption class="trabajo__overlay">
        <span class="trabajo__titulo">${i.titulo || ""}</span>
      </figcaption>
    </figure>
  `).join("");
}

// Abrir lightbox al hacer clic en un trabajo (delegación de eventos)
$("#galeria-grid").addEventListener("click", (e) => {
  const t = e.target.closest(".trabajo");
  if (!t) return;
  abrirLightbox(t.dataset.img, t.dataset.titulo);
});

function abrirLightbox(img, titulo) {
  const lb = $("#lightbox");
  const imgEl = $("#lightbox-img");
  const tituloEl = $("#lightbox-titulo");

  if (img) {
    imgEl.src = img;
    imgEl.style.display = "block";
  } else {
    imgEl.style.display = "none";
  }
  tituloEl.textContent = titulo || "";
  lb.classList.add("lightbox--abierto");
  lb.setAttribute("aria-hidden", "false");
}

function cerrarLightbox() {
  const lb = $("#lightbox");
  lb.classList.remove("lightbox--abierto");
  lb.setAttribute("aria-hidden", "true");
}

$("#lightbox-cerrar").addEventListener("click", cerrarLightbox);
$("#lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") cerrarLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarLightbox();
});

/* =========================================================================
   Navegación y acordeón
   ========================================================================= */
function configurarNavegacion() {
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("abierto");
    toggle.textContent = menu.classList.contains("abierto") ? "×" : "☰";
  });

  // Cerrar menú al elegir una opción (móvil)
  $$("#nav-menu a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("abierto");
      toggle.textContent = "☰";
    })
  );

  // Resaltar enlace activo según scroll
  const secciones = $$("main section[id]");
  const links = $$("#nav-menu a[href^='#']");
  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) =>
            l.classList.toggle("activo", l.getAttribute("href") === `#${e.target.id}`)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  secciones.forEach((s) => obs.observe(s));
}

function configurarAcordeon() {
  $$(".acordeon__item").forEach((item) => {
    const boton = $(".acordeon__boton", item);
    boton.addEventListener("click", () => {
      const abierto = item.classList.contains("abierto");
      $$(".acordeon__item").forEach((i) => i.classList.remove("abierto"));
      if (!abierto) item.classList.add("abierto");
    });
  });
}

function configurarAnio() {
  $("#anio").textContent = new Date().getFullYear();
}

function configurarVolverArriba() {
  const btn = $("#volver-arriba");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================================================================
   Animación de aparición
   ========================================================================= */
function iniciarReveal() {
  const candidatos = $$(".encabezado-seccion, .servicio, .tarjeta, .trabajo, .contacto__item, .promociones__vacio");
  candidatos.forEach((el) => el.classList.add("revelar"));

  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  candidatos.forEach((el) => obs.observe(el));
}
