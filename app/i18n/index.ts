"use client";
import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import cookies from "js-cookie";
import {
    initReactI18next,
    useTranslation as useTranslationOrg,
} from "react-i18next";
import { fallbackLng, getOptions } from "./settings";

i18next
    .use(initReactI18next)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) =>
                import(`./locales/${language}/${namespace}.json`)
        )
    )
    .init(getOptions());

export function useTranslation(ns?: string[] | string, options: any = {}) {
    const savedLng = cookies.get("language") ?? 'auto';
    const lng = 'auto' === savedLng ? navigator.language : savedLng ?? fallbackLng;
    if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng);
    return useTranslationOrg(ns, options);
}
