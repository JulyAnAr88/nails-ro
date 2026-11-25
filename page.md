# VELVET — Especificación de desarrollo del sitio web

## 1. Objetivo del proyecto

Desarrollar un sitio web moderno, elegante y responsive para **VELVET**, una marca dedicada al cuidado, diseño y embellecimiento de uñas.

El sitio debe funcionar como una extensión digital de la identidad visual de la marca, transmitiendo personalidad, delicadeza, creatividad y profesionalismo.

No se busca una plantilla genérica de salón de belleza. El objetivo es construir una experiencia visual distintiva que combine dos estilos:

- **Vintage Coquette:** elementos retro, femininos, delicados, románticos y decorativos.
- **Minimalista:** composición limpia, espacios en blanco, jerarquía visual clara y navegación intuitiva.

El resultado debe ser equilibrado: una estética con personalidad, pero sin sobrecargar la interfaz.

## 2. Identidad visual y dirección artística

### 2.1. Concepto general

La identidad visual debe girar alrededor de los siguientes conceptos:

- Elegancia y delicadeza.
- Estética femenina contemporánea.
- Inspiración vintage.
- Detalles románticos y sutiles.
- Profesionalismo y confianza.
- Creatividad y expresión personal.

La marca debe sentirse joven, moderna y cercana, sin perder sofisticación.

Evitar:
- Diseños excesivamente infantiles.
- Uso indiscriminado de corazones y elementos decorativos.
- Estética de tienda de cosméticos genérica.
- Gradientes llamativos.
- Botones excesivamente redondeados o con apariencia de aplicaciones infantiles.
- Saturación de elementos visuales.

### 2.2. Paleta de colores

Utilizar una paleta basada en tonos cálidos, rosados y neutros.

| Color | HEX | Aplicación |
|---|---|---|
| Crema | `#F9F3E5` | Fondo principal |
| Rosa Velvet | `#E6A5AA` | Color de identidad y acentos |
| Rosa suave | `#F2DADD` | Fondos de secciones |
| Negro cálido | `#282522` | Textos principales |
| Beige | `#D7CFC1` | Bordes, separadores y detalles |
| Blanco | `#FFFFFF` | Tarjetas y superficies |

Distribución recomendada:

- 50% crema y tonos claros.
- 25% blanco y beige.
- 15% rosa.
- 10% negro y elementos de contraste.

El rosa debe funcionar como elemento identificador, no como color dominante de toda la interfaz.

### 2.3. Tipografías

Combinar una tipografía serif elegante con una sans-serif moderna.

**Tipografía principal: Cormorant Garamond**

Uso:
- Títulos principales.
- Encabezados de secciones.
- Frases destacadas.
- Elementos editoriales.

**Tipografía secundaria: DM Sans**

Uso:
- Navegación.
- Párrafos.
- Descripciones de servicios.
- Precios.
- Botones.
- Formularios.

**Tipografía decorativa opcional: Great Vibes**

Uso muy limitado:
- Palabras decorativas.
- Pequeñas frases.
- Detalles de identidad visual.

No utilizar fuentes manuscritas para textos largos.

Las tipografías deben importarse desde Google Fonts o utilizarse mediante archivos locales optimizados.

### 2.4. Elementos decorativos

Incorporar de manera sutil:

- Estrellas pequeñas de cuatro puntas.
- Destellos.
- Líneas curvas y onduladas.
- Marcos finos.
- Detalles ornamentales vintage.
- Pequeños motivos florales.
- Separadores decorativos.
- Texturas suaves inspiradas en papel o impresión editorial.

Los elementos decorativos deben acompañar la composición y no competir con las fotografías de los trabajos.

## 3. Estructura del sitio web

Desarrollar una página principal con navegación por secciones.

El menú principal debe incluir:

1. Inicio.
2. Servicios y precios.
3. Calculadora de precios.
4. Galería.
5. Promociones.
6. Políticas.
7. Contacto.

Agregar un botón destacado de **Reservar turno**.

La navegación debe ser clara y estar disponible tanto en escritorio como en dispositivos móviles.

---

## 4. Sección de inicio (Hero)

Es la primera impresión de la marca y debe tener especial cuidado visual.

### Contenido

- Logotipo original de VELVET.
- Nombre de la marca.
- Descriptor: Nail Studio.
- Frase principal: "Your nails, your style."
- Texto secundario breve que comunique la propuesta de valor.
- Botón principal: "Reservar mi turno".
- Botón secundario: "Ver trabajos".

### Diseño

- Fondo crema.
- Tipografía serif de gran tamaño.
- Fotografía de uñas como elemento visual principal.
- Detalles decorativos pequeños en rosa.
- Composición editorial y asimétrica.
- Espacios amplios entre elementos.

La fotografía debe tener protagonismo y transmitir calidad profesional.

No reemplazar el logotipo original por texto generado con otra tipografía. Utilizar el archivo original proporcionado como recurso gráfico.

---

## 5. Sección de servicios y precios

Esta sección es fundamental y debe permitir que las clientas conozcan los servicios disponibles y sus respectivos precios.

### Organización

Mostrar los servicios mediante tarjetas o bloques visuales.

Cada servicio debe incluir:

- Nombre del servicio.
- Descripción breve.
- Precio.
- Fotografía de un trabajo propio relacionado con ese servicio.
- Duración estimada (opcional).
- Botón para consultar o reservar.

### Ejemplo de estructura

| Servicio | Descripción | Precio |
|---|---|---|
| Esmaltado semipermanente | Aplicación de esmalte de larga duración | $12.000 |
| Capping gel | Recubrimiento y refuerzo de la uña natural | $24.000 |
| Soft gel | Extensiones y construcción de uñas mediante tips de gel | $26.000 |
| Soft gel XXL | Extensiones de mayor longitud | $30.000 |

Los nombres, descripciones y precios deben ser fácilmente modificables. Estos son los valores iniciales reales de VELVET y se centralizan en el archivo de datos de la calculadora (ver sección 6), por lo que se muestran automáticamente en ambas secciones.

Cualquier diseño extra incrementa el precio; esas decoraciones se cotizan por uña mediante la calculadora de precios.

### Requisitos visuales

- Utilizar fotografías reales de trabajos realizados por VELVET.
- Mantener una proporción uniforme entre las imágenes.
- Mostrar los precios con buena jerarquía visual.
- Diferenciar los servicios sin crear una interfaz recargada.
- Destacar servicios especiales cuando corresponda.

### Fotografías propias

No utilizar fotografías de stock para simular trabajos de la marca.

Crear una estructura que permita incorporar fotografías propias posteriormente.

Cada fotografía debe poder asociarse a:
- Servicio.
- Nombre o descripción del diseño.
- Precio, cuando corresponda.
- Fecha (opcional).

Cuando todavía no existan fotografías, utilizar placeholders claramente identificados para que puedan reemplazarse.

### Información de precios

Incluir una aclaración editable:

"Los precios pueden variar según el diseño, la complejidad del trabajo y los materiales utilizados. Consultá antes de reservar."

Los precios iniciales ya están definidos por VELVET (técnicas, decoraciones y retiros) y se centralizan en el archivo de datos de la calculadora (`data/precios.json`). No inventar precios: todo lo que no esté definido queda como campo editable pendiente de completar.

---

## 6. Calculadora de precios (estimador de costos)

Sección interactiva que permite a las potenciales clientas armar su propio presupuesto aproximado antes de reservar: eligen la técnica base, agregan decoraciones por uña y, opcionalmente, un retiro, viendo el total en tiempo real.

### Objetivo

- Reducir la fricción de "¿cuánto me saldría?" y aumentar la intención de reserva.
- Transmitir transparencia en los precios.
- Facilitar la conversión hacia WhatsApp con un presupuesto pre-armado.

### Lógica de cálculo

1. La clienta elige una única **técnica base** (obligatoria).
2. Opcionalmente agrega **decoraciones por uña**: para cada decoración, elige la cantidad de uñas (0 a 10) en las que se aplica. El subtotal se calcula como `cantidad de uñas × precio por uña`.
3. Opcionalmente agrega un **retiro** (de mi trabajo o ajeno).
4. El total se calcula en vivo y se desglosa por concepto.

Las decoraciones pueden apilarse: se pueden sumar varias decoraciones distintas en la misma uña (por ejemplo, "strass en 2 uñas" + "cat eye en 4 uñas").

### Datos iniciales de precios

Los valores iniciales (editables desde el archivo de datos) son:

#### Técnicas (base, una por servicio)

| Técnica | Precio |
|---|---|
| Esmaltado semipermanente | $12.000 |
| Capping gel | $24.000 |
| Soft gel | $26.000 |
| Soft gel XXL | $30.000 |

Aclaración: cualquier diseño extra incrementa el precio y se cotiza mediante las decoraciones.

#### Decoraciones (extras, costo por uña)

| Decoración | Costo por uña |
|---|---|
| Uña completa strass | $800 |
| Polvo | $250 |
| Encapsulado | $500 |
| Babyboomer | $500 |
| Aura | $400 |
| French | $500 |
| Nail art | $250 |
| Strass | $250 |
| Cat eye | $200 |
| Dijes | $1.000 |
| Relieve | $300 |
| Blooming | $250 |
| Arreglo de uña | $2.000 |

#### Retiros (opcional, uno)

| Retiro | Precio |
|---|---|
| Retiro de mi trabajo | $10.000 |
| Retiro ajeno | $13.000 |

### Interfaz

- **Selector de técnica:** tarjetas o radios con nombre y precio. Obligatorio.
- **Lista de decoraciones:** cada una con un stepper de cantidad (0–10 uñas) y su subtotal visible.
- **Selector de retiro:** "No necesito", "Retiro de mi trabajo", "Retiro ajeno" (excluyente).
- **Panel de resumen:** desglose por concepto (técnica, cada decoración con cantidad, retiro) y total destacado.
- **Botón "Consultar por WhatsApp":** genera un mensaje pre-armado con la técnica, las decoraciones elegidas (nombre y cantidad) y el total estimado. Reutiliza el número de WhatsApp de la configuración.
- **Aclaración visible:** "Este es un presupuesto estimado. El precio final puede variar según el diseño, la complejidad y los materiales. Consultá antes de reservar."

### Reglas y validaciones

- La técnica base es obligatoria para calcular (sin técnica no hay total).
- Las decoraciones admiten de 0 a 10 uñas cada una.
- El retiro es opcional y excluyente (se elige uno o ninguno).
- Montos formateados según localización (separador de miles, p. ej. `$22.000`).
- Todos los cálculos se realizan en el navegador; no requiere backend.

### Gestión de precios (fuente de datos)

Como el sitio es estático y se despliega en GitHub Pages, los precios se centralizan en un **archivo plano JSON** (`data/precios.json`) que se carga en tiempo de ejecución con `fetch()`.

Esto permite:

- Editar precios, nombres y agregar o quitar decoraciones **sin tocar el código ni recompilar**: basta con editar el JSON y hacer commit al repositorio.
- Mantener la separación entre contenido y presentación exigida en la sección de arquitectura.
- Usar los mismos datos tanto en la sección de servicios como en la calculadora (una sola fuente de verdad).

Alternativas evaluadas:

| Opción | Ventajas | Desventajas | Recomendación |
|---|---|---|---|
| **JSON cargado con `fetch`** | Simple, nativo en JS, editable sin recompilar | Requiere un commit a GitHub para actualizar | ✅ Recomendado |
| Módulo JS/TS (`precios.ts`) | Tipado y autocompletado | Requiere recompilar y redesplegar al cambiar precios | Aceptable |
| CSV | Editable en planilla de cálculo (Excel) | Necesita parsing propio o una librería; menos natural en JS | Aceptable si se prefiere Excel |
| Google Sheets (CSV publicado) | Editar sin entrar al repo | Dependencia externa, latencia, datos públicos y límites de uso | Evitar en la v1 |

Para la primera versión se recomienda JSON. Si más adelante se desea editar precios sin entrar a GitHub, se puede migrar a Google Sheets o a un mini CMS sin tocar el resto de la arquitectura.

### Estructura del archivo de datos

Los montos se guardan como números enteros (sin separador de miles) y se formatean únicamente para mostrar.

```json
{
  "tecnicas": [
    { "id": "semipermanente", "nombre": "Esmaltado semipermanente", "precio": 12000 }
  ],
  "decoraciones": [
    { "id": "strass", "nombre": "Strass", "precioPorUna": 250 }
  ],
  "retiros": [
    { "id": "mio", "nombre": "Retiro de mi trabajo", "precio": 10000 },
    { "id": "ajeno", "nombre": "Retiro ajeno", "precio": 13000 }
  ]
}
```

---

## 7. Galería de trabajos (Portfolio)

Crear una sección dedicada exclusivamente a mostrar trabajos realizados por VELVET.

Esta sección debe funcionar como un portfolio visual.

### Características

- Galería de fotografías en formato grid o masonry.
- Imágenes de buena calidad.
- Adaptación automática a dispositivos móviles.
- Posibilidad de ampliar las imágenes mediante un lightbox.
- Animaciones sutiles al interactuar.
- Clasificación por categorías.

### Categorías sugeridas

- Soft Gel.
- Capping.
- Esmaltado.
- Francesitas.
- Nail Art.
- Diseños especiales.

Incluir filtros para navegar entre categorías.

La galería debe priorizar las imágenes y evitar descripciones demasiado extensas.

Debe ser sencillo agregar nuevas fotografías sin modificar la estructura de la página.

---

## 8. Sección de promociones

Crear un espacio visualmente destacado para comunicar promociones y beneficios.

### Tipos de promociones

- Descuentos especiales.
- Promociones por temporada.
- Beneficios por recomendación.
- Promociones para nuevas clientas.
- Combos de servicios.
- Beneficios por fechas especiales.

### Diseño

Las promociones deben mostrarse mediante tarjetas visuales con:

- Nombre de la promoción.
- Descripción.
- Precio promocional o porcentaje de descuento.
- Fotografía o elemento gráfico.
- Fecha de vigencia.
- Condiciones aplicables.
- Botón para consultar o reservar.

### Comportamiento

- Las promociones vencidas no deben mostrarse como activas.
- Permitir activar y desactivar promociones.
- Diferenciar visualmente las promociones vigentes.
- Si no hay promociones activas, mostrar un mensaje amigable.

Ejemplo:

"¡Tenemos algo especial para vos! Muy pronto vas a encontrar nuevas promociones en Velvet."

No inventar descuentos ni fechas. Toda la información debe ser editable.

---

## 9. Políticas de turnos y cancelaciones

Crear una sección específica para explicar las condiciones de reserva y atención.

Esta sección debe ser clara, accesible y fácil de consultar antes de reservar.

Organizar la información en bloques independientes.

**Nota:** el servicio es a domicilio, por lo que no aplica una sección de "llegadas tarde" ni una ubicación física.

### 9.1. Reservas

Incluir información editable sobre:

- Medios disponibles para solicitar turnos.
- Anticipación recomendada para reservar.
- Confirmación de la reserva.
- Posibilidad de solicitar una seña.
- Condiciones para confirmar el turno.

### 9.2. Señas

Incluir las condiciones correspondientes:

- Si se solicita una seña.
- Importe o porcentaje.
- Medios de pago aceptados.
- Si se descuenta del precio final.
- Condiciones de devolución.

### 9.3. Cancelaciones y modificaciones

Explicar:

- Con cuánta anticipación se puede cancelar.
- Cómo solicitar un cambio de horario.
- Qué sucede si se cancela fuera del plazo establecido.
- Qué sucede con la seña en caso de cancelación.
- Condiciones para reprogramar.

### 9.4. Asistencia al turno

Incluir condiciones sobre:

- Presentarse con puntualidad.
- Asistir con las uñas en condiciones adecuadas.
- Informar previamente si se necesita retirar un trabajo anterior.
- Comunicar cualquier necesidad especial antes de la cita.

### Diseño

Presentar las políticas mediante tarjetas, acordeones o bloques desplegables.

Utilizar títulos claros, iconografía sutil y textos breves.

**Importante:** no inventar condiciones comerciales ni legales. Todos los plazos, porcentajes, importes y condiciones deben quedar como campos editables pendientes de completar por la responsable de VELVET.

---

## 10. Sección de contacto y reservas

Crear una sección final que facilite el contacto con el estudio.

### Información

- WhatsApp.
- Instagram.
- Horarios de atención (full time, a convenir).
- Información adicional de contacto.

**Nota:** el servicio es a domicilio, por lo que no se muestra ubicación física.

Los datos deben ser configurables.

### Funcionalidades

**WhatsApp**

Implementar un botón que abra una conversación con un mensaje predefinido.

Ejemplo:

"¡Hola! Quisiera consultar por un turno en Velvet."

**Instagram**

Agregar un enlace directo al perfil oficial.

**Ubicación**

No aplica: el servicio es a domicilio. La sección muestra únicamente los horarios (full time, a convenir).

**Reservas**

El botón de reservas debe dirigir al canal de contacto definido por la marca.

No implementar un sistema complejo de gestión de turnos si no existe una infraestructura para administrarlo.

---

## 11. Footer

El pie de página debe incluir:

- Logotipo de VELVET.
- Nombre de la marca.
- Enlaces a las principales secciones.
- Instagram.
- WhatsApp.
- Acceso a las políticas de turnos.
- Copyright.

Agregar un pequeño detalle decorativo que mantenga la identidad visual.

Ejemplo:

"Made with love. Made for you. ✦"

---

## 12. Experiencia de usuario y comportamiento

### Responsive Design

El sitio debe funcionar correctamente en:

- Computadoras de escritorio.
- Notebooks.
- Tablets.
- Teléfonos móviles.

Priorizar el diseño mobile-first, dado que gran parte de las clientas probablemente accederán desde Instagram o WhatsApp.

### Animaciones

Implementar animaciones discretas:

- Aparición progresiva de secciones.
- Transiciones suaves entre estados.
- Hover en tarjetas.
- Efectos sutiles en botones.
- Animaciones pequeñas en elementos decorativos.

Evitar animaciones excesivas que afecten el rendimiento o dificulten la navegación.

### Accesibilidad

- Contraste adecuado entre textos y fondos.
- Textos alternativos en imágenes.
- Navegación mediante teclado.
- Etiquetas descriptivas en botones.
- Tamaños de texto legibles.
- Respeto por la preferencia de movimiento reducido del sistema.

### Rendimiento

- Optimizar imágenes.
- Utilizar formatos WebP o AVIF cuando sea posible.
- Implementar lazy loading.
- Evitar dependencias innecesarias.
- Minimizar el tiempo de carga.
- Evitar saltos de contenido durante la carga de imágenes.

---

## 13. Arquitectura y mantenimiento

El desarrollo debe permitir modificar el contenido sin necesidad de reconstruir el sitio.

### Separación de contenido y presentación

Mantener separados:

- Componentes visuales.
- Estilos.
- Datos de servicios.
- Precios.
- Promociones.
- Políticas.
- Fotografías.
- Información de contacto.

Los datos deben estar centralizados en una estructura fácilmente modificable.

### Modelo de datos sugerido

**Servicios**

- id
- nombre
- descripción
- precio
- duración
- imagen
- categoría
- activo

**Trabajos**

- id
- título
- descripción
- imagen
- servicio asociado
- categoría
- fecha
- destacado

**Promociones**

- id
- título
- descripción
- precio promocional
- descuento
- fecha de inicio
- fecha de finalización
- condiciones
- imagen
- activa

**Políticas**

- id
- título
- contenido
- orden
- activa

**Configuración**

- nombre de la marca
- logotipo
- WhatsApp
- Instagram
- dirección
- horarios
- enlaces de contacto

**Precios (calculadora)** — viven en `data/precios.json`

- técnicas: id, nombre, precio, activo
- decoraciones: id, nombre, precioPorUna, activo
- retiros: id, nombre, precio, activo

Los campos deben poder adaptarse a las necesidades reales del negocio.

### Administración futura

Preparar el proyecto para que en una etapa posterior pueda incorporarse un panel de administración que permita:

- Agregar y eliminar servicios.
- Actualizar precios.
- Cargar fotografías.
- Crear promociones.
- Modificar políticas.
- Actualizar información de contacto.

No es obligatorio desarrollar el panel administrativo en la primera etapa, pero la arquitectura debe facilitar su incorporación.

---

## 14. Tecnologías sugeridas

La elección definitiva debe priorizar simplicidad, rendimiento y facilidad de mantenimiento.

Stack sugerido:

- **Frontend:** React con TypeScript.
- **Framework:** Next.js o Vite, según las necesidades del proyecto.
- **Estilos:** Tailwind CSS o CSS modular.
- **Iconografía:** Lucide Icons.
- **Animaciones:** Framer Motion o CSS nativo.
- **Galería:** Lightbox liviano.
- **Fuentes:** Google Fonts.
- **Hosting:** compatible con despliegue estático o Node.js.

Evitar incorporar un backend innecesario para una primera versión.

**Despliegue estático (GitHub Pages):**

Dado que el sitio se desplegará como sitio estático, se recomienda:

- Usar una build estática (Vite + React o Astro) por sobre un servidor Node.
- No usar backend: los datos editables (precios, servicios, promociones, políticas, contacto) se leen desde archivos JSON en tiempo de ejecución con `fetch()`, para poder modificarlos sin recompilar.
- Centralizar los datos en una carpeta `data/` (por ejemplo, `data/precios.json`) y mantener una sola fuente de verdad para los precios (sección de servicios y calculadora comparten el mismo archivo).

Si se utiliza Next.js, aprovechar las funcionalidades de optimización de imágenes y metadatos.

---

## 15. SEO y redes sociales

Implementar configuraciones básicas de posicionamiento.

### SEO

- Título: Velvet | Nail Studio.
- Meta descripción: descripción breve del estudio y sus servicios.
- URLs amigables.
- Jerarquía correcta de encabezados.
- Textos alternativos para imágenes.
- Open Graph para compartir enlaces en redes sociales.

### Redes sociales

Preparar una vista previa atractiva cuando se comparta el sitio por WhatsApp, Instagram u otras plataformas.

Utilizar una imagen de portada que mantenga la identidad visual de VELVET.

---

## 16. Criterios de aceptación

El desarrollo se considerará completo cuando cumpla con los siguientes puntos:

- [ ] La identidad visual combina Vintage Coquette y Minimalismo.
- [ ] Se utiliza la paleta de colores definida.
- [ ] Se implementan las tipografías establecidas.
- [ ] Se incorpora el logotipo original.
- [ ] La navegación funciona correctamente.
- [ ] La página de inicio presenta correctamente la marca.
- [ ] Existe una sección de servicios y precios.
- [ ] Cada servicio permite asociar fotografías propias.
- [ ] Existe una galería con filtros por categoría.
- [ ] Las imágenes pueden ampliarse.
- [ ] Existe una sección de promociones.
- [ ] Las promociones pueden activarse y desactivarse.
- [ ] Existe una sección de políticas de turnos y cancelaciones.
- [ ] La información comercial es editable.
- [ ] Existe una calculadora de precios que estima el costo según técnica, decoraciones y retiro.
- [ ] La calculadora carga los precios desde el archivo de datos editable (JSON).
- [ ] La calculadora genera un mensaje de WhatsApp con el presupuesto armado.
- [ ] Los botones de contacto funcionan.
- [ ] El sitio es completamente responsive.
- [ ] Se optimizaron las imágenes y los tiempos de carga.
- [ ] Se implementaron metadatos SEO.
- [ ] El código está organizado y documentado.

---

## 17. Instrucciones finales para el agente de IA

Antes de comenzar:

1. Analizar el proyecto y su estructura existente.
2. Identificar los recursos gráficos disponibles, especialmente el logotipo original.
3. Respetar la identidad visual definida en este documento.
4. Proponer una estructura de componentes reutilizables.
5. Definir cómo se almacenarán los datos y las fotografías.

Durante el desarrollo:

- Priorizar la calidad visual y la coherencia de marca.
- No utilizar una plantilla genérica sin personalización.
- No inventar fotografías de trabajos propios.
- No inventar precios, promociones ni políticas comerciales.
- Utilizar contenido de ejemplo únicamente cuando esté claramente identificado como provisional.
- Mantener una separación clara entre datos y componentes.
- Implementar primero una versión funcional y completa antes de agregar funcionalidades innecesarias.

Al finalizar:

- Verificar el funcionamiento en diferentes tamaños de pantalla.
- Comprobar todos los enlaces y botones.
- Revisar la consistencia visual de las secciones.
- Documentar cómo modificar servicios, precios, promociones, fotografías y el archivo de precios de la calculadora (`data/precios.json`).
- Proporcionar instrucciones para ejecutar y desplegar el proyecto.

**Resultado esperado:** un sitio web profesional para VELVET que transmita una identidad visual reconocible, permita mostrar trabajos reales, comunicar precios y promociones, y facilite la captación de nuevas clientas mediante canales de contacto y reservas.