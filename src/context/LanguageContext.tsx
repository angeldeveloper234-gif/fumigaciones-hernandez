'use client'

/* The initial effect intentionally synchronizes the client-only language preference. */
/* eslint-disable react-hooks/set-state-in-effect */

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

export type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function resolveTranslation(language: Language, key: string): string | undefined {
  const keys = key.split('.')
  let result: unknown = translations[language]

  for (const segment of keys) {
    if (typeof result !== 'object' || result === null || !(segment in result)) {
      return undefined
    }

    result = (result as Record<string, unknown>)[segment]
  }

  return typeof result === 'string' ? result : undefined
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
      document.documentElement.lang = savedLanguage
    } else {
      document.documentElement.lang = 'es'
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }

  // Helper function to resolve dot-notation path
  const t = (key: string): string => {
    // During SSR and until component is mounted, default to 'es' to avoid hydration mismatch
    const currentLang = mounted ? language : 'es'
    return resolveTranslation(currentLang, key) ?? resolveTranslation('es', key) ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
