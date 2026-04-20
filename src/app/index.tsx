import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-black">
        Minimal Uniwind Repro
      </Text>
      <Text className="mt-4 text-base text-gray-500">
        This app reproduces the EAS build failure with tree shaking enabled.
      </Text>
    </View>
  );
}
