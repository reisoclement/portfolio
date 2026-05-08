import { createContext, useContext, type ReactNode } from "react";
import { getDict, type Dict, type Locale } from "./i18n";

type LocaleContextValue = { locale: Locale; t: Dict };

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider: React.FC<{
  locale: Locale;
  children: ReactNode;
}> = ({ locale, children }) => {
  return (
    <LocaleContext.Provider value={{ locale, t: getDict(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
};

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    // Default to English so scenes still render under Studio / tests without
    // an explicit context.
    return { locale: "en", t: getDict("en") };
  }
  return ctx;
}
