import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Cookie, X } from "lucide-react";

type Prefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "shieldiq_cookie_consent_v1";

export const getCookiePrefs = (): Prefs | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
};

const CookieBanner = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    if (!getCookiePrefs()) setOpen(true);
  }, []);

  const save = (p: Prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setOpen(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => save(prefs);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 animate-fade-in">
      <div className="mx-auto max-w-3xl rounded-2xl border border-electric/30 bg-card/95 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-3 flex items-start gap-3">
          <Cookie className="mt-1 h-5 w-5 flex-shrink-0 text-electric" />
          <div className="flex-1">
            <h3 className="text-base font-bold text-foreground">{t("cookie.title")}</h3>
            <p className="mt-2 text-sm text-text-secondary">{t("cookie.description")}</p>
          </div>
          <button
            onClick={rejectAll}
            aria-label="Close"
            className="text-text-secondary transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {showCustomize && (
          <div className="my-4 space-y-3 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{t("cookie.necessary")}</p>
                <p className="text-xs text-text-secondary">{t("cookie.necessaryDesc")}</p>
              </div>
              <Switch checked disabled />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{t("cookie.analytics")}</p>
                <p className="text-xs text-text-secondary">{t("cookie.analyticsDesc")}</p>
              </div>
              <Switch
                checked={prefs.analytics}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{t("cookie.marketing")}</p>
                <p className="text-xs text-text-secondary">{t("cookie.marketingDesc")}</p>
              </div>
              <Switch
                checked={prefs.marketing}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/cookie-policy"
            className="text-xs font-medium text-electric hover:underline"
          >
            {t("cookie.readMore")} →
          </Link>
          <div className="flex flex-col gap-2 sm:flex-row">
            {!showCustomize ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setShowCustomize(true)}
                  className="border-border bg-transparent text-foreground hover:bg-secondary"
                >
                  {t("cookie.customize")}
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="border-border bg-transparent text-foreground hover:bg-secondary"
                >
                  {t("cookie.reject")}
                </Button>
                <Button
                  onClick={acceptAll}
                  className="gradient-electric text-primary-foreground hover:opacity-90"
                >
                  {t("cookie.accept")}
                </Button>
              </>
            ) : (
              <Button
                onClick={saveCustom}
                className="gradient-electric text-primary-foreground hover:opacity-90"
              >
                {t("cookie.save")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
