import { View } from "react-native";

export function Screen({ children }) {
  return <View className="flex-1 bg-[#242424] pt-4 px-2">{children}</View>;
}
