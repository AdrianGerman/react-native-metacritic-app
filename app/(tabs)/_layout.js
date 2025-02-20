import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, CircleInfoIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#282828" },
        tabBarActiveTintColor: "#76428a",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
