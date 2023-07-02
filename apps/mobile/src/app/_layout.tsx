import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";

import { TRPCProvider } from "~/utils/api";
import i18n from "~/../i18n";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <TRPCProvider>
      <SafeAreaProvider>
        {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
        <I18nextProvider i18n={i18n} defaultNS={"translation"}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f47272",
              },
            }}
          />
        </I18nextProvider>
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
