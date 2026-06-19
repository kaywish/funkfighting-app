import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"

const darkTheme = {
  isDark: true,

  background: "#0F1115",
  surface: "#171B22",

  card: "#1B212B",
  whiteCard: "#F8F9FA",

  gold: "#FFC324",
  green: "#16A34A",

  text: "#FFFFFF",
  darkText: "#111827",

  muted: "#9CA3AF",

  border: "rgba(255,255,255,0.08)",
}

const lightTheme = {
  isDark: false,

  background: "#F6FAF7",
  surface: "#FFFFFF",

  card: "#FFFFFF",
  whiteCard: "#FFFFFF",

  gold: "#FFC324",
  green: "#0D8541",

  text: "#111827",
  darkText: "#111827",

  muted: "#6B7280",

  border: "#E2E8E5",
}

type Theme = typeof darkTheme

const ThemeContext = createContext<{
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}>({
  theme: darkTheme,
  isDark: true,
  toggleTheme: () => { },
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await AsyncStorage.getItem("theme")
      if (saved === "light") setIsDark(false)
    }

    loadTheme()
  }, [])

  const toggleTheme = async () => {
    const next = !isDark
    setIsDark(next)
    await AsyncStorage.setItem("theme", next ? "dark" : "light")
  }

  const value = useMemo(
    () => ({
      theme: isDark ? darkTheme : lightTheme,
      isDark,
      toggleTheme,
    }),
    [isDark]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}