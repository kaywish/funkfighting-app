import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"

const darkTheme = {
  isDark: true,
  background: "#17121F",
  surface: "#241D2E",
  card: "#2D2538",
  whiteCard: "#F7F7F4",
  gold: "#FFC324",
  green: "#0D8541",
  text: "#FFFFFF",
  darkText: "#17121F",
  muted: "#B8AFC4",
  border: "rgba(255,255,255,0.08)",
}

const lightTheme = {
  isDark: false,
  background: "#F4F4F4",
  surface: "#FFFFFF",
  card: "#FFFFFF",
  whiteCard: "#FFFFFF",
  gold: "#FFC324",
  green: "#0D8541",
  text: "#17121F",
  darkText: "#17121F",
  muted: "#6B6472",
  border: "rgba(0,0,0,0.08)",
}

type Theme = typeof darkTheme

const ThemeContext = createContext<{
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}>({
  theme: darkTheme,
  isDark: true,
  toggleTheme: () => {},
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