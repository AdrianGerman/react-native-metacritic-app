import { View, Text } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="flex-1 bg-[#242424] items-center justify-center">
      <Slot />
    </View>
  );
}
