'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FaqItem {
  question: string
  answer: string
}

/**
 * Acordeón de preguntas frecuentes.
 *
 * Sigue el patrón de acordeón de WAI-ARIA: el disparador es un `<button>`
 * real, así que responde a Enter, Espacio y Tab sin código extra, y declara
 * `aria-expanded` y `aria-controls`. El panel es un `role="region"` etiquetado
 * por su botón.
 *
 * El panel cerrado usa el atributo `hidden`, no un `display:none` de CSS. La
 * diferencia importa para lo que se pide acá: `hidden` saca el contenido del
 * árbol de accesibilidad —que es lo correcto, porque está colapsado— pero lo
 * deja escrito en el HTML que sirve el servidor. Un rastreador lee el
 * documento, no el árbol de accesibilidad: las respuestas se indexan estén
 * abiertas o cerradas.
 *
 * Por eso también el estado inicial puede ser "todas cerradas" sin costo de
 * SEO. Se abre la primera para que se entienda que el bloque es desplegable.
 */
export function Faq({
  items,
  className,
  defaultOpen = 0,
}: {
  items: readonly FaqItem[]
  className?: string
  /** Índice abierto al cargar. `null` para arrancar con todas cerradas. */
  defaultOpen?: number | null
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const baseId = useId()

  return (
    <div className={cn('divide-y divide-black/10 border-y border-black/10', className)}>
      {items.map((item, i) => {
        const expanded = open === i
        const buttonId = `${baseId}-q${i}`
        const panelId = `${baseId}-a${i}`

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-start justify-between gap-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C3266]"
              >
                <span className="t-h3 text-[#212121]">{item.question}</span>
                <Plus
                  aria-hidden="true"
                  className={cn(
                    'mt-1 size-5 shrink-0 text-[#1C3266] transition-transform duration-200',
                    expanded && 'rotate-45',
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
            >
              <p className="t-body-sm max-w-prose pb-5 text-[#3E4650]">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
