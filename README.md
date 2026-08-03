# Fumigaciones Hernández — Tampico, Madero y Altamira

Sitio en Next.js (App Router) para **Fumigaciones Hernández**, empresa de control y
exterminio de plagas con base en **Ciudad Madero, Tamaulipas**, y cobertura en toda la zona
conurbada del sur del estado.

Es un clon de `fumcon-mejorado` con la identidad, el contenido y el SEO adaptados.

> ⚠️ **Existen dos negocios con este nombre.** Este proyecto es para el de **Tampico /
> Ciudad Madero** (tel. 833 383 7323, logo del personaje fumigador). El dominio
> `fumigacioneshernandez.com` lo ocupa hoy una empresa homónima de **Ecatepec/CDMX** que no
> tiene relación con este cliente. Ver [`hernandez_historial.md`](hernandez_historial.md) §0.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda en [http://localhost:3005](http://localhost:3005). Cada mockup tiene su
puerto (Fumcon 3001, Biocop 3002, 3M 3003, Faunex 3004), así que pueden correr a la vez.

Para navegar el **sitio histórico archivado** en local:

```bash
npx --yes http-server ./_archivo-original/wayback -p 8898
```

## Logo

El logo oficial está en `public/logo.png` (640×640) y replicado como
`public/hernandez-logo.png` y `public/hernandez-fav.png`, que son los que consume
`SITE.logo`. Lo aportó el cliente: Wayback no archivó los assets de GoDaddy del sitio
histórico.

## Documentación

| Documento | Contenido |
| --- | --- |
| [`hernandez_seo.md`](hernandez_seo.md) | **Estrategia de posicionamiento**: competencia de la zona, prioridades por clima, arquitectura y plan |
| [`hernandez_historial.md`](hernandez_historial.md) | Los dos negocios homónimos, el sitio de 2017-2019 y cómo se recuperó |
| [`hernandez_copy.md`](hernandez_copy.md) | Copy real del negocio + el implementado en el sitio |

## Estructura clave

| Archivo | Qué controla |
| --- | --- |
| `src/lib/site.ts` | Identidad, NAP, paleta `BRAND` y cobertura |
| `src/lib/translations.ts` | Copy de la home (`HERNANDEZ_HOME`) |
| `src/lib/services.ts` | Las 11 plagas y los servicios por tipo de inmueble |
| `src/lib/locations.ts` | Las 6 zonas con contexto local y colonias |
| `src/lib/blog.ts` | Los 6 artículos de captación |
| `src/lib/structured-data.ts` | Datos estructurados (LocalBusiness, Service, FAQ, Breadcrumb) |
| `src/app/globals.css` | Tokens de diseño y paleta de marca |

## Paleta

Muestreada píxel a píxel del **logo oficial** (`public/logo.png`). Coincide con el CSS de
su sitio 2017-2019, donde el rojo era `#B22222` y el amarillo `#E3C600`: la marca ha sido
coherente durante casi diez años.

| Token | Valor | Uso |
| --- | --- | --- |
| Rojo | `#B41B1E` | Banner del teléfono en el logo · acentos sobre fondo claro |
| Amarillo | `#FFDF00` | Wordmark del logo · CTA principal, iconos |
| Azul | `#3154A5` | Disco y uniforme del personaje |
| Azul marino | `#1C3266` | Fondos oscuros: hero, footer (derivado) |
| Rojo claro | `#F07070` | Acentos sobre fondo oscuro |
| Amarillo claro | `#FFE95C` | Texto de acento sobre oscuro |

El amarillo es el CTA y el rojo el acento, replicando el contraste del logo: texto amarillo
sobre azul, banner rojo con números amarillos.

## Contacto

```
Domicilio     Centenario 503, Col. Obrera, C.P. 89490
              Ciudad Madero, Tamaulipas
Teléfono      833 383 7323
Tel. anterior 833 189 7935   (confirmar si sigue activo)
E-mail        fumigacioneshdz@hotmail.com
Horario       24 horas
Cobertura     Tampico · Ciudad Madero · Altamira · Pueblo Viejo · Pánuco · Aldama
```

## SEO

Estrategia completa en [`hernandez_seo.md`](hernandez_seo.md). En corto:

El negocio **lleva seis años sin presencia web**. Se parte de cero, pero sin
canibalización ni datos contradictorios que arreglar.

La estrategia prioriza **Ciudad Madero** (donde está la base física y hay ventaja de
proximidad) y **Altamira** (puerto industrial desatendido, ticket alto B2B), para desde ahí
disputar "fumigaciones Tampico", que es la keyword más competida de la zona.

Las prioridades de contenido las marca el clima del Golfo: **moscos, cucarachas, termitas y
ratas** activas todo el año, sin pausa invernal.

Arquitectura: **11 plagas × 6 zonas**, 29 páginas estáticas.

| Elemento | Estado |
| --- | --- |
| Titles ≤ 60 y descriptions ≤ 160 | 29/29 páginas auditadas ✓ |
| H1 único por página | ✓ |
| `PestControlService` con geo, horario 24 h, pagos y catálogo | ✓ |
| `Organization`, `Service`, `FAQPage`, `BreadcrumbList` | ✓ |
| Colonias como `Place` anidado (cola larga geográfica) | ✓ |
| `aggregateRating` | **Deliberadamente ausente** hasta tener reseñas reales |
| Sitemap con prioridades derivadas de la estrategia | 29 URLs ✓ |
| Robots: bloqueo de `utm_`/`fbclid` + permiso a rastreadores de IA | ✓ |
| Meta `geo.region` MX-TAM / `geo.position` / `ICBM` | ✓ |

## Pendientes de confirmar con el cliente

### Datos

- **Teléfono**: ¿sigue activo el `833 189 7935` además del `833 383 7323` del logo?
- **Horario**: ¿siguen atendiendo 24 h, como decía el sitio de 2019?
- **Domicilio**: confirmar Centenario 503, Col. Obrera.
- **Antigüedad**: el sitio nunca dio cifra. La competencia sí (Del Golfo 1974, FumiPlus 20
  años), así que es un argumento que hoy se está perdiendo.
- **Razón social**: no aparece en ninguna fuente.

### Material

- **Registro COEPRIS** — la autoridad sanitaria de Tamaulipas. Rangel lo publica y FumiPlus
  habla de "certificados oficiales". Si Hernández lo tiene, publicarlo con folio.
- **Dominio propio** — el proyecto usa `fumigacioneshernandez.mx` como marcador.
- **Reseñas en Google** — no hay ninguna. Es el mayor freno de conversión.
- **Fotos propias** del equipo, unidades y trabajos.
- **Fotos de chinches, pulgas y moscas** — esas tres landings usan placeholders.
- **Precios o rangos** — el claim es "los mejores precios de la zona" sin ninguna cifra.

## Variables de entorno

```env
SITE_URL=https://fumigacioneshernandez.mx
NEXT_PUBLIC_WEB3FORMS_KEY=
NEXT_PUBLIC_WEB3FORMS_KEY_FRANCHISE=
```
