import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import bn from "~/../assets/locales/bn.json";
import en from "~/../assets/locales/en.json";

void i18n.use(initReactI18next).init({
  lng: Localization.locale,
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
    bn: {
      translation: bn,
    },
  },
});

export default i18n;
