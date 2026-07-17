"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Dictionary, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "locale";
const validLocales: Locale[] = ["en", "fr", "de", "nl", "ar"];

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
}>({
  locale: "en",
  setLocale: () => {},
  dict: dictionaries.en,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && validLocales.includes(stored as Locale)) {
      setLocaleState(stored as Locale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dictionaries[locale].dir;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dict: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
