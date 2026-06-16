import { View } from "react-native"
import { colors } from "@/constants/colors"

export default function Card({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      {children}
    </View>
  )
}