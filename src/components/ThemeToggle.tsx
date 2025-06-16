
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const getInitialTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 dark:border-gray-700 bg-white/10 dark:bg-black/40 hover:bg-white/20 dark:hover:bg-gray-800 transition-all focus:outline-none backdrop-blur"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
