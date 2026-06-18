import { useState } from "react"
import { router } from "expo-router"
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { colors } from "@/constants/colors"

export default function Index() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
  if (username === "member" && password === "password123") {
    router.replace("/(tabs)/home")
  } else if (username === "owner" && password === "admin123") {
    router.replace("/owner/dashboard")
  } else {
    Alert.alert("Login Failed", "Invalid username or password")
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Member Login</Text>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to book classes and track your progress.</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={colors.muted}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.muted}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.demoText}>
  Member: member / password123{"\n"}
  Owner: owner / admin123
</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    color: colors.gold,
    fontWeight: "800",
    marginBottom: 8,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900",
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
    lineHeight: 22,
  },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 15,
    color: colors.text,
    fontSize: 16,
    marginBottom: 14,
  },
  button: {
    backgroundColor: colors.gold,
    paddingVertical: 15,
    borderRadius: 14,
    marginTop: 8,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
  demoText: {
    color: colors.muted,
    textAlign: "center",
    marginTop: 16,
    fontSize: 13,
  },
})