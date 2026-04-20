import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "min-repro-uniwind",
  slug: "min-repro-uniwind",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "minreprouniwind",
  userInterfaceStyle: "automatic",
  android: {
    adaptiveIcon: {
      backgroundColor: "#ffffff",
    },
    package: "com.minrepro.uniwind",
  },
  ios: {
    bundleIdentifier: "com.minrepro.uniwind",
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: "placeholder",
    },
  },
};

export default config;
