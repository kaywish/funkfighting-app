import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "@/context/ThemeContext"

const members = [
  { id: "1", name: "John Smith", membership: "Unlimited", status: "Active" },
  { id: "2", name: "Mike Johnson", membership: "2x Weekly", status: "Active" },
  { id: "3", name: "Sarah Lee", membership: "Drop-In", status: "Inactive" },
  { id: "4", name: "Chris Brown", membership: "Unlimited", status: "Active" },
  { id: "5", name: "Anthony Rivera", membership: "Private Training", status: "Active" },
]

export default function MembersScreen() {
  const { theme } = useTheme()
  const [filter, setFilter] = useState("All")

  const activeCount = members.filter((m) => m.status === "Active").length
  const inactiveCount = members.filter((m) => m.status === "Inactive").length

  const filteredMembers =
    filter === "All"
      ? members
      : members.filter((member) => member.status === filter)

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.smallText, { color: theme.gold }]}>Owner Panel</Text>
      <Text style={[styles.greeting, { color: theme.text }]}>Members</Text>
      <Text style={[styles.subtitle, { color: theme.muted }]}>
        View all active and inactive members.
      </Text>

      <View style={styles.row}>
        <View
          style={[
            styles.statCard,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <Text style={[styles.statNumber, { color: theme.gold }]}>
            {activeCount}
          </Text>
          <Text style={[styles.statLabel, { color: theme.muted }]}>Active</Text>
        </View>

        <View
          style={[
            styles.statCard,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <Text style={[styles.statNumber, { color: theme.gold }]}>
            {inactiveCount}
          </Text>
          <Text style={[styles.statLabel, { color: theme.muted }]}>
            Inactive
          </Text>
        </View>
      </View>

      <View style={styles.filterRow}>
        {["All", "Active", "Inactive"].map((item) => {
          const isSelected = filter === item

          return (
            <TouchableOpacity
              key={item}
              style={[
                styles.filterButton,
                {
                  backgroundColor: isSelected ? theme.gold : theme.card,
                  borderColor: theme.border,
                },
              ]}
              onPress={() => setFilter(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  { color: isSelected ? "#000" : theme.text },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>

      {filteredMembers.map((member) => {
        const isActive = member.status === "Active"

        return (
          <View
            key={member.id}
            style={[
              styles.memberCard,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
          >
            <View style={[styles.avatar, { backgroundColor: theme.gold }]}>
              <Text style={styles.avatarText}>{member.name.charAt(0)}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={[styles.memberName, { color: theme.text }]}>
                {member.name}
              </Text>
              <Text style={[styles.memberPlan, { color: theme.muted }]}>
                {member.membership}
              </Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                { backgroundColor: isActive ? theme.green : "#ff5a5a" },
              ]}
            >
              <Ionicons
                name={isActive ? "checkmark" : "close"}
                size={14}
                color="#fff"
              />
              <Text style={styles.statusText}>{member.status}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 22,
    paddingTop: 70,
    paddingBottom: 120,
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
  subtitle: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
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
  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
  },
  filterText: {
    fontWeight: "800",
  },
  memberCard: {
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "900",
  },
  memberName: {
    fontSize: 16,
    fontWeight: "900",
  },
  memberPlan: {
    marginTop: 5,
    fontWeight: "600",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 14,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
  },
})