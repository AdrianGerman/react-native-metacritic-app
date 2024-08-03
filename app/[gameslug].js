import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "No title",
        }}
      />
      <View className="flex-1 justify-center items-center">
        <Text className="text-white font-bold text-2xl">Detalle del juego</Text>
        <Text className="text-white font-bold mb-8 text-2xl text-center">
          {gameslug}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver
        </Link>
      </View>
    </Screen>
  );
}
