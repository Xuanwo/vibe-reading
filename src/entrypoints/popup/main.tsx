import "@/utils/zod-config"
import type { Config } from "@/types/config/config"
import type { ThemeMode } from "@/types/config/theme"
import { QueryClientProvider } from "@tanstack/react-query"
import { Provider as JotaiProvider } from "jotai"
import { useHydrateAtoms } from "jotai/utils"
import * as React from "react"
import { browser } from "#imports"
import AppToast from "@/components/app-toast"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { RecoveryBoundary } from "@/components/recovery/recovery-boundary"
import { TooltipProvider } from "@/components/ui/base-ui/tooltip"
import { configAtom } from "@/utils/atoms/config"
import { baseThemeModeAtom } from "@/utils/atoms/theme"
import { getLocalConfig } from "@/utils/config/storage"
import { DEFAULT_CONFIG } from "@/utils/constants/config"
import { sendMessage } from "@/utils/message"
import { renderPersistentReactRoot } from "@/utils/react-root"
import { queryClient } from "@/utils/tanstack-query"
import { getLocalThemeMode } from "@/utils/theme"
import App from "./app"
import { isPageTranslatedAtom } from "./atoms/auto-translate"
import { isIgnoreTabAtom, isIgnoreUrl } from "./atoms/ignore"
import "@/assets/styles/text-small.css"
import "@/assets/styles/theme.css"

function HydrateAtoms({
  initialValues,
  children,
}: {
  initialValues: [
    [typeof configAtom, Config],
    [typeof isPageTranslatedAtom, boolean],
    [typeof isIgnoreTabAtom, boolean],
    [typeof baseThemeModeAtom, ThemeMode],
  ]
  children: React.ReactNode
}) {
  useHydrateAtoms(initialValues)
  return children
}

async function initApp() {
  const root = document.getElementById("root")!
  root.className = "text-base antialiased w-[320px] bg-background"

  const [configValue, themeMode, activeTab] = await Promise.all([
    getLocalConfig(),
    getLocalThemeMode(),
    browser.tabs.query({
      active: true,
      currentWindow: true,
    }),
  ])
  const config = configValue ?? DEFAULT_CONFIG

  const tabId = activeTab[0].id

  let isPageTranslated: boolean = false
  if (tabId) {
    isPageTranslated
      = (await sendMessage("getEnablePageTranslationByTabId", {
        tabId,
      })) ?? false
  }

  const activeTabUrl = activeTab[0]?.url || ""
  const isIgnoreTab = isIgnoreUrl(activeTabUrl)

  renderPersistentReactRoot(root, (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>
          <HydrateAtoms
            initialValues={[
              [configAtom, config],
              [isPageTranslatedAtom, isPageTranslated],
              [isIgnoreTabAtom, isIgnoreTab],
              [baseThemeModeAtom, themeMode],
            ]}
          >
            <ThemeProvider>
              <TooltipProvider>
                <AppToast />
                <RecoveryBoundary>
                  <App />
                </RecoveryBoundary>
              </TooltipProvider>
            </ThemeProvider>
          </HydrateAtoms>
        </JotaiProvider>
      </QueryClientProvider>
    </React.StrictMode>
  ))
}

void initApp()
