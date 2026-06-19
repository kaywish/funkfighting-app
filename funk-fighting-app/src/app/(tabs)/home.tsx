import { Ionicons } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "@/context/ThemeContext"
import { router } from "expo-router"
import { classes, member } from "@/data/mockData"

export default function Home() {
  const { theme } = useTheme()
  const nextClass = classes[0]

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      
      <View style={styles.header}>
        
        <View>
          <Text style={[styles.smallText, { color: theme.muted }]}>
            Welcome back
          </Text>
          <Text style={[styles.title, { color: theme.text }]}>
            Hi, {member.name}
          </Text>

        
        </View>
        
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => router.replace("/")}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

        {/* <View style={[styles.avatar, { backgroundColor: theme.gold }]}>
          <Text style={styles.avatarText}>{member.name.charAt(0)}</Text>
        </View> */}
      </View>

      <View style={[styles.heroCard, { backgroundColor: theme.green }]}>
        <View>
          <Text style={styles.heroLabel}>Membership</Text>
          <Text style={styles.heroTitle}>Active Member</Text>
          <Text style={styles.heroSub}>Renews Aug 15, 2026</Text>
        </View>

        <View style={styles.checkBadge}>
          <Ionicons name="checkmark" size={24} color="#000" />
        </View>
      </View>

      <View style={[styles.progressCard, { backgroundColor: theme.card }]}>
        <View style={styles.progressTop}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>
            Monthly Progress
          </Text>
          <Text style={[styles.percent, { color: theme.gold }]}>
            {member.progress}%
          </Text>
        </View>

        <View
          style={[
            styles.progressTrack,
            { backgroundColor: theme.isDark ? "rgba(255,255,255,0.08)" : "#E8E8E8" },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${member.progress}%`,
                backgroundColor: theme.green,
              },
            ]}
          />
        </View>

        <View style={styles.statsRow}>
          <StatBlock number="12" label="Classes" theme={theme} />
          <StatBlock number="4" label="Week Streak" theme={theme} />
          <StatBlock number="2" label="Goals" theme={theme} />
        </View>
      </View>

      <View style={[styles.nextCard, { backgroundColor: theme.whiteCard }]}>
        <Text style={[styles.cardTitleDark, { color: theme.darkText }]}>
          Next Class
        </Text>

        <View style={styles.classRow}>
          <View style={styles.classIcon}>
            <Ionicons name="fitness" size={24} color={theme.gold} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.classTitleDark, { color: theme.darkText }]}>
              {nextClass.name}
            </Text>
            <Text style={styles.classSubDark}>Today • {nextClass.time}</Text>
            <Text style={styles.classSubDark}>Coach {nextClass.coach}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.darkButton}>
          <Text style={styles.darkButtonText}>Check In</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Today's Classes
      </Text>

      {classes.map((item) => (
        <View
          key={item.id}
          style={[styles.scheduleCard, { backgroundColor: theme.card }]}
        >
          <View>
            <Text style={[styles.scheduleName, { color: theme.text }]}>
              {item.name}
            </Text>
            <Text style={[styles.scheduleTime, { color: theme.muted }]}>
              {item.time}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.bookButton, { backgroundColor: theme.gold }]}
          >
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  )
}

function StatBlock({
  number,
  label,
  theme,
}: {
  number: string
  label: string
  theme: any
}) {
  return (
    <View>
      <Text style={[styles.statNumber, { color: theme.text }]}>{number}</Text>
      <Text style={[styles.statLabel, { color: theme.muted }]}>{label}</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },
  smallText: {
    fontSize: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 4,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "900",
  },
  heroCard: {
    borderRadius: 32,
    padding: 24,
    minHeight: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  heroLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 8,
  },
  heroSub: {
    color: "#FFFFFF",
    opacity: 0.85,
    marginTop: 8,
    fontWeight: "600",
  },
  checkBadge: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  progressCard: {
    borderRadius: 28,
    padding: 22,
    marginBottom: 18,
  },
  progressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
  },
  percent: {
    fontSize: 20,
    fontWeight: "900",
  },
  progressTrack: {
    height: 12,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 22,
  },
  progressFill: {
    height: "100%",
    borderRadius: 20,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "900",
  },
  statLabel: {
    marginTop: 4,
    fontSize: 13,
  },
  nextCard: {
    borderRadius: 32,
    padding: 22,
    marginBottom: 26,
  },
  cardTitleDark: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 18,
  },
  classRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 20,
  },
  classIcon: {
    width: 50,
    height: 50,
    borderRadius: 18,
    backgroundColor: "#17121F",
    alignItems: "center",
    justifyContent: "center",
  },
  classTitleDark: {
    fontSize: 18,
    fontWeight: "900",
  },
  classSubDark: {
    color: "#62586D",
    marginTop: 4,
    fontWeight: "600",
  },
  darkButton: {
    backgroundColor: "#17121F",
    padding: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  darkButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 14,
  },
  scheduleCard: {
    padding: 18,
    borderRadius: 24,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scheduleName: {
    fontSize: 16,
    fontWeight: "900",
  },
  scheduleTime: {
    marginTop: 5,
  },
  bookButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 14,
  },
  bookButtonText: {
    color: "#000",
    fontWeight: "900",
  },
  logoutButton: {
  backgroundColor: "#ff5a5a",
  paddingHorizontal: 14,
  paddingVertical: 10,
  borderRadius: 12,
},

logoutText: {
  color: "#fff",
  fontWeight: "800",
},
})