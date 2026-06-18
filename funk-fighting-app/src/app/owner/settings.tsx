import { Ionicons } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native"
import { colors } from "@/constants/colors"
import { useTheme } from "@/context/ThemeContext"

export default function OwnerSettings() {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.content}
    >
      {/* <Text style={[styles.smallText, { color: theme.gold }]}>Owner Panel</Text> */}
      <Text style={[styles.title, { color: theme.text }]}>Settings</Text>

      <View style={[styles.profileCard, { backgroundColor: theme.card }]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>J</Text>
        </View>

        <View>
          <Text style={[styles.name, { color: theme.text }]}>Jason</Text>
          <Text style={[styles.memberText, { color: theme.muted }]}>
            Admin Account
          </Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <View style={styles.iconBox}>
              <Ionicons
                name={isDark ? "moon" : "sunny"}
                size={22}
                color="#000"
              />
            </View>

            <View>
              <Text style={[styles.settingTitle, { color: theme.text }]}>
                Dark Mode
              </Text>
              <Text style={[styles.settingSub, { color: theme.muted }]}>
                Switch between dark and light appearance
              </Text>
            </View>
          </View>

          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#D6D6D6", true: theme.green }}
            thumbColor={isDark ? theme.gold : "#FFFFFF"}
          />
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <SettingsItem icon="business" title="Gym Profile" subtitle="Business name, logo, and contact info" theme={theme} />
        <SettingsItem icon="people" title="Staff Access" subtitle="Manage coaches and owner permissions" theme={theme} />
        <SettingsItem icon="calendar" title="Class Settings" subtitle="Capacity, booking rules, and cancellations" theme={theme} />
        <SettingsItem icon="card" title="Membership Settings" subtitle="Plans, pricing, and renewal options" theme={theme} />
        <SettingsItem icon="notifications" title="Announcements" subtitle="Push notifications and member updates" theme={theme} />
        <SettingsItem icon="lock-closed" title="Security" subtitle="Password and admin account protection" theme={theme} />
      </View>
    </ScrollView>
  )
}

function SettingsItem({
  icon,
  title,
  subtitle,
  theme,
}: {
  icon: keyof typeof Ionicons.glyphMap
  title: string
  subtitle: string
  theme: any
}) {
  return (
    <View style={styles.itemRow}>
      <View style={styles.itemIcon}>
        <Ionicons name={icon} size={20} color={colors.gold} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={[styles.itemTitle, { color: theme.text }]}>{title}</Text>
        <Text style={[styles.itemSub, { color: theme.muted }]}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color={theme.muted} />
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
    fontWeight: "800",
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 4,
    marginBottom: 24,
  },
  profileCard: {
    borderRadius: 30,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 18,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "900",
  },
  name: {
    fontSize: 22,
    fontWeight: "900",
  },
  memberText: {
    marginTop: 4,
    fontWeight: "600",
  },
  card: {
    borderRadius: 30,
    padding: 18,
    marginBottom: 18,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flex: 1,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  settingTitle: {
    fontSize: 17,
    fontWeight: "900",
  },
  settingSub: {
    marginTop: 3,
    fontSize: 13,
    maxWidth: 210,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 15,
  },
  itemIcon: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: "#17121F",
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
  itemSub: {
    marginTop: 3,
    fontSize: 13,
  },
})