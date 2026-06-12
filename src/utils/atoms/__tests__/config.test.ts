import { describe, expect, it } from "vitest"
import { DEFAULT_CONFIG } from "@/utils/constants/config"
import { mergeWithArrayOverwrite } from "../config"

describe("mergeWithArrayOverwrite", () => {
  it("should overwrite arrays and merge objects in complex config scenarios", () => {
    const config = {
      language: DEFAULT_CONFIG.language,
      translate: {
        ...DEFAULT_CONFIG.translate,
        customPromptsConfig: {
          promptId: null,
          patterns: [{ id: "old", name: "Old", systemPrompt: "", prompt: "old" }],
        },
      },
    }

    const patch = {
      language: { targetCode: "jpn" },
      translate: {
        customPromptsConfig: {
          promptId: null,
          patterns: [{ id: "new", name: "New", systemPrompt: "", prompt: "new" }],
        },
        page: {
          preload: {
            margin: 1000,
            threshold: 0.25,
          },
        },
        mode: "replace",
      },
    }

    const result = mergeWithArrayOverwrite(config, patch)

    // Arrays should be completely replaced
    expect(result.translate.customPromptsConfig.patterns).toEqual([{ id: "new", name: "New", systemPrompt: "", prompt: "new" }])

    expect(result.translate.mode).toBe("replace")

    // Ensure immutability
    expect(result).not.toBe(config)
    expect(result.translate.customPromptsConfig.patterns).not.toBe(config.translate.customPromptsConfig.patterns)
  })

  it("should handle edge cases and type conversions", () => {
    // Array to non-array conversion
    expect(mergeWithArrayOverwrite({ arr: [1, 2] }, { arr: "string" })).toEqual({ arr: "string" })

    // Non-array to array conversion
    expect(mergeWithArrayOverwrite({ val: "text" }, { val: ["a", "b"] })).toEqual({ val: ["a", "b"] })

    // Empty array overwrite
    expect(mergeWithArrayOverwrite({ items: ["x"] }, { items: [] })).toEqual({ items: [] })

    // Null/undefined handling
    expect(mergeWithArrayOverwrite({ a: null }, { a: 1, b: undefined })).toEqual({ a: 1, b: undefined })
  })
})
