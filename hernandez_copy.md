# Fumigaciones Hernández (Tampico) — Copy real

> Todo el texto marcado como literal está **extraído de los sitios propios del negocio**
> (capturas de Wayback 2017-2019, en `_archivo-original/wayback/`). Lo demás está marcado
> como `[NUEVO]` o `TODO(cliente)`.
>
> Historial: [`hernandez_historial.md`](hernandez_historial.md) ·
> Estrategia SEO: [`hernandez_seo.md`](hernandez_seo.md)

> ⚠️ **Este documento es de la Fumigaciones Hernández de Tampico / Ciudad Madero.**
> No confundir con la homónima de Ecatepec/CDMX que hoy ocupa el dominio `.com`.
> Ver `hernandez_historial.md` §0.

---

## Identidad

| | |
|---|---|
| **Nombre** | Fumigaciones Hernández |
| **Slogan** | Expertos en fumigación |
| **Claim** | Eliminamos todas las plagas |
| **Claim regional** | El mejor servicio de la zona conurbada en exterminio de plagas |
| **Diferenciador** | Los mejores precios de la zona |
| **Base operativa** | Ciudad Madero, Tamaulipas |
| **Cobertura** | Tampico · Ciudad Madero · Altamira · y ciudades cercanas a la región |

### Contacto

```
Domicilio     Centenario 503, Col. Obrera, C.P. 89490
              Ciudad Madero, Tamaulipas
Teléfono      833 383 7323          (el del logo vigente)
Tel. anterior 833 189 7935          TODO(cliente): ¿sigue activo?
E-mail        fumigacioneshdz@hotmail.com
Horario       24 horas
```

### Paleta

Muestreada del **logo oficial** (`public/logo.png`) y contrastada con el CSS de sus sitios
2017-2019, donde el rojo era `#B22222` y el amarillo `#E3C600`. La marca ha sido coherente
durante casi diez años.

| Color | Hex | Muestras en el logo | Uso |
|---|---|---|---|
| **Rojo** | `#B41B1E` | 248 | Banner del teléfono · acentos |
| **Amarillo** | `#FFDF00` | 144 | Wordmark · CTA principal |
| **Azul** | `#3154A5` | 233 | Disco y uniforme del personaje |
| Azul marino | `#1C3266` | derivado | Fondos oscuros: hero, footer |
| Gris azulado | `#A9B4BB` | *(del CSS)* | Fondos |

### Formas de pago (literal, versión 2019)

> Efectivo, Cheque, Tarjetas de Crédito Visa, MasterCard, American Express, Transferencia
> Electrónica, Depósito Bancario, y Tarjetas de Débito

---

## Copy literal recuperado

### Plagas — como las enuncia el negocio

> **Moscos · Cucarachas · Termita · Hormigas · Ratas · Pulgas · Arañas**

Y en la página de servicios de 2018, la lista larga:

> "Nos especializamos en controlar y exterminar plagas como **moscos, moscas, ratas,
> ratones, cucarachas, termitas, pulgas, polilla, arañas hormigas** y muchos insectos más."

> **Importante para el copy:** aquí se dice **moscos**, no *mosquitos*; y **ratas**, no
> *roedores*. Usar el vocabulario local también es SEO: es como se busca en la zona.

### Sobre el negocio

> "Somos Fumigaciones Hernandez una empresa mexicana **originarios de Tampico Tamaulipas**
> dedicados al control y exterminio de plagas."

> "**Personal con años de experiencia** nos respalda para brindarle el mejor servicio y su
> completa satisfacción."

> "En Fumigaciones Hernandez contamos con **el mejor equipo y productos en el mercado**
> para brindarle un excelente servicio."

> "Brindamos servicio en las ciudades de **Tampico, Madero, Altamira y ciudades cercanas a
> la región**."

### Propuesta de valor

> "...para que su **hogar, negocio, oficina o industria** se encuentre libre de plaga y
> pueda tener un **ambiente limpio y saludable**."

### Misión, visión y valores (versión 2019)

> **Tu satisfacción es nuestra prioridad**
>
> **Misión** — Atender a cada uno de nuestros clientes, basándonos en sus intereses y
> preocupaciones en Fumigaciones.
>
> **Visión** — Convertirnos, en un período de 3 años, en referentes en la industria de la
> fumigación.
>
> **Valores** — Franqueza · Puntualidad · Servicio · Voluntad

### Servicios por tipo de inmueble (2019)

> Resolvemos tus necesidades en Fumigación
> - **Fumigación de Casas**
> - **Fumigación de Comercios**
> - **Fumigación de Industrias**

### Tipología de vivienda (2017) — idea recuperable

El sitio de 2017 mostraba una clasificación para cotizar por tamaño:

> **2 Pisos · 3 Habitaciones · Jardín, patio, cochera**

Es un **cotizador por tipo de vivienda** en potencia y es de las mejores ideas comerciales
que ha tenido el negocio. Se perdió en el rediseño de 2019.

### Formulario y contacto

> "Pásate o llama" · "Deja un mensaje" · "Hagamos un trato"
>
> "¡Muchas gracias por contactarnos! Si es necesario, te contactaremos de nuevo entre 48 y
> 72 horas."
>
> "Conocer la opinión de nuestros clientes es muy importante para nosotros, extendemos la
> invitación a llenar nuestro formulario para solicitar información sobre los productos y
> servicios que ofrecemos."
>
> "Te atendemos **24 Horas**" · "Estamos cerca de ti"

---

## `[NUEVO]` Copy implementado en el sitio

Construido sobre el material anterior, conservando sus frases propias y con la keyword
principal en el H1. Vive en `src/lib/translations.ts` (`HERNANDEZ_HOME`).

### Hero

> **Tampico · Ciudad Madero · Altamira — Atención 24 horas**
>
> # Fumigación y control de plagas en Tampico
>
> Expertos en fumigación en la zona conurbada. Eliminamos moscos, cucarachas, termitas,
> ratas, hormigas, pulgas y arañas en hogares, comercios e industrias.
>
> `Llamar ahora` · `Ver servicios`
>
> ✓ Atención las 24 horas ✓ El mejor equipo y productos del mercado
> ✓ Personal con años de experiencia

### Secciones del home

| Sección | Titular |
|---|---|
| Plagas | Moscos, cucarachas, termitas y más |
| Métodos | La técnica correcta para cada espacio |
| Nosotros | Expertos en fumigación de la zona conurbada |
| Oferta | Cotización sin costo |
| Confianza | Tu satisfacción es nuestra prioridad *(misión, visión y valores reales)* |
| Cobertura | Tampico, Madero y Altamira |
| Blog | Aprende a detectarlo antes de que crezca |
| Contacto | Pásate o llama |

### Nota sobre los testimonios

El bloque de testimonios del template pertenecía a otra empresa. Se sustituyó por la
**misión, visión y valores reales** del negocio, recuperados de su sitio de 2019.

No se publica `aggregateRating` en los datos estructurados: marcar reseñas que no existen
es motivo de acción manual en Google. Cuando haya reseñas reales, se activa.

### Las 11 landings de plaga

En `src/lib/services.ts`, ordenadas por prioridad SEO según el clima de la región:

| Prioridad | Plagas | Por qué |
|---|---|---|
| **1** | Moscos, Cucarachas, Termitas, Ratas | El clima del Golfo las mantiene activas todo el año |
| **2** | Hormigas, Alacranes, Pulgas, Chinches | Consulta frecuente, estacional o de nicho |
| **3** | Arañas, Garrapatas, Moscas | Cola larga |

Cada una con H1, metaTitle, metaDescription, señales de detección, tratamiento,
recomendaciones y FAQs contra dudas reales de compra.

Argumentos específicos de la zona que no tendría una plantilla genérica:

- **Moscos**: el *Aedes aegypti* y el dengue; por qué nebulizar sin eliminar criaderos solo
  dura unos días; qué revisar después de cada lluvia.
- **Cucarachas**: suben del drenaje, sobre todo tras las lluvias, y no es falta de limpieza.
- **Termitas**: la humedad del Golfo y la madera del centro histórico de Tampico.
- **Ratas**: la presión del puerto industrial de Altamira y el movimiento de mercancía.

### Las 6 zonas de cobertura

En `src/lib/locations.ts`, cada una con contexto local propio y sus colonias:

| Zona | Ángulo del contenido |
|---|---|
| **Tampico** | Mayor volumen. Centro histórico con madera, Laguna del Carpintero |
| **Ciudad Madero** | La base física. Playa Miramar, refinería, Col. Obrera |
| **Altamira** | Puerto industrial + zona residencial. El gran activo B2B |
| Pueblo Viejo | Al otro lado del Pánuco, Villa Cuauhtémoc |
| Pánuco | Región agrícola y ganadera: garrapatas y alacranes |
| Aldama | Frontera urbano/monte al norte |

---

## Vacíos a cubrir con el cliente

### Confirmaciones sobre datos existentes

- [ ] **Teléfono**: ¿sigue activo el `833 189 7935` además del `833 383 7323` del logo?
- [ ] **Horario**: ¿siguen atendiendo 24 horas, como decía el sitio de 2019?
- [ ] **Domicilio**: confirmar que Centenario 503, Col. Obrera sigue siendo la base.
- [ ] **Antigüedad**: el sitio nunca dio una cifra, solo "personal con años de experiencia".
      Si son 20, 25 o 30 años, es un argumento de peso frente a la competencia local.
- [ ] **Razón social**: no aparece en ninguna captura.

### Material que falta

- [x] **Logo oficial** — en `public/logo.png` (640×640), aportado por el cliente.
- [ ] **Licencia sanitaria y certificaciones** — el sitio histórico no declaraba ninguna.
      Varios competidores de Tampico sí las publican, así que aquí hay una desventaja
      competitiva fácil de corregir si el negocio las tiene.
- [ ] **Fotos propias** — del equipo, las unidades y trabajos reales. Las actuales son de banco.
- [ ] **Reseñas en Google** — no hay ninguna. Es el mayor freno de conversión.
- [ ] **Redes sociales** — el sitio de 2017 enlazaba un Facebook que no se archivó.
- [ ] **Precios o rangos** — el claim es "los mejores precios de la zona" pero nunca se
      publicó una tarifa. Un rango real convierte mejor que ocultarlo.
- [ ] **Fotos de chinches, pulgas y moscas** — esas tres landings usan placeholders.
