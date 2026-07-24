'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight } from 'lucide-react'

// Principales ciudades donde operamos — ejemplos de nuestra cobertura nacional
const AREAS = [
  'Ciudad de México', 'Estado de México', 'Guadalajara', 'Monterrey',
  'Puebla', 'Querétaro', 'Cuernavaca', 'León',
  'Mérida', 'Cancún', 'Tijuana', 'Toluca',
  'Aguascalientes', 'San Luis Potosí', 'Veracruz', 'Y todo el país'
]

export function Locations() {
  const { language } = useLanguage()
  const isES = language === 'es'

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-[#F8F9FA] border-t border-[#E5E8EC]" id="cobertura">
      <div className="container max-w-4xl">
        
        <FadeUp>
          <div className="text-center mb-10">
            <h2 className="text-[#212121] text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight">
              {isES ? 'Cobertura Nacional' : 'Nationwide Coverage'}
            </h2>
            <div className="w-48 h-0.5 bg-[#19D42B] mx-auto mb-6" />
            <p className="text-[#19D42B] italic font-medium text-sm md:text-base max-w-[70ch] mx-auto leading-relaxed">
              {isES
                ? 'Atendemos hogares y empresas en todo México. Sin importar dónde te encuentres, llevamos nuestro servicio profesional de control de plagas hasta tu puerta.'
                : 'We serve homes and businesses across all of Mexico. Wherever you are, we bring our professional pest control service right to your door.'}
            </p>
          </div>
        </FadeUp>

        {/* Areas List Grid */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-3 mb-10 max-w-3xl mx-auto pl-4 md:pl-0">
            {AREAS.map((area, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-[#5A6070]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19D42B] shrink-0" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* CTA Button */}
        <FadeUp delay={0.2}>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 bg-[#19D42B] hover:bg-[#13AA23] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-all duration-200 uppercase tracking-wider group cursor-pointer"
            >
              <span>{isES ? 'Iniciar mi Cotización' : 'Start a Quote'}</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
