# VELVET — Nail Studio

Sitio web estático para **VELVET**, una marca de cuidado, diseño y embellecimiento de uñas. Incluye una **calculadora de precios** que permite a las clientas armar su propio presupuesto.

## Estructura del proyecto

```
ro-nails/
├── index.html          → Página principal (una sola página con todas las secciones)
├── css/
│   └── styles.css      → Estilos (identidad VELVET)
├── js/
│   └── main.js         → Lógica: servicios, calculadora, galería, navegación
├── data/
│   ├── precios.json    → Precios: técnicas, decoraciones y retiros  ⭐ editar acá
│   ├── config.json     → Marca y contacto (WhatsApp, Instagram, ubicación, horarios)
│   └── galeria.json    → Categorías y fotos de la galería
└── img/                → Carpeta para las fotografías (creala al agregar fotos)
```

## Cómo verlo localmente

Los datos se cargan con `fetch()`, por lo que **no alcanza con abrir `index.html` doble clic** (el navegador bloquea la carga de archivos locales). Usá un servidor local:

```bash
# Opción A — con Python (si lo tenés instalado)
python -m http.server 8000

# Opción B — con Node/npx
npx serve .
```

Luego abrí `http://localhost:8000`.

## Verlo desde el móvil (misma red Wi-Fi)

Para abrir el sitio en el teléfono hay dos requisitos:

1. **Servidor escuchando en todas las interfaces** (no solo en `localhost`):

   ```bash
   python -m http.server 8000 --bind 0.0.0.0
   ```

   O, más fácil, hacé doble clic en **`servir.bat`**: arranca el servidor y te muestra la URL exacta para el móvil.

2. **Permitir la conexión en el firewall de Windows** (una sola vez). Abrí PowerShell **como administrador** y ejecutá:

   ```powershell
   New-NetFirewallRule -DisplayName "Velvet HTTP 8000" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 8000 -Profile Private,Public
   ```

Después, en el móvil (conectado al **mismo Wi-Fi**), abrí `http://192.168.1.12:8000` (reemplazá por la IP que muestra `servir.bat`).

> **Ojo:** si usás una red de invitados o el router tiene "aislamiento de clientes/AP isolation", los dispositivos no se ven entre sí aunque estén en el mismo Wi-Fi. En ese caso probá desde tu red principal.

## Cómo desplegarlo en GitHub Pages

1. Subí este contenido a un repositorio en GitHub.
2. En el repositorio: **Settings → Pages**.
3. En *Source*, elegí la rama (por ejemplo `main`) y la carpeta raíz `/`.
4. Guardá. En unos minutos el sitio estará en `https://TU_USUARIO.github.io/TU_REPO`.

No necesita build ni backend: son archivos estáticos.

## Cómo editar los precios

Todo se edita en **`data/precios.json`**. No hace falta tocar código.

- **`tecnicas`**: nombre, descripción y `precio` (número entero, sin separador de miles).
- **`decoraciones`**: nombre y `precioPorUna` (costo por uña).
- **`retiros`**: nombre y `precio`.
- **`maxUnas`**: cantidad máxima de uñas del stepper (por defecto 10).

```json
{
  "tecnicas": [
    { "id": "semipermanente", "nombre": "Esmaltado semipermanente", "descripcion": "…", "precio": 12000 }
  ],
  "decoraciones": [
    { "id": "strass", "nombre": "Strass", "precioPorUna": 250 }
  ],
  "retiros": [
    { "id": "mio", "nombre": "Retiro de mi trabajo", "precio": 10000 }
  ],
  "maxUnas": 10
}
```

> Los precios se muestran con formato argentino (separador de miles, p. ej. `$12.000`). Escribí los números **sin** separador (ej. `12000`).

## Cómo editar datos de contacto

En **`data/config.json`**:

- `whatsapp`: número en formato internacional **sin** `+` ni espacios (ej. `5491123456789`).
- `instagram`: URL completa del perfil.
- `instagramUsuario`: texto visible (ej. `@velvet.nails`).
- `ubicacion`, `horarios`: texto libre.
- `mensajeReserva`: mensaje pre-cargado que se abre en WhatsApp.

## Cómo agregar fotos a la galería

1. Copiá las fotos en `img/` (mejor en `img/galeria/`).
2. Agregalas en **`data/galeria.json`**:

```json
{
  "categorias": ["Soft Gel", "Capping", "Esmaltado", "Francesitas", "Nail Art", "Diseños especiales"],
  "items": [
    { "titulo": "Diseño french babyboomer", "categoria": "Francesitas", "imagen": "img/galeria/foto1.jpg" }
  ]
}
```

- `categoria` debe coincidir con una de la lista `categorias`.
- Si `imagen` está vacía, se muestra un placeholder de VELVET.

## Secciones pendientes de completar

- **Promociones**: actualmente muestra un mensaje de "próximamente".
- **Políticas**: los textos están como contenido pendiente (editar en `index.html`, dentro de `#politicas`).
- **Fotos del hero y de servicios**: se usan placeholders hasta reemplazarlos por fotos reales de VELVET.
