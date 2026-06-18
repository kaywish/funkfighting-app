import { useState } from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useTheme } from "@/context/ThemeContext"
import { classes } from "@/data/mockData"

export default function OwnerDashboard() {
  const { theme } = useTheme()
  const [todoText, setTodoText] = useState("")
  const [todos, setTodos] = useState([
    "Call inactive members",
    "Confirm evening class attendance",
  ])

  const currentClass = classes[0]

  const addTodo = () => {
    if (!todoText.trim()) return
    setTodos([...todos, todoText.trim()])
    setTodoText("")
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.smallText, { color: theme.gold }]}>
            Welcome, Jason
          </Text>
          <Text style={[styles.greeting, { color: theme.text }]}>
            Dashboard
          </Text>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace("/")}
        >
          <Ionicons name="log-out-outline" size={18} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.heroCard, { backgroundColor: theme.green }]}>
        <View>
          <Text style={styles.heroLabel}>Current Class</Text>
          <Text style={styles.heroTitle}>{currentClass.name}</Text>
          <Text style={styles.heroSub}>{currentClass.time}</Text>
          <Text style={styles.heroSub}>Coach {currentClass.coach}</Text>
        </View>

        <View style={styles.classBadge}>
          <Text style={styles.classBadgeNumber}>{currentClass.booked}</Text>
          <Text style={styles.classBadgeText}>Booked</Text>
        </View>
      </View>

      <View style={styles.row}>
        <StatCard number="2" label="Guest Passes" theme={theme} />
        <StatCard number="19" label="Check-ins" theme={theme} />
      </View>

      <View style={styles.row}>
        <StatCard number="8" label="Classes Today" theme={theme} />
        <StatCard number="42" label="Weekly Visits" theme={theme} />
      </View>

      <View
        style={[
          styles.todoCard,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
      >
        <View style={styles.todoHeader}>
          <View>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              To-do Today
            </Text>
            <Text style={[styles.sectionSub, { color: theme.muted }]}>
              Keep track of owner tasks
            </Text>
          </View>

          <View style={[styles.todoCount, { backgroundColor: theme.gold }]}>
            <Text style={styles.todoCountText}>{todos.length}</Text>
          </View>
        </View>

        <View style={styles.todoInputRow}>
          <TextInput
            style={[
              styles.todoInput,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
                color: theme.text,
              },
            ]}
            placeholder="Add a task..."
            placeholderTextColor={theme.muted}
            value={todoText}
            onChangeText={setTodoText}
          />

          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: theme.gold }]}
            onPress={addTodo}
          >
            <Ionicons name="add" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {todos.map((todo, index) => (
          <View
            key={index}
            style={[styles.todoItem, { backgroundColor: theme.background }]}
          >
            <View style={styles.todoLeft}>
              <View style={[styles.todoDot, { backgroundColor: theme.gold }]} />
              <Text style={[styles.todoText, { color: theme.text }]}>
                {todo}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(index)}
            >
              <Ionicons name="trash-outline" size={18} color="#ff5a5a" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

function StatCard({
  number,
  label,
  theme,
}: {
  number: string
  label: string
  theme: any
}) {
  return (
    <View
      style={[
        styles.statCard,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <Text style={[styles.statNumber, { color: theme.gold }]}>{number}</Text>
      <Text style={[styles.statLabel, { color: theme.muted }]}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 22,
    paddingTop: 70,
    paddingBottom: 120,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 14,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "800",
  },
  greeting: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 4,
  },
  logoutButton: {
    backgroundColor: "#ff5a5a",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "900",
  },
  heroCard: {
    borderRadius: 32,
    padding: 24,
    minHeight: 165,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  heroLabel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 8,
    maxWidth: 220,
  },
  heroSub: {
    color: "#fff",
    opacity: 0.85,
    marginTop: 7,
    fontWeight: "700",
  },
  classBadge: {
    backgroundColor: "#fff",
    width: 72,
    height: 72,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  classBadgeNumber: {
    color: "#000",
    fontSize: 24,
    fontWeight: "900",
  },
  classBadgeText: {
    color: "#000",
    fontSize: 11,
    fontWeight: "800",
  },
  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 14,
  },
  statCard: {
    flex: 1,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
  },
  statNumber: {
    fontSize: 30,
    fontWeight: "900",
  },
  statLabel: {
    marginTop: 6,
    fontWeight: "700",
  },
  todoCard: {
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    marginTop: 4,
  },
  todoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
  },
  sectionSub: {
    marginTop: 4,
    fontWeight: "600",
  },
  todoCount: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  todoCountText: {
    color: "#000",
    fontWeight: "900",
  },
  todoInputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
  todoInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontWeight: "700",
  },
  addButton: {
    width: 52,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  todoItem: {
    borderRadius: 18,
    padding: 14,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  todoDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 15,
    fontWeight: "800",
    flex: 1,
  },
  deleteButton: {
    padding: 8,
  },
})