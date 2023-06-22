import React from "react";
import { Pressable, Text } from "react-native";
import { useColorScheme } from "nativewind";

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Pressable onPress={toggleColorScheme}>
      <Text selectable={false} className="text-foreground">
        {colorScheme === "dark" ? "🌙" : "🌞"}
      </Text>
    </Pressable>
  );
}
