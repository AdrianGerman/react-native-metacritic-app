import { View, Text } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <View className="flex-1 bg-[#242424] items-center justify-center">
      <Slot />
      <StatusBar style="light" />
    </View>
  );
}
