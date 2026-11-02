import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Utensils, Bus, BookOpen, Film } from "lucide-react-native";

const budgets = [
  {
    id: "1",
    category: "Food & Meals",
    allocated: 1500,
    spent: 850,
    icon: Utensils,
    color: "#10B981",
  },
  {
    id: "2",
    category: "Transport",
    allocated: 500,
    spent: 340,
    icon: Bus,
    color: "#3B82F6",
  },
  {
    id: "3",
    category: "Books & Supplies",
    allocated: 600,
    spent: 580,
    icon: BookOpen,
    color: "#F59E0B",
  },
  {
    id: "4",
    category: "Entertainment",
    allocated: 400,
    spent: 390,
    icon: Film,
    color: "#EC4899",
  },
];

export default function BudgetScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Monthly Category Budgets</Text>
      <Text style={styles.subtitle}>
        Track spending caps and prevent overspending.
      </Text>
      {budgets.map((item) => {
        const IconComponent = item.icon;
        const pct = Math.min(
          Math.round((item.spent / item.allocated) * 100),
          100,
        );
        return (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.headerLeft}>
                <View
                  style={[
                    styles.iconBox,
                    { backgroundColor: item.color + "20" },
                  ]}
                >
                  <IconComponent size={20} color={item.color} />
                </View>
                <Text style={styles.catName}>{item.category}</Text>
              </View>
            </View>
            <View style={styles.amountRow}>
              <Text style={styles.spentText}>
                {item.spent} ETB <Text style={styles.label}>spent</Text>
              </Text>
              <Text style={styles.allocText}>of {item.allocated} ETB</Text>
            </View>
            <View style={styles.barBg}>
              <View
                style={[
                  styles.barFill,
                  { width: `${pct}%`, backgroundColor: item.color },
                ]}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  subtitle: { fontSize: 13, color: "#6B7280", marginBottom: 16, marginTop: 2 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  catName: { fontSize: 16, fontWeight: "600", color: "#1F2937" },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 6,
  },
  spentText: { fontSize: 15, fontWeight: "bold", color: "#111827" },
  label: { fontSize: 12, fontWeight: "normal", color: "#6B7280" },
  allocText: { fontSize: 13, color: "#6B7280" },
  barBg: {
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 5,
    overflow: "hidden",
  },
  barFill: { height: "100%" },
});
