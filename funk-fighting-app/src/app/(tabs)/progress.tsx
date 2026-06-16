import { Ionicons } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useTheme } from "@/context/ThemeContext"

export default function Progress() {
  const { theme } = useTheme()

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.smallText, { color: theme.muted }]}>Your Training</Text>
      <Text style={[styles.title, { color: theme.text }]}>Progress</Text>

      <View style={[styles.heroCard, { backgroundColor: theme.green }]}>
        <Text style={styles.heroLabel}>Monthly Goal</Text>
        <Text style={styles.heroTitle}>68% Complete</Text>
        <Text style={styles.heroSub}>12 of 18 classes completed</Text>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: "68%", backgroundColor: theme.gold }]} />
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatCard number="12" label="Classes" icon="fitness" theme={theme} />
        <StatCard number="4" label="Week Streak" icon="flame" theme={theme} />
      </View>

      <View style={styles.statsRow}>
        <StatCard number="6" label="Skills Logged" icon="star" theme={theme} />
        <StatCard number="2" label="Goals Active" icon="trophy" theme={theme} />
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>Current Goals</Text>

      <GoalCard
        title="Improve Cardio"
        subtitle="Complete 18 classes this month"
        percent={68}
        theme={theme}
      />

      <GoalCard
        title="Kickboxing Technique"
        subtitle="Focus on footwork, defense, and combinations"
        percent={45}
        theme={theme}
      />

      <Text style={[styles.sectionTitle, { color: theme.text }]}>Recent Activity</Text>

      <ActivityItem title="Kickboxing | Muay Thai" date="Today • 6:15 PM" theme={theme} />
      <ActivityItem title="NOGI Jiu Jitsu" date="Yesterday • 6:00 PM" theme={theme} />
      <ActivityItem title="Boxing" date="Monday • 7:15 PM" theme={theme} />
    </ScrollView>
  )
}

function StatCard({
  number,
  label,
  icon,
  theme,
}: {
  number: string
  label: string
  icon: keyof typeof Ionicons.glyphMap
  theme: any
}) {
  return (
    <View style={[styles.statCard, { backgroundColor: theme.card }]}>
      <View style={[styles.statIcon, { backgroundColor: theme.gold }]}>
        <Ionicons name={icon} size={22} color="#000" />
      </View>
      <Text style={[styles.statNumber, { color: theme.text }]}>{number}</Text>
      <Text style={[styles.statLabel, { color: theme.muted }]}>{label}</Text>
    </View>
  )
}

function GoalCard({
  title,
  subtitle,
  percent,
  theme,
}: {
  title: string
  subtitle: string
  percent: number
  theme: any
}) {
  return (
    <View style={[styles.goalCard, { backgroundColor: theme.card }]}>
      <View style={styles.goalTop}>
        <View>
          <Text style={[styles.goalTitle, { color: theme.text }]}>{title}</Text>
          <Text style={[styles.goalSub, { color: theme.muted }]}>{subtitle}</Text>
        </View>
        <Text style={[styles.goalPercent, { color: theme.gold }]}>{percent}%</Text>
      </View>

      <View
        style={[
          styles.goalTrack,
          { backgroundColor: theme.isDark ? "rgba(255,255,255,0.08)" : "#E8E8E8" },
        ]}
      >
        <View
          style={[
            styles.goalFill,
            { width: `${percent}%`, backgroundColor: theme.green },
          ]}
        />
      </View>
    </View>
  )
}

function ActivityItem({
  title,
  date,
  theme,
}: {
  title: string
  date: string
  theme: any
}) {
  return (
    <View style={[styles.activityItem, { backgroundColor: theme.card }]}>
      <View style={styles.activityIcon}>
        <Ionicons name="checkmark" size={18} color="#000" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={[styles.activityTitle, { color: theme.text }]}>{title}</Text>
        <Text style={[styles.activityDate, { color: theme.muted }]}>{date}</Text>
      </View>
    </View>
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
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 4,
    marginBottom: 24,
  },
  heroCard: {
    borderRadius: 32,
    padding: 24,
    marginBottom: 18,
  },
  heroLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 8,
  },
  heroSub: {
    color: "#FFFFFF",
    opacity: 0.85,
    marginTop: 8,
    fontWeight: "600",
  },
  progressTrack: {
    height: 12,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 22,
  },
  progressFill: {
    height: "100%",
    borderRadius: 20,
  },
  statsRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 14,
  },
  statCard: {
    flex: 1,
    borderRadius: 26,
    padding: 18,
  },
  statIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "900",
  },
  statLabel: {
    marginTop: 4,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 14,
    marginBottom: 14,
  },
  goalCard: {
    borderRadius: 28,
    padding: 20,
    marginBottom: 14,
  },
  goalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 16,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: "900",
  },
  goalSub: {
    marginTop: 5,
    lineHeight: 20,
    maxWidth: 230,
  },
  goalPercent: {
    fontSize: 18,
    fontWeight: "900",
  },
  goalTrack: {
    height: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  goalFill: {
    height: "100%",
    borderRadius: 20,
  },
  activityItem: {
    borderRadius: 24,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#FFC324",
    alignItems: "center",
    justifyContent: "center",
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
  activityDate: {
    marginTop: 4,
    fontWeight: "600",
  },
})