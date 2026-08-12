import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Crumb {
  name: string
  /** Ruta absoluta del sitio. El último elemento la usa solo para el JSON-LD. */
  path: string
}

/**
 * Migas de pan visibles.
 *
 * El sitio ya emitía `BreadcrumbList` en JSON-LD desde varias páginas, pero no
 * mostraba las migas en pantalla. Declarar en el marcado una jerarquía que la
 * persona no ve es, como mínimo, marcado que no refleja la página.
 *
 * El último elemento es texto, no enlace —no se enlaza a la página donde uno
 * ya está— y lleva `aria-current="page"`. Los separadores son decorativos.
 *
 * El JSON-LD lo emite cada página con `breadcrumbSchema(items)` usando la
 * misma lista, para que marcado y pantalla no se puedan desincronizar.
 */
export function Breadcrumb({
  items,
  className,
  tone = 'light',
}: {
  items: readonly Crumb[]
  className?: string
  /** `dark` para fondos oscuros. */
  tone?: 'light' | 'dark'
}) {
  const muted = tone === 'dark' ? 'text-white/70' : 'text-[#3E4650]'
  const link =
    tone === 'dark'
      ? 'text-white/85 hover:text-[#FFDF00]'
      : 'text-[#1C3266] hover:text-[#B41B1E]'

  return (
    <nav aria-label="Migas de pan" className={cn('text-xs', className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={cn('font-semibold', muted)}>
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className={cn(
                      'font-semibold underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2',
                      link,
                    )}
                  >
                    {item.name}
                  </Link>
                  <ChevronRight
                    aria-hidden="true"
                    className={cn('size-3 shrink-0', muted)}
                  />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
