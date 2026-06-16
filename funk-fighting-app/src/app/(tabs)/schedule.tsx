import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "@/context/ThemeContext"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const schedule = [
  {
    id: "1",
    day: "Mon",
    name: "Kickboxing | Muay Thai",
    time: "11:00 AM - 12:00 PM",
    coach: "Jason Downer",
    level: "All Levels",
    spots: 4,
  },
  {
    id: "2",
    day: "Mon",
    name: "MMA Grappling",
    time: "6:00 PM - 7:00 PM",
    coach: "Brandon One'll",
    level: "Beginner Friendly",
    spots: 6,
  },
  {
    id: "3",
    day: "Tue",
    name: "NOGI Jiu Jitsu",
    time: "6:00 PM - 7:00 PM",
    coach: "Steve Rothman",
    level: "All Levels",
    spots: 3,
  },
  {
    id: "4",
    day: "Wed",
    name: "Boxing",
    time: "7:15 PM - 8:15 PM",
    coach: "Justin Marino",
    level: "All Levels",
    spots: 5,
  },
  {
    id: "5",
    day: "Sat",
    name: "Kids Kickboxing",
    time: "9:00 AM - 10:00 AM",
    coach: "Justin Marino",
    level: "Kids",
    spots: 7,
  },
]

export default function Schedule() {
  const { theme } = useTheme()
  const [selectedDay, setSelectedDay] = useState("Mon")
  const [bookedIds, setBookedIds] = useState<string[]>([])

  const filteredClasses = schedule.filter((item) => item.day === selectedDay)

  const toggleBooking = (id: string) => {
    setBookedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.smallText, { color: theme.muted }]}>
        Class Schedule
      </Text>

      <Text style={[styles.title, { color: theme.text }]}>
        Book Your Training
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysRow}
      >
        {days.map((day) => {
          const active = selectedDay === day

          return (
            <TouchableOpacity
              key={day}
              onPress={() => setSelectedDay(day)}
              style={[
                styles.dayPill,
                { backgroundColor: active ? theme.gold : theme.card },
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  { color: active ? "#000" : theme.muted },
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      <View style={[styles.noticeCard, { backgroundColor: theme.whiteCard }]}>
        <View style={[styles.noticeIcon, { backgroundColor: theme.gold }]}>
          <Ionicons name="alert" size={20} color="#000" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.noticeTitle, { color: theme.darkText }]}>
            Booking Required
          </Text>
          <Text style={styles.noticeText}>
            Reserve your spot before class. Some sessions have limited capacity.
          </Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        {selectedDay} Classes
      </Text>

      {filteredClasses.length === 0 ? (
        <View style={[styles.emptyCard, { backgroundColor: theme.card }]}>
          <Ionicons name="calendar-outline" size={34} color={theme.gold} />
          <Text style={[styles.emptyTitle, { color: theme.text }]}>
            No classes scheduled
          </Text>
          <Text style={[styles.emptyText, { color: theme.muted }]}>
            Check another day for available sessions.
          </Text>
        </View>
      ) : (
        filteredClasses.map((item) => {
          const booked = bookedIds.includes(item.id)

          return (
            <View
              key={item.id}
              style={[styles.classCard, { backgroundColor: theme.card }]}
            >
              <View style={styles.cardTop}>
                <View style={styles.classIcon}>
                  <Ionicons name="fitness" size={24} color={theme.gold} />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={[styles.className, { color: theme.text }]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.classTime, { color: theme.gold }]}>
                    {item.time}
                  </Text>
                </View>
              </View>

              <View style={styles.detailsRow}>
                <View
                  style={[
                    styles.detailPill,
                    {
                      backgroundColor: theme.isDark
                        ? "rgba(255,255,255,0.06)"
                        : "#F1F1F1",
                    },
                  ]}
                >
                  <Ionicons name="person" size={14} color={theme.muted} />
                  <Text style={[styles.detailText, { color: theme.muted }]}>
                    {item.coach}
                  </Text>
                </View>

                <View
                  style={[
                    styles.detailPill,
                    {
                      backgroundColor: theme.isDark
                        ? "rgba(255,255,255,0.06)"
                        : "#F1F1F1",
                    },
                  ]}
                >
                  <Ionicons name="star" size={14} color={theme.muted} />
                  <Text style={[styles.detailText, { color: theme.muted }]}>
                    {item.level}
                  </Text>
                </View>
              </View>

              <View style={styles.bottomRow}>
                <Text style={[styles.spots, { color: theme.green }]}>
                  {item.spots} spots left
                </Text>

                <TouchableOpacity
                  onPress={() => toggleBooking(item.id)}
                  style={[
                    styles.bookButton,
                    { backgroundColor: booked ? theme.green : theme.gold },
                  ]}
                >
                  <Text
                    style={[
                      styles.bookButtonText,
                      { color: booked ? "#fff" : "#000" },
                    ]}
                  >
                    {booked ? "Booked" : "Book"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })
      )}
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
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 4,
    marginBottom: 24,
  },
  daysRow: {
    gap: 10,
    paddingBottom: 20,
  },
  dayPill: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
  dayText: {
    fontWeight: "900",
  },
  noticeCard: {
    borderRadius: 28,
    padding: 18,
    flexDirection: "row",
    gap: 14,
    marginBottom: 26,
  },
  noticeIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: "900",
  },
  noticeText: {
    color: "#62586D",
    marginTop: 4,
    lineHeight: 20,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 14,
  },
  classCard: {
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },
  cardTop: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
    marginBottom: 18,
  },
  classIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#17121F",
    alignItems: "center",
    justifyContent: "center",
  },
  className: {
    fontSize: 18,
    fontWeight: "900",
  },
  classTime: {
    marginTop: 5,
    fontWeight: "700",
  },
  detailsRow: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 18,
  },
  detailPill: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  detailText: {
    fontSize: 13,
    fontWeight: "700",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  spots: {
    fontWeight: "900",
  },
  bookButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  bookButtonText: {
    fontWeight: "900",
  },
  emptyCard: {
    borderRadius: 30,
    padding: 28,
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 14,
  },
  emptyText: {
    marginTop: 6,
    textAlign: "center",
  },
})