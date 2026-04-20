import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("it") ? "it" : "en";

  const change = (lng: "it" | "en") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("shieldiq_lang", lng);
    localStorage.setItem("shieldiq_lang_manual", "true");
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background/50 px-2 py-1 text-xs">
      <Globe className="h-3 w-3 text-text-secondary" />
      <button
        onClick={() => change("it")}
        className={`rounded-full px-2 py-0.5 font-semibold transition-colors ${
          current === "it" ? "bg-electric text-primary-foreground" : "text-text-secondary hover:text-foreground"
        }`}
        aria-label="Italiano"
      >
        IT
      </button>
      <button
        onClick={() => change("en")}
        className={`rounded-full px-2 py-0.5 font-semibold transition-colors ${
          current === "en" ? "bg-electric text-primary-foreground" : "text-text-secondary hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
