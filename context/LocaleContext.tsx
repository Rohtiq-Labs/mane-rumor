"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type ReactElement,
} from "react";
import { getDictionary, type Dictionary, type Locale } from "@/dictionaries";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  defaultLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  defaultLocale = "en",
}: LocaleProviderProps): ReactElement => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const dictionary = getDictionary(locale);

  return (
    <LocaleContext.Provider value={{ locale, dictionary, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
