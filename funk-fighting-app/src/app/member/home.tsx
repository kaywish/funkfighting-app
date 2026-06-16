import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native"
import { colors } from "@/constants/colors"
import { classes, member } from "@/data/mockData"

export default function MemberHome() {
  const nextClass = classes[0]

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Welcome back, {member.name}</Text>
      <Text style={styles.subtitle}>Ready for your next session?</Text>

      <View style={styles.heroCard}>
        <Text style={styles.label}>Next Class</Text>
        <Text style={styles.classTitle}>{nextClass.name}</Text>
        <Text style={styles.classInfo}>{nextClass.time}</Text>
        <Text style={styles.classInfo}>Coach {nextClass.coach}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Class</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Classes</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{member.progress}%</Text>
          <Text style={styles.statLabel}>Progress</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Membership</Text>
        <Text style={styles.active}>{member.membership}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Current Goal</Text>
        <Text style={styles.goal}>{member.goal}</Text>
      </View>

      <Text style={styles.sectionHeader}>Today’s Classes</Text>

      {classes.map((item) => (
        <View key={item.id} style={styles.classCard}>
          <View>
            <Text style={styles.className}>{item.name}</Text>
            <Text style={styles.classTime}>{item.time}</Text>
            <Text style={styles.classCoach}>Coach {item.coach}</Text>
          </View>

          <Text style={styles.spots}>
            {item.spots - item.booked} spots left
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingTop: 70,
  },
  greeting: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "900",
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
  },
  heroCard: {
    backgroundColor: colors.card,
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
  },
  label: {
    color: colors.gold,
    fontWeight: "800",
    marginBottom: 8,
  },
  classTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900",
  },
  classInfo: {
    color: colors.muted,
    fontSize: 15,
    marginTop: 6,
  },
  button: {
    backgroundColor: colors.gold,
    paddingVertical: 15,
    borderRadius: 14,
    marginTop: 22,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statNumber: {
    color: colors.gold,
    fontSize: 26,
    fontWeight: "900",
  },
  statLabel: {
    color: colors.muted,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
  },
  active: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "800",
  },
  goal: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  sectionHeader: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900",
    marginTop: 8,
    marginBottom: 14,
  },
  classCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  className: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
  },
  classTime: {
    color: colors.gold,
    marginTop: 5,
  },
  classCoach: {
    color: colors.muted,
    marginTop: 5,
  },
  spots: {
    color: colors.green,
    fontWeight: "800",
  },
})