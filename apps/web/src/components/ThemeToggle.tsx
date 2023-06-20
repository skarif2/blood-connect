"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@acme/ui";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
        <Sun />
      </div>
      <div className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        <Moon />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
