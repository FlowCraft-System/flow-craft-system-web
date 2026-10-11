import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon, Globe02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { languages, type LanguageCode } from "@/i18n"

export function LanguageToggle({ withLabel = false }: { withLabel?: boolean }) {
  const { i18n, t } = useTranslation()
  const current = (i18n.resolvedLanguage ?? "es") as LanguageCode

  const change = (code: LanguageCode) => {
    void i18n.changeLanguage(code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size={withLabel ? "sm" : "icon"} aria-label={t("actions.language")} />}
      >
        <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
        <span className="text-xs font-medium uppercase">{current}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuGroup>
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} onClick={() => change(lang.code)}>
              <span className="flex-1">{lang.label}</span>
              {current === lang.code ? (
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={2}
                  className="text-primary"
                />
              ) : null}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
