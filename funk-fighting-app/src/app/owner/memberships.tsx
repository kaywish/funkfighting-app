import { Ionicons } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useTheme } from "@/context/ThemeContext"

const memberships = [
  { id: "1", name: "Unlimited", price: "$149/mo", members: 18 },
  { id: "2", name: "2x Weekly", price: "$99/mo", members: 12 },
  { id: "3", name: "Drop-In", price: "$25/class", members: 7 },
  { id: "4", name: "Private Training", price: "$75/session", members: 5 },
]

export default function MembershipsScreen() {
  const { theme } = useTheme()

  const totalMembers = memberships.reduce(
    (total, plan) => total + plan.members,
    0
  )

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.smallText, { color: theme.gold }]}>Owner Panel</Text>
      <Text style={[styles.greeting, { color: theme.text }]}>Memberships</Text>
      <Text style={[styles.subtitle, { color: theme.muted }]}>
        Manage plans, pricing, and member counts.
      </Text>

      <View
        style={[
          styles.statCard,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.statNumber, { color: theme.gold }]}>
          {totalMembers}
        </Text>
        <Text style={[styles.statLabel, { color: theme.muted }]}>
          Total Active Memberships
        </Text>
      </View>

      {memberships.map((plan) => (
        <View
          key={plan.id}
          style={[
            styles.membershipCard,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <View style={[styles.iconWrap, { backgroundColor: theme.gold }]}>
            <Ionicons name="card-outline" size={24} color="#000" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.planName, { color: theme.text }]}>
              {plan.name}
            </Text>
            <Text style={[styles.planPrice, { color: theme.gold }]}>
              {plan.price}
            </Text>
          </View>

          <View style={[styles.memberBadge, { backgroundColor: theme.green }]}>
            <Text style={styles.memberCount}>{plan.members}</Text>
            <Text style={styles.memberLabel}>Members</Text>
          </View>
        </View>
      ))}
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
  statCard: {
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    marginBottom: 18,
  },
  statNumber: {
    fontSize: 34,
    fontWeight: "900",
  },
  statLabel: {
    marginTop: 6,
    fontWeight: "700",
  },
  membershipCard: {
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  iconWrap: {
    width: 50,
    height: 50,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  planName: {
    fontSize: 18,
    fontWeight: "900",
  },
  planPrice: {
    marginTop: 4,
    fontWeight: "800",
  },
  memberBadge: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: "center",
    minWidth: 70,
  },
  memberCount: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
  },
  memberLabel: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
})