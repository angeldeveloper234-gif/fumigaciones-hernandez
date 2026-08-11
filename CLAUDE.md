@AGENTS.md

# CLAUDE.md — fumigaciones-hernandez

Archivo de contexto permanente del repo. Claude Code lo lee solo en cada sesión.
No repitas esta información en los prompts de fase.

---

## 1. Qué es este proyecto

Sitio de una empresa real de control de plagas en la zona conurbada del sur de
Tamaulipas, México. Producción: https://fumigaciones-hernandez.netlify.app

Está construido sobre el mismo template base que `fumcon-next` (otro cliente del
estudio). **Hoy es prácticamente un clon con el contenido cambiado.** El trabajo
de este ciclo es que deje de serlo y que escale a 30+ URLs indexables.

Deadline de entrega: jueves.

## 2. Stack

- Next.js (App Router) + Tailwind + TypeScript
- Deploy en Netlify
- Antes de asumir cualquier cosa del stack, leelo del repo: `package.json`,
  `next.config.*`, `tailwind.config.*`, `src/app/**`.

**No hardcodees la paleta, las fuentes ni los tokens de diseño en tus prompts
mentales: leelos de `tailwind.config` y de los componentes existentes.** Si un
valor no existe como token, creá el token; no metas hex sueltos en el JSX.

## 3. Datos reales — NUNCA inventar ni alterar

| Dato | Valor |
|---|---|
| Teléfono / WhatsApp | 833 383 7323 |
| Email | fumigacioneshdz@hotmail.com |
| Oficina | Centenario 503, Col. Obrera, C.P. 89490, Ciudad Madero, Tamaulipas |
| Base operativa | Calle Malinalli M-5 LT-11, Cd. Cuauhtémoc, Tampico, Tamaulipas |
| Horario | Lunes a sábado 8:00–17:00 · Atención 24 horas |

Si necesitás un dato que no está en esta tabla (RFC, número de licencia COFEPRIS,
años de experiencia, cantidad de clientes, tiempo de respuesta garantizado):
**no lo inventes.** Dejá un marcador `{{PENDIENTE: ...}}` y listalo al final de tu
respuesta para que el cliente lo confirme.

## 4. Arquitectura de rutas actual

```
/                                  home
/nosotros
/servicios                         índice
/servicios/[plaga]                 11 páginas
/cobertura                         índice
/cobertura/[zona]                  6 páginas
/blog                              índice + posts
/contacto
```

**Plagas (11)** — slugs actuales, no los cambies sin redirect:
`moscos`, `cucarachas`, `termitas`, `ratas`, `hormigas`, `alacranes`, `pulgas`,
`chinches`, `aranas`, `garrapatas`, `moscas`

**Zonas (6)**: `tampico`, `ciudad-madero`, `altamira`, `pueblo-viejo`, `panuco`,
`aldama`. Las tres primeras son las zonas núcleo del negocio; las otras tres son
cobertura secundaria y reciben menos profundidad de contenido.

Cualquier cambio de slug exige un `redirect` 301 en `next.config`. No rompas URLs
que ya están indexadas.

## 5. Reglas de contenido (aplican a todo el sitio)

1. **Español de México, trato de usted. Sin voseo, sin "vos", sin "tenés".**
2. **Prohibido inventar prueba social.** Nada de testimonios, reseñas, nombres de
   clientes, estrellas, ni "más de X clientes satisfechos". La sección de
   testimonios se reemplaza por señales de confianza verificables (atención 24
   horas, cotización sin costo, garantía de servicio, cobertura de la zona
   conurbada, productos autorizados) o queda como placeholder vacío marcado en el
   código con `{{PENDIENTE: reseñas reales de Google}}`.
3. **Prohibido inventar datos duros.** Nada de porcentajes, estadísticas,
   "según la Secretaría de Salud", cifras de incidencia, ni citas a autoridades,
   salvo que puedas nombrar la fuente exacta y esta sea real. Ante la duda,
   escribí la afirmación en términos cualitativos y verificables
   ("la temporada de lluvias aumenta la actividad de mosquitos") en lugar de
   cuantitativos inventados ("aumenta 340%").
4. **Prohibido prometer resultados médicos o de erradicación absoluta.** Nada de
   "elimina el dengue", "erradicación garantizada 100%".
5. Contenido único por página. Si dos páginas comparten párrafos, están mal.
6. No uses imágenes con logo de competidoras, ni las imágenes que ya usa
   `fumcon-next`.

## 6. Reglas de código

- Producción: responsive real (probá 360px, 768px, 1280px), estados de carga y
  error donde aplique, sin `console.log` olvidados.
- Accesibilidad: contraste mínimo AA (4.5:1) en todo texto sobre imagen; `alt`
  descriptivo en cada imagen; acordeones operables por teclado con `aria-expanded`.
- Performance: el sitio vive de búsquedas locales en móvil. No agregues librerías
  de animación ni fuentes extra sin justificarlo. Imágenes siempre vía
  `next/image`; `priority` solo en el LCP.
- Reutilizá los componentes que ya existen antes de crear nuevos. Si creás uno,
  que sea tipado y con props explícitas.
- Sin dependencias nuevas sin avisar primero.

## 7. Cómo trabajás en este repo

- Una fase por sesión. No adelantes trabajo de fases posteriores.
- Antes de escribir código: leé los archivos que vas a tocar y decime en 5 líneas
  qué vas a cambiar y dónde.
- **Mostrá el diff antes de commitear.**
- `npm run lint` y `npm run build` deben pasar. Si `build` falla, arreglalo antes
  de commitear; no commitees "para arreglar después".
- Un commit por fase, mensaje en español, imperativo, con alcance.
  Ej: `feat(home): reduce escala tipográfica y agrega fondos por sección`
- Al final de cada fase, entregá:
  1. archivos tocados,
  2. qué quedó pendiente,
  3. la lista de `{{PENDIENTE: ...}}` que dejaste en el código.

## 8. Prohibiciones absolutas

- No tocar los datos de contacto de la sección 3.
- No borrar ni renombrar rutas existentes sin redirect 301.
- No generar reseñas, testimonios ni valoraciones falsas.
- No inventar estadísticas, certificaciones, licencias ni premios.
- No copiar textos de fumcon-next ni de sitios de la competencia.
- No hacer `git push --force` ni reescribir historia.
