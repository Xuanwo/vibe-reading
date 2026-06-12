import type { GeneratedI18nStructure } from "#i18n"

type I18nKey = keyof GeneratedI18nStructure

export interface SearchItem {
  sectionId: string
  route: string
  titleKey: string
  descriptionKey?: string
  pageKey: string
}

type SearchItemDefinition = Omit<SearchItem, "titleKey" | "descriptionKey" | "pageKey"> & {
  titleKey: I18nKey
  descriptionKey?: I18nKey
  pageKey: I18nKey
}

export const SEARCH_ITEMS: SearchItem[] = [
  {
    sectionId: "feature-providers",
    route: "/",
    titleKey: "options.general.featureProviders.title",
    descriptionKey: "options.general.featureProviders.description",
    pageKey: "options.general.title",
  },
  {
    sectionId: "appearance",
    route: "/",
    titleKey: "options.general.appearance.title",
    descriptionKey: "options.general.appearance.theme",
    pageKey: "options.general.title",
  },
  {
    sectionId: "api-providers",
    route: "/api-providers",
    titleKey: "options.apiProviders.title",
    descriptionKey: "options.apiProviders.description",
    pageKey: "options.apiProviders.title",
  },
  {
    sectionId: "translation-mode",
    route: "/translation",
    titleKey: "options.translation.translationMode.title",
    descriptionKey: "options.translation.translationMode.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "translate-range",
    route: "/translation",
    titleKey: "options.translation.translateRange.title",
    descriptionKey: "options.translation.translateRange.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "page-translation-shortcut",
    route: "/translation",
    titleKey: "options.translation.pageTranslationShortcut.title",
    descriptionKey: "options.translation.pageTranslationShortcut.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "custom-translation-style",
    route: "/translation",
    titleKey: "options.translation.translationStyle.title",
    descriptionKey: "options.translation.translationStyle.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "ai-content-aware",
    route: "/translation",
    titleKey: "options.translation.aiContentAware.title",
    descriptionKey: "options.translation.aiContentAware.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "personalized-prompts",
    route: "/translation",
    titleKey: "options.translation.personalizedPrompts.title",
    descriptionKey: "options.translation.personalizedPrompts.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "request-rate",
    route: "/translation",
    titleKey: "options.translation.requestQueueConfig.title",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "request-batch",
    route: "/translation",
    titleKey: "options.translation.batchQueueConfig.title",
    descriptionKey: "options.translation.batchQueueConfig.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "preload-config",
    route: "/translation",
    titleKey: "options.translation.preloadConfig.title",
    descriptionKey: "options.translation.preloadConfig.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "small-paragraph-filter",
    route: "/translation",
    titleKey: "options.translation.smallParagraphFilter.title",
    descriptionKey: "options.translation.smallParagraphFilter.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "clear-cache",
    route: "/translation",
    titleKey: "options.general.clearCache.title",
    descriptionKey: "options.general.clearCache.description",
    pageKey: "options.translation.title",
  },
  {
    sectionId: "reset-config",
    route: "/config",
    titleKey: "options.config.resetConfig.title",
    descriptionKey: "options.config.resetConfig.description",
    pageKey: "options.config.title",
  },
] satisfies SearchItemDefinition[]
