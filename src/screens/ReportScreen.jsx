import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TrendingUp } from "lucide-react-native";

export default function ReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Financial Reports</Text>
      <Text style={styles.subtitle}>
        Monthly spending patterns and insights.
      </Text>
      <View style={styles.insightCard}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <TrendingUp size={22} color="#10B981" />
          <Text style={styles.insightTitle}>Spending Habits</Text>
        </View>
        <Text style={styles.insightDesc}>
          You spent{" "}
          <Text style={{ fontWeight: "bold", color: "#10B981" }}>15% less</Text>{" "}
          on food this week!
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Expense Breakdown by Category</Text>
        <View style={styles.itemRow}>
          <Text style={styles.catName}>Food & Snacks</Text>
          <Text style={styles.catVal}>58% (850 ETB)</Text>
        </View>
        <View style={styles.barBg}>
          <View
            style={[
              styles.barFill,
              { width: "58%", backgroundColor: "#10B981" },
            ]}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  subtitle: { fontSize: 13, color: "#6B7280", marginBottom: 16, marginTop: 2 },
  insightCard: {
    backgroundColor: "#ECFDF5",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#A7F3D0",
  },
  insightTitle: { fontSize: 16, fontWeight: "bold", color: "#065F46" },
  insightDesc: { fontSize: 13, color: "#047857", lineHeight: 18 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 14,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 4,
  },
  catName: { fontSize: 13, color: "#374151" },
  catVal: { fontSize: 13, fontWeight: "600", color: "#111827" },
  barBg: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: { height: "100%" },
});
