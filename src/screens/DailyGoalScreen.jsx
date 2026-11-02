import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Flame, ShieldAlert, CheckCircle } from "lucide-react-native";

export default function DailyGoalScreen() {
  const [survivalMode, setSurvivalMode] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Goal & Check-in</Text>
      <Text style={styles.subtitle}>
        Build disciplined spending habits every single day.
      </Text>
      <View style={styles.streakCard}>
        <Flame size={32} color="#F59E0B" />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.streakTitle}>5 Days Active Streak!</Text>
          <Text style={styles.streakSub}>
            Keep checking in daily to maintain discipline.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.checkInBtn, checkedIn && styles.checkedInBtn]}
        onPress={() => setCheckedIn(true)}
        disabled={checkedIn}
      >
        <CheckCircle size={20} color="#FFFFFF" />
        <Text style={styles.checkInText}>
          {checkedIn ? "Daily Check-in Completed!" : "Perform Today Check-in"}
        </Text>
      </TouchableOpacity>
      <View style={styles.survivalCard}>
        <View style={styles.survivalRow}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <ShieldAlert size={22} color="#EF4444" />
            <Text style={styles.survivalTitle}>Survival Mode</Text>
          </View>
          <Switch value={survivalMode} onValueChange={setSurvivalMode} />
        </View>
        <Text style={styles.survivalDesc}>
          {survivalMode
            ? "🚨 SURVIVAL MODE ACTIVE: Daily limit locked to essentials."
            : "Enable during end-of-month budget crunches."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  subtitle: { fontSize: 13, color: "#6B7280", marginBottom: 16, marginTop: 2 },
  streakCard: {
    backgroundColor: "#FEF3C7",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  streakTitle: { fontSize: 16, fontWeight: "bold", color: "#B45309" },
  streakSub: { fontSize: 12, color: "#D97706", marginTop: 2 },
  checkInBtn: {
    backgroundColor: "#10B981",
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  checkedInBtn: { backgroundColor: "#059669" },
  checkInText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 15 },
  survivalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  survivalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  survivalTitle: { fontSize: 16, fontWeight: "bold", color: "#EF4444" },
  survivalDesc: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 10,
    lineHeight: 18,
  },
});
