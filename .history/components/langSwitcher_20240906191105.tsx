import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./langSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LangSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "fr",
          label: t("fr"),
        },
      ]}
      label={t("label")}
    />
  );
}
