export const ANALYTICS_FEATURE = {
  PAGE_TRANSLATION: "page_translation",
} as const

export type AnalyticsFeature = (typeof ANALYTICS_FEATURE)[keyof typeof ANALYTICS_FEATURE]

export const ANALYTICS_FEATURES = Object.values(ANALYTICS_FEATURE)

export const ANALYTICS_SURFACE = {
  POPUP: "popup",
  SHORTCUT: "shortcut",
  TOUCH_GESTURE: "touch_gesture",
} as const

export type AnalyticsSurface = (typeof ANALYTICS_SURFACE)[keyof typeof ANALYTICS_SURFACE]

export type AnalyticsOutcome = "success" | "failure"

export interface FeatureUsageContext {
  feature: AnalyticsFeature
  surface: AnalyticsSurface
  startedAt: number
}

export interface FeatureUsedEventProperties {
  feature: AnalyticsFeature
  surface: AnalyticsSurface
  outcome: AnalyticsOutcome
  latency_ms: number
}
