"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/i18n";

/**
 * Keeps <html lang="…"> in sync with the active locale.
 * The root layout renders lang="en" on the server; on the /ms route (and on
 * any client-side navigation) this corrects it to the current locale.
 */
export default function HtmlLangSync() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
