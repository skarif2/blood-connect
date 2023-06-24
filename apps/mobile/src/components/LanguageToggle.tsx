import React from "react";
import { Pressable, Text } from "react-native";

import i18n from "~/../i18n";

export function LanguageToggle() {
  const locale = i18n.language;
  const toggleLocale = () =>
    void i18n.changeLanguage(locale === "en" ? "bn" : "en");
  return (
    <Pressable
      onPress={toggleLocale}
      className="ml-2 flex h-8 w-14 items-center justify-center"
    >
      <Text className="text-l font-semibold text-white">
        {locale === "en" ? "বাংলা" : "English"}
      </Text>
    </Pressable>
  );
}
