import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import it from "./locales/it.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: it },
      en: { translation: en },
    },
    fallbackLng: "en",
    supportedLngs: ["it", "en"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "shieldiq_lang",
    },
  });

/**
 * Geo-IP based language detection.
 * Runs once on app load. If user has not manually selected a language,
 * detects the visitor's country and sets EN for non-Italian visitors.
 */
export const detectLanguageByGeo = async () => {
  // Skip if user already manually chose a language
  if (localStorage.getItem("shieldiq_lang_manual") === "true") return;

  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    const country: string | undefined = data?.country_code;
    if (!country) return;
    const lang = country === "IT" ? "it" : "en";
    if (i18n.language !== lang) {
      await i18n.changeLanguage(lang);
      localStorage.setItem("shieldiq_lang", lang);
    }
  } catch {
    // Silently fail — fallback to browser/localStorage detection
  }
};

export default i18n;
