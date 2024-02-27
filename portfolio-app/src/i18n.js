import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Chemin correct vers les traductions
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
