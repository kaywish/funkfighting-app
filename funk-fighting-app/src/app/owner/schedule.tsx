import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "@/context/ThemeContext"

const monthSchedule = [
  {
    day: "Sun",
    classes: [
      {
        name: "Open Mat",
        time: "10:00 AM - 11:30 AM",
        coach: "Jason Downer",
        spots: 20,
        booked: ["John Smith", "Mike Johnson", "Anthony Rivera"],
      },
    ],
  },
  {
    day: "Mon",
    classes: [
      {
        name: "Kickboxing | Muay Thai",
        time: "11:00 AM - 12:00 PM",
        coach: "Jason Downer",
        spots: 16,
        booked: ["John Smith", "Sarah Lee", "Chris Brown", "Mike Johnson"],
      },
      {
        name: "MMA Grappling",
        time: "6:00 PM - 7:00 PM",
        coach: "Brandon One'll",
        spots: 12,
        booked: ["Anthony Rivera", "Chris Brown"],
      },
    ],
  },
  {
    day: "Tue",
    classes: [
      {
        name: "NOGI Jiu Jitsu",
        time: "6:00 PM - 7:00 PM",
        coach: "Steve",
        spots: 14,
        booked: ["John Smith", "Mike Johnson"],
      },
      {
        name: "Kickboxing",
        time: "7:00 PM - 8:00 PM",
        coach: "Jason Downer",
        spots: 16,
        booked: ["Sarah Lee", "Chris Brown", "Anthony Rivera"],
      },
    ],
  },
  {
    day: "Wed",
    classes: [
      {
        name: "Muay Thai",
        time: "11:00 AM - 12:00 PM",
        coach: "Jason Downer",
        spots: 16,
        booked: ["John Smith", "Mike Johnson"],
      },
      {
        name: "MMA Grappling",
        time: "6:00 PM - 7:00 PM",
        coach: "Brandon One'll",
        spots: 12,
        booked: ["Chris Brown", "Anthony Rivera"],
      },
    ],
  },
  {
    day: "Thu",
    classes: [
      {
        name: "NOGI Jiu Jitsu",
        time: "6:00 PM - 7:00 PM",
        coach: "Steve",
        spots: 14,
        booked: ["Sarah Lee", "John Smith"],
      },
      {
        name: "Kickboxing",
        time: "7:00 PM - 8:00 PM",
        coach: "Jason Downer",
        spots: 16,
        booked: ["Mike Johnson", "Chris Brown"],
      },
    ],
  },
  {
    day: "Fri",
    classes: [
      {
        name: "Striking Fundamentals",
        time: "6:00 PM - 7:00 PM",
        coach: "Jason Downer",
        spots: 16,
        booked: ["John Smith", "Anthony Rivera"],
      },
    ],
  },
  {
    day: "Sat",
    classes: [
      {
        name: "Kids MMA",
        time: "10:00 AM - 11:00 AM",
        coach: "Brandon One'll",
        spots: 12,
        booked: ["Sarah Lee", "Mike Johnson"],
      },
      {
        name: "Open Mat",
        time: "11:00 AM - 12:30 PM",
        coach: "Jason Downer",
        spots: 20,
        booked: ["John Smith", "Chris Brown", "Anthony Rivera"],
      },
    ],
  },
]

export default function OwnerScheduleScreen() {
  const { theme } = useTheme()
  const [openDay, setOpenDay] = useState<string | null>(null)

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.greeting, { color: theme.text }]}>
        Monthly Schedule
      </Text>
      <Text style={[styles.subtitle, { color: theme.muted }]}>
        Full recurring schedule from Sunday to Saturday.
      </Text>

      {monthSchedule.map((day) => {
        const isOpen = openDay === day.day

        return (
          <View
            key={day.day}
            style={[styles.dayCard, { backgroundColor: theme.card }]}
          >
            <TouchableOpacity
              style={styles.dayHeader}
              onPress={() => setOpenDay(isOpen ? null : day.day)}
            >
              <View>
                <Text style={[styles.dayTitle, { color: theme.gold }]}>
                  {day.day}
                </Text>
                <Text style={[styles.daySub, { color: theme.muted }]}>
                  {day.classes.length} classes scheduled
                </Text>
              </View>

              <Ionicons
                name={isOpen ? "chevron-up" : "chevron-down"}
                size={24}
                color={theme.gold}
              />
            </TouchableOpacity>

            {day.classes.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.classRow,
                  {
                    borderTopColor: theme.isDark
                      ? "rgba(255,255,255,0.08)"
                      : "#E8E8E8",
                  },
                ]}
              >
                <View style={{ flex: 1 }}>
                  <Text style={[styles.className, { color: theme.text }]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.classTime, { color: theme.gold }]}>
                    {item.time}
                  </Text>
                  <Text style={[styles.classCoach, { color: theme.muted }]}>
                    Coach {item.coach}
                  </Text>
                </View>

                <View style={[styles.badge, { backgroundColor: theme.green }]}>
                  <Text style={styles.badgeText}>
                    {item.booked.length}/{item.spots}
                  </Text>
                </View>
              </View>
            ))}

            {isOpen && (
              <View style={styles.dropdown}>
                <Text style={[styles.dropdownTitle, { color: theme.text }]}>
                  Booked Members
                </Text>

                {day.classes.map((item, classIndex) => (
                  <View key={classIndex} style={styles.bookedGroup}>
                    <Text style={[styles.bookedClass, { color: theme.gold }]}>
                      {item.name}
                    </Text>

                    {item.booked.map((name, index) => (
                      <View
                        key={index}
                        style={[
                          styles.memberRow,
                          {
                            backgroundColor: theme.isDark
                              ? "rgba(255,255,255,0.05)"
                              : "#F3F3F3",
                          },
                        ]}
                      >
                        <Ionicons
                          name="person-circle-outline"
                          size={22}
                          color={theme.green}
                        />
                        <Text style={[styles.memberName, { color: theme.text }]}>
                          {name}
                        </Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            )}
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
  greeting: {
    fontSize: 28,
    fontWeight: "900",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
  },
  dayCard: {
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
  },
  dayHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayTitle: {
    fontSize: 24,
    fontWeight: "900",
  },
  daySub: {
    marginTop: 4,
    fontWeight: "600",
  },
  classRow: {
    borderTopWidth: 1,
    paddingTop: 14,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  className: {
    fontSize: 16,
    fontWeight: "900",
  },
  classTime: {
    marginTop: 5,
    fontWeight: "800",
  },
  classCoach: {
    marginTop: 5,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "900",
  },
  dropdown: {
    marginTop: 18,
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12,
  },
  bookedGroup: {
    marginBottom: 16,
  },
  bookedClass: {
    fontWeight: "900",
    marginBottom: 8,
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderRadius: 14,
    marginBottom: 8,
  },
  memberName: {
    fontWeight: "800",
  },
})