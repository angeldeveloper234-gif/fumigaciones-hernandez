# Fumigaciones Hernández (Tampico) — Historial y arqueología web

> Documento de investigación. Reconstrucción del sitio histórico del negocio desde 2017
> a partir de Wayback Machine.
>
> Fecha de captura: **27 de julio de 2026**

---

## ⚠️ 0. Lo más importante: hay DOS negocios con el mismo nombre

Esta es la conclusión que ordena todo lo demás, y costó llegar a ella.

| | **Fumigaciones Hernández — TAMPICO** | Fumigaciones Hernández — Ecatepec/CDMX |
|---|---|---|
| **Es el cliente de este proyecto** | ✅ **Sí** | ❌ No |
| Logo | Personaje fumigador, azul/rojo/amarillo | Araña sobre telaraña, azul marino/verde lima |
| Teléfono | **833 383 7323** (LADA Tampico) | 55 5937 2565 (LADA CDMX) |
| Domicilio | Centenario 503, Col. Obrera, Cd. Madero, Tamps. | Calle Malinalli, Ecatepec, Edomex |
| E-mail | fumigacioneshdz@hotmail.com | plagaslhernandez@hotmail.com |
| Zona | Tampico · Madero · Altamira | CDMX · Estado de México |
| Web | GoDaddy Website Builder (2017-2019) | WordPress (2023-hoy) |

**El dominio `fumigacioneshernandez.com` sirvió a los dos.** Fue del negocio de Tampico
entre 2017 y 2019, y desde 2023 lo ocupa el de Ecatepec. No es que la empresa se mudara:
son empresas distintas que compartieron dominio en momentos distintos.

> **Nota sobre el dominio que se pidió inicialmente:** `fumigacioneshernadez.com` —sin la
> segunda **n**— no tiene registro DNS ni capturas en Wayback. Nunca existió. Se verificó
> con `Resolve-DnsName` y con la CDX API sobre todas las variantes.

---

## 1. El sitio histórico de Tampico (2017–2019)

Es la única web propia que ha tenido este negocio, y todo el material recuperado viene de
ahí. Estaba hecha con **GoDaddy Website Builder**.

### Datos de contacto (verificados en la captura de 2018)

```
Domicilio    Centenario 503, Col. Obrera, C.P. 89490
             Ciudad Madero, Tamaulipas
Teléfono     833-189-7935          ← el histórico
E-mail       fumigacioneshdz@hotmail.com
Zona         Tampico · Madero · Altamira
Horario      24 horas (declarado en la versión de 2019)
```

El teléfono del **logo actual es 833 383 7323**, distinto del histórico. Ambos con LADA 833.

### Formas de pago (versión 2019)

Efectivo · Cheque · Visa · MasterCard · American Express · Tarjetas de débito ·
Transferencia electrónica · Depósito bancario

### Paleta de marca (extraída del CSS original)

Los colores del logo **están confirmados en el CSS de las tres capturas 2017-2019**:

| Color | Hex | Apariciones | Uso |
|---|---|---|---|
| **Rojo** | `#B22222` | 14 | El banner del teléfono en el logo |
| **Amarillo** | `#E3C600` | 12 | El wordmark "Fumigaciones Hernández" |
| Gris azulado | `#A9B4BB` | 8 | Fondos |
| Negro | `#000000` | 59 | Texto |
| Blanco | `#FFFFFF` | 16 | Fondos |
| Gris medio | `#505050` | 3 | Texto secundario |

Los azules del personaje y del disco no aparecen en el CSS porque vivían dentro de la
imagen del logo.

> **El logo no es recuperable desde Wayback.** GoDaddy sirve los assets desde
> `nebula.wsimg.com`, y el archivo no los capturó: de las diez imágenes referenciadas solo
> se recuperaron dos iconos genéricos (Facebook y un sobre de contacto). El logo debe
> aportarlo el cliente.

---

## 2. Evolución del sitio

### 2017 · Primera versión · GoDaddy Website Builder 7.0

```
Título   Fumigaciones en Tampico Altamira y Madero — Fumigaciones Hernández
Menú     Inicio · Servicios · Equipo · Contacto
Claim    Expertos en fumigación
Plagas   Moscos · Cucarachas · Termita · Hormigas · Ratas · Pulgas
```

> "Somos Fumigaciones Hernandez una empresa mexicana **originarios de Tampico Tamaulipas**
> dedicados al control y exterminio de plagas."

Incluía un detalle comercial interesante que después se perdió: una tipología de vivienda
para cotizar —**2 Pisos · 3 Habitaciones · Jardín, patio, cochera**—. Es un cotizador por
tamaño en potencia.

### 2018 · Misma estructura, más contenido

```
Plagas   Moscos · Cucarachas · Termita · Hormigas · Ratas · Pulgas · Arañas
Claim    Los mejores precios de la zona
```

Aparece la página de Servicios con el copy más completo que ha tenido el negocio:

> "El mejor servicio de la zona conurbada en exterminio de plagas."
>
> "En Fumigaciones Hernandez nos especializamos en controlar y exterminar plagas como
> moscos, moscas, ratas, ratones, cucarachas, termitas, pulgas, polilla, arañas hormigas y
> muchos insectos más para que su hogar, negocio, oficina o industria se encuentre libre de
> plaga y pueda tener un ambiente limpio y saludable."
>
> "Personal con años de experiencia nos respalda para brindarle el mejor servicio y su
> completa satisfacción."
>
> "Brindamos servicio en las ciudades de Tampico, Madero, Altamira y ciudades cercanas a
> la región."

Y la página de Equipo:

> "En Fumigaciones Hernandez contamos con el mejor equipo y productos en el mercado para
> brindarle un excelente servicio."

### Nov 2019 · Rediseño · GoDaddy Website Builder 8.0

```
Título   Fumigaciones en Madero, Tamaulipas | 4000021876gc
Menú     Inicio · Servicios · Nosotros · Galería · Contacto
```

El `4000021876gc` del `<title>` es un **ID interno de GoDaddy** que se quedó pegado: señal
de sitio montado deprisa y nunca revisado.

Aporta la misión, visión y valores, que son material propio y reutilizable:

> **Misión** — Atender a cada uno de nuestros clientes, basándonos en sus intereses y
> preocupaciones en Fumigaciones.
>
> **Visión** — Convertirnos, en un período de 3 años, en referentes en la industria de la
> fumigación.
>
> **Valores** — Franqueza · Puntualidad · Servicio · Voluntad

Y la estructura de servicios por tipo de inmueble: **Fumigación de Casas · de Comercios ·
de Industrias**.

### 2020 en adelante · Sin sitio propio

El dominio pasa a manos del negocio de Ecatepec. **Desde 2020 la Fumigaciones Hernández de
Tampico no tiene presencia web propia**, solo el logo con el teléfono nuevo.

### Resumen

```
2017 ──── 2018 ──── 2019 ──── 2020 ─────────────────── 2026
 │         │         │         │                         │
GoDaddy   GoDaddy   GoDaddy   sin sitio propio      este proyecto
 7.0       7.0       8.0
 └──────── TAMPICO · MADERO · ALTAMIRA ────────────────────┘
           Tel. 833-189-7935          Tel. 833 383 7323
```

---

## 3. Qué hay guardado en `_archivo-original/`

```
_archivo-original/
├── wayback/                          El sitio histórico de Tampico
│   ├── home-2017-20170709132339.html      primera versión
│   ├── home-2017-20171001023822.html
│   ├── home-2018-20180816040012.html
│   ├── home-2019-20190127144910.html
│   ├── home-2019-20191114060422.html      rediseño GoDaddy 8.0
│   ├── cdx-inventario.txt                 147 URLs indexadas
│   └── internas/
│       ├── 2018-contacto.html             ← domicilio y e-mail
│       ├── 2018-equipo.html
│       ├── 2018-servicios.html            ← el mejor copy
│       ├── 2019-contacto.html             ← formas de pago, 24 h
│       ├── 2019-nosotros.html             ← misión, visión, valores
│       └── 2019-servicios.html            ← casas / comercios / industrias
│
├── html/ · img/ · api/               ⚠️ Material del OTRO negocio (Ecatepec)
└── wayback/home-2023..2025           ⚠️ Ídem
```

> **Aviso:** las carpetas `html/`, `img/` y `api/` y los snapshots de 2023 en adelante
> pertenecen a la **Fumigaciones Hernández de Ecatepec/CDMX**, no a este cliente. Se
> conservan porque documentan quién ocupa hoy el dominio `.com`, pero su contenido, su logo
> (la araña) y sus datos **no deben usarse en este proyecto**.

---

## 4. Cómo consultar el historial tú mismo

Para recuperar capturas sin que el visor de Wayback redirija, se usa el sufijo **`id_`**
después del timestamp, que devuelve el HTML original sin reescribir:

```bash
curl "https://web.archive.org/web/20180816040012id_/http://www.fumigacioneshernandez.com/"
```

Para listar todo lo indexado de un dominio:

```bash
curl "http://web.archive.org/cdx/search/cdx?url=fumigacioneshernandez.com&matchType=domain&fl=timestamp,original,statuscode&collapse=urlkey"
```

Y para ver solo las versiones realmente distintas del home:

```bash
curl "http://web.archive.org/cdx/search/cdx?url=fumigacioneshernandez.com&fl=timestamp,statuscode&collapse=digest&filter=statuscode:200"
```

> Un `503` es rate limit de Wayback, no un bloqueo. Espera y reintenta.

**Lo que no funcionó:** las imágenes de sitios GoDaddy cuelgan de `nebula.wsimg.com` con un
hash y una `AccessKeyId`. Wayback no las archivó y el CDN ya no las sirve. Si un sitio
histórico está hecho con GoDaddy, da por perdidos sus assets gráficos.

---

## 5. Conclusiones para el mockup

**Lo que se conserva** (es real y es bueno):

- El **logo** del personaje fumigador y su paleta: rojo `#B22222`, amarillo `#E3C600` y los
  azules del disco.
- El **domicilio real**: Centenario 503, Col. Obrera, Cd. Madero.
- Las **frases propias del negocio**: "Expertos en fumigación", "Eliminamos todas las
  plagas", "El mejor servicio de la zona conurbada", "Los mejores precios de la zona".
- La **misión, visión y valores** de 2019.
- El **listado de plagas** tal como ellos lo enuncian, con su vocabulario: *moscos* (no
  mosquitos), *ratas* (no roedores).
- La estructura **casas / comercios / industrias**.
- La **atención 24 horas** y las formas de pago.

**Lo que hay que confirmar con el cliente:**

- Si el teléfono histórico `833 189 7935` sigue activo además del `833 383 7323`.
- Si el horario 24 h sigue vigente.
- La antigüedad real del negocio: el sitio solo decía "personal con años de experiencia",
  nunca una cifra.

El copy completo está en [`hernandez_copy.md`](hernandez_copy.md) y la estrategia de
posicionamiento en [`hernandez_seo.md`](hernandez_seo.md).
