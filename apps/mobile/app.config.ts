import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "expo",
  slug: "expo",
  scheme: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1e293b",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
    userInterfaceStyle: "automatic",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1e293b",
    },
    userInterfaceStyle: "automatic",
  },
  extra: {
    eas: {
      // projectId: "your-project-id",
    },
  },
  plugins: ["./expo-plugins/with-modify-gradle.js", "expo-localization"],
});

export default defineConfig;
