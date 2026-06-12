import { i18n } from "#imports"
import { PageLayout } from "../../components/page-layout"
import { AIContentAware } from "./ai-content-aware"
import { ClearCacheConfig } from "./clear-cache-config"
import { CustomTranslationStyle } from "./custom-translation-style"
import { PageTranslationShortcut } from "./page-translation-shortcut"
import { PersonalizedPrompts } from "./personalized-prompt"
import { PreloadConfig } from "./preload-config"
import { RequestBatch } from "./request-batch"
import { RequestRate } from "./request-rate"
import { SmallParagraphFilter } from "./small-paragraph-filter"
import { TranslateRange } from "./translate-range"
import { TranslationMode } from "./translation-mode"

export function TranslationPage() {
  return (
    <PageLayout title={i18n.t("options.translation.title")} innerClassName="*:border-b [&>*:last-child]:border-b-0">
      <TranslationMode />
      <TranslateRange />
      <PageTranslationShortcut />
      <CustomTranslationStyle />
      <AIContentAware />
      <PersonalizedPrompts />
      <RequestRate />
      <RequestBatch />
      <PreloadConfig />
      <SmallParagraphFilter />
      <ClearCacheConfig />
    </PageLayout>
  )
}
