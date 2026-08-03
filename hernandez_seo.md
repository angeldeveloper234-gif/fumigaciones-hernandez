# Fumigaciones Hernández (Tampico) — Estrategia SEO

> Auditoría, estrategia y plan de posicionamiento para la zona conurbada de Tampico,
> Ciudad Madero y Altamira. Investigación del 27 de julio de 2026.
>
> Historial: [`hernandez_historial.md`](hernandez_historial.md) ·
> Copy: [`hernandez_copy.md`](hernandez_copy.md)

---

## 0. El punto de partida

**El negocio no tiene presencia web desde 2020.** Su único sitio propio —hecho con GoDaddy
Website Builder— dejó de existir cuando el dominio `fumigacioneshernandez.com` pasó a otra
empresa homónima de Ecatepec.

Eso significa dos cosas:

1. **Cero autoridad acumulada.** No hay enlaces, ni histórico, ni señales que heredar.
   Se parte de cero, literalmente.
2. **Cero canibalización.** No hay dominios propios compitiendo entre sí ni datos NAP
   contradictorios que corregir. Es una desventaja que se convierte en ventaja: el terreno
   está limpio y se puede construir bien desde el primer día.

---

## 1. La competencia en la zona conurbada

| Competidor | Antigüedad | Ángulo | Web |
|---|---|---|---|
| **Fumigaciones Del Golfo** | **desde 1974** | El decano de la zona, urbano e industrial | `fumigacionesdelgolfo.com` |
| **FumiPlus** | +20 años | Tratamientos personalizados, **certificados oficiales** | `fumiplustampico.com` |
| **FUMIP / MIP Profesional** | +15 años | Cubre además el norte de Veracruz | `mipprofesional.com.mx` |
| **Fumigaciones Rangel** | — | **Certificado COEPRIS** y garantía | `fumigacionesrangel.net` |
| Fumitec | — | Tampico, Madero, Reynosa, Altamira | `fumitectamp.com` |
| Fumigaciones Santos | — | Av. Chairel 606-A, Tampico | página en UENI |
| ProHigiene | — | Control urbano en la conurbación | `prohigiene.com.mx` |
| Hyper-Control | — | Sanitización y fumigación | `fumigacioneshypercontrol.com` |
| **Fumigaciones Hernández** | *sin declarar* | *(sin presencia web)* | — |

### Tres lecturas importantes

**a) Es un mercado disputado pero no dominado.** No hay un Terminix aquí. Son negocios
locales con webs modestas, muchas de ellas técnicamente flojas. Un sitio bien construido
compite de verdad.

**b) La antigüedad es el argumento del sector, y Hernández no la declara.** Del Golfo dice
1974, FumiPlus 20 años, FUMIP 15. El sitio histórico de Hernández solo decía "personal con
años de experiencia". Si el negocio tiene una cifra real, es de lo primero que hay que
publicar.

**c) COEPRIS es el diferenciador que aquí sí pesa.** Rangel lo publica explícitamente y
FumiPlus habla de "certificados oficiales". En Tamaulipas la autoridad sanitaria estatal es
**COEPRIS** (no COFEPRIS, que es la federal). Si Hernández tiene registro, publicarlo con
folio lo pone al nivel de los mejores; si no lo tiene, es una desventaja competitiva real.

**d) Los agregadores ocupan mucho espacio.** `infoisinfo`, `topfumigaciones` y `fumigamex`
aparecen consistentemente en la primera página. Estar listado en ellos con el NAP correcto
es tráfico gratis y una señal de coherencia local.

---

## 2. La estrategia

### 2.1 La conurbación es un solo mercado, con tres puertas

Tampico, Ciudad Madero y Altamira funcionan como una sola ciudad: la gente cruza a diario y
busca indistintamente. Pero cada nombre es una keyword distinta, y la competencia se
concentra en "Tampico".

Por eso las tres son cabeza de estrategia, con un matiz:

- **Tampico** es la de mayor volumen y la más disputada.
- **Ciudad Madero** es donde está la base física, en la Col. Obrera. Eso da una ventaja de
  proximidad que Google pondera y que ningún competidor asentado en Tampico puede replicar.
- **Altamira** es la más desatendida y la que tiene el **puerto industrial**, uno de los
  mayores complejos petroquímicos y logísticos del país. Ahí está el ticket alto: programas
  continuos de control en naves, bodegas y patios de maniobras.

**Recomendación:** empezar por Ciudad Madero y Altamira, donde se gana antes, y usar esa
autoridad para disputar Tampico. Atacar "fumigaciones Tampico" de frente contra Del Golfo,
que lleva 52 años, es la pelea más cara.

### 2.2 El clima define las prioridades de contenido

Esto no es un detalle: es lo que diferencia una web hecha para la zona de una plantilla
genérica. La costa del Golfo es cálida y húmeda todo el año, sin la pausa invernal del
altiplano. Consecuencias directas:

| Plaga | Prioridad | Por qué en esta zona |
|---|---|---|
| **Moscos** | **1** | Lagunas, esteros, río Pánuco y lluvias largas. Además, *Aedes aegypti* y dengue: hay urgencia sanitaria real |
| **Cucarachas** | **1** | La americana sube del drenaje, sobre todo tras las lluvias. Actividad todo el año |
| **Termitas** | **1** | Humedad constante + madera del centro histórico de Tampico. Es endémica aquí |
| **Ratas** | **1** | Presión del puerto, canales y movimiento de mercancía |
| Hormigas, Alacranes, Pulgas, Chinches | 2 | Consulta frecuente o de nicho |
| Arañas, Garrapatas, Moscas | 3 | Cola larga |

**El vocabulario también es SEO.** Aquí se busca *moscos*, no "mosquitos"; y *ratas*, no
"roedores". El catálogo usa los términos del propio negocio, que son los de la región.

### 2.3 Arquitectura implementada

```
/                                    Home — "Fumigación y control de plagas en Tampico"
├── /servicios                       Índice de plagas
│   ├── /servicios/moscos            ▲ prioridad 1
│   ├── /servicios/cucarachas        ▲ prioridad 1
│   ├── /servicios/termitas          ▲ prioridad 1
│   ├── /servicios/ratas             ▲ prioridad 1
│   ├── /servicios/hormigas          ● /alacranes ● /pulgas ● /chinches ●
│   └── /servicios/aranas            ○ /garrapatas ○ /moscas ○
│
├── /cobertura                       Índice de zonas
│   ├── /cobertura/tampico           ▲ mayor volumen
│   ├── /cobertura/ciudad-madero     ▲ base física
│   ├── /cobertura/altamira          ▲ puerto industrial, B2B
│   ├── /cobertura/pueblo-viejo      ● Veracruz, conurbado
│   ├── /cobertura/panuco            ○ agrícola y ganadero
│   └── /cobertura/aldama            ○ frontera urbano/monte
│
├── /nosotros · /contacto
└── /blog                            6 guías de captación
```

**11 plagas × 6 zonas → 29 páginas indexables.**

**Sobre no cruzar todo con todo:** 11 × 6 = 66 páginas del tipo "fumigación de chinches en
Pánuco" sería *doorway spam* y Google lo penaliza explícitamente. La regla aplicada es que
cada página aporte información que no esté en las demás. Por eso cada zona tiene contexto
local propio —el centro histórico de Tampico, la refinería y Playa Miramar en Madero, el
puerto en Altamira, el ganado en Pánuco— y sus colonias.

---

## 3. Lo implementado

### On-page

- **Title de home:** `Fumigaciones en Tampico, Madero y Altamira | 24 h` — 48 caracteres,
  las tres keywords geográficas y el diferenciador operativo.
- **H1:** "Fumigación y control de plagas en Tampico".
- **11 landings de plaga** con metaTitle, metaDescription, H1 propio, señales de detección,
  tratamiento, recomendaciones y FAQs contra dudas reales de compra.
- **6 landings de zona** con contexto local genuino y colonias específicas.
- **6 artículos de blog**, todos con ángulo regional: los criaderos de moscos tras la
  lluvia, las cucarachas que suben del drenaje, por qué el clima del Golfo favorece las
  termitas.
- **Copy propio del negocio**: "Expertos en fumigación", "Eliminamos todas las plagas", "el
  mejor servicio de la zona conurbada", "los mejores precios de la zona", más su misión,
  visión y valores reales.

### Datos estructurados

- `PestControlService` con domicilio de Cd. Madero, **coordenadas**, `openingHoursSpecification`
  24 h, las 8 formas de pago que declara el negocio, `knowsAbout` y `hasOfferCatalog` con
  las 11 plagas.
- `Organization`, `Service` por plaga y por zona, `FAQPage` y `BreadcrumbList`.
- En las zonas, cada colonia se emite como `Place` anidado para capturar cola larga
  geográfica ("fumigación en Ciudad Azteca", "fumigación en Playa Miramar"…).
- **Sin `aggregateRating`.** Deliberado: no hay reseñas y marcarlas es acción manual.

### Técnico

- `geo.region` = `MX-TAM`, `geo.placename` = Ciudad Madero, coordenadas y `ICBM`.
- `robots.ts` bloquea parámetros de campaña y permite explícitamente **GPTBot,
  PerplexityBot, ClaudeBot y Google-Extended**.
- `sitemap.ts` con prioridades derivadas de la estrategia, no planas.
- **Auditoría de longitudes: 29/29 páginas** con title ≤ 60 y description ≤ 160.

### Identidad

- Paleta de marca extraída del CSS histórico y del logo: rojo `#B22222`, amarillo `#E3C600`
  y azul marino `#0B2A52`. Sustituye por completo al verde del template.
- El amarillo es el CTA principal y el rojo el acento, replicando el contraste del logo
  (texto amarillo sobre azul, banner rojo).

---

## 4. Lo que falta y no depende del código

### Prioridad crítica

1. **Dominio.** El negocio no tiene uno. `fumigacioneshernandez.com` está ocupado por la
   empresa de Ecatepec. Hay que registrar uno propio y con señal local: `.mx` es preferible
   a `.com` para un negocio que solo opera en México. El proyecto usa
   `fumigacioneshernandez.mx` como marcador — cambiar en `SITE_URL`.
2. **Google Business Profile.** Es *el* factor decisivo del pack local, por encima de la
   web. Verificar el domicilio de Centenario 503, categoría "Servicio de control de plagas",
   fotos reales, horario y publicaciones periódicas.
3. **Reseñas.** Cero reseñas hoy. Es el mayor freno de conversión y lo que más aceleraría
   el pack local. Pedirlas sistemáticamente al cerrar cada servicio.
4. **NAP coherente** desde el día uno: un teléfono, un correo, un horario, iguales en web,
   GBP y directorios. El negocio arranca limpio; conviene no repetir el error del otro.

### Prioridad alta

5. **COEPRIS.** Si el negocio tiene registro sanitario estatal, publicarlo con folio. Es el
   diferenciador que la competencia de Tampico sí exhibe.
6. **Declarar la antigüedad.** Del Golfo dice 1974 y FumiPlus 20 años. Si Hernández tiene
   una cifra real, es de lo primero que debe aparecer.
7. **Alta en agregadores locales**: infoisinfo Tampico, topfumigaciones, fumigamex, Sección
   Amarilla. Con NAP idéntico. Ocupan primera página y el alta es gratuita.
8. **Fotos propias** del equipo, las unidades y trabajos reales.

### Continuo

9. **Blog**, un artículo cada 2-3 semanas. Ya hay seis publicados con ángulo regional.
10. **Search Console y Analytics** desde el lanzamiento.

---

## 5. Expectativa realista

Ninguna agencia seria promete el top 1-3 con fecha, y menos con un dominio nuevo sin
histórico. Lo que sí se puede afirmar:

| Plazo | Qué es razonable esperar |
|---|---|
| **1-2 meses** | Indexación completa. Aparecer en el pack local de **Ciudad Madero** con el GBP verificado. Posiciones por marca. |
| **3-6 meses** | Top 3 en cola larga: "fumigación en Ciudad Madero", "control de termitas Tampico", "fumigación Altamira". Primeras reseñas trabajando a favor. |
| **6-12 meses** | Competir en cabeza por "fumigaciones Tampico" y consolidar Altamira, incluido el B2B del puerto. |
| **12+ meses** | Disputar el primer puesto a Del Golfo y FumiPlus, si se mantiene el contenido y llega un flujo constante de reseñas. |

**Un dominio nuevo tarda.** Los primeros meses son de construcción de señales, no de
resultados. Lo que más acelera el proceso es el Google Business Profile verificado y las
reseñas, no el sitio.

---

## 6. Resumen ejecutivo

Fumigaciones Hernández lleva **seis años sin presencia web**. Su antiguo sitio de GoDaddy
desapareció con el dominio y hoy compite en una zona donde ocho empresas sí tienen web, dos
de ellas con más de veinte años de trayectoria declarada.

La buena noticia es que ninguna de esas webs es fuerte, y que el negocio tiene tres activos
que sí puede explotar: **está físicamente en Ciudad Madero** (proximidad real que Google
premia), **su copy histórico es bueno** —"expertos en fumigación", "el mejor servicio de la
zona conurbada", "los mejores precios"— y **Altamira, con su puerto industrial, está
desatendida**.

Lo implementado: un sitio con arquitectura de plaga × zona adaptada al clima del Golfo,
datos estructurados completos, identidad recuperada de su propio logo y copy construido
sobre lo que el negocio ya decía de sí mismo. Lo que queda —dominio, GBP, reseñas y
COEPRIS— no es código, pero es donde está la mayor parte del resultado.
