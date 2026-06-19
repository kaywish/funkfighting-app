import { useState } from "react"
import { router } from "expo-router"
import {
  Alert,
  Image,
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
      <View style={styles.content}>
        <Image
          source={require("@/assets/images/funk-icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.card}>
  

          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.subtitle}>
            Sign in to continue
          </Text>

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

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.demoText}>
            Member: member / password123
          </Text>

          <Text style={styles.demoText}>
            Owner: owner / admin123
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    position: "relative",
  },

  logo: {
    width: 320,
    height: 320,
    alignSelf: "center",
    position: "absolute",
    top: 40,
    zIndex: 10,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 30,
    padding: 24,
    paddingTop: 65,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 120,
  },

  label: {
    color: colors.gold,
    textAlign: "center",
    fontWeight: "800",
    marginBottom: 8,
    letterSpacing: 1,
  },

  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: colors.muted,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 24,
    fontSize: 15,
  },

  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 16,
    color: colors.text,
    marginBottom: 14,
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: colors.gold,
    paddingVertical: 16,
    borderRadius: 18,
    marginTop: 8,
  },

  loginButtonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
  },

  demoText: {
    color: colors.muted,
    textAlign: "center",
    marginTop: 12,
    fontSize: 13,
  },
})