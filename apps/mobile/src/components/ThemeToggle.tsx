import React from "react";
import { Pressable } from "react-native";
import { Moon, Sun } from "lucide-react-native";
import { useColorScheme } from "nativewind";

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Pressable
      onPress={toggleColorScheme}
      className="flex h-8 w-8 items-center justify-center"
    >
      {colorScheme === "dark" ? (
        <Moon size={20} color="white" />
      ) : (
        <Sun size={20} color="white" />
      )}
    </Pressable>
  );
}
