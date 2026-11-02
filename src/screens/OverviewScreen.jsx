import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  ArrowUpRight,
  ArrowDownRight,
  Flame,
  ShieldAlert,
  Sparkles,
  Plus,
} from "lucide-react-native";

export default function OverviewScreen({ onNavigate }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Current Total Balance</Text>
        <Text style={styles.balanceAmount}>
          4,500.00 <Text style={styles.currency}>ETB</Text>
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <View style={styles.iconCircleInc}>
              <ArrowUpRight size={16} color="#10B981" />
            </View>
            <View>
              <Text style={styles.statLabel}>Income</Text>
              <Text style={styles.incomeText}>+3,200 ETB</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBox}>
            <View style={styles.iconCircleExp}>
              <ArrowDownRight size={16} color="#EF4444" />
            </View>
            <View>
              <Text style={styles.statLabel}>Spent</Text>
              <Text style={styles.expenseText}>-1,450 ETB</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Daily Budget Target</Text>
          <View style={styles.streakBadge}>
            <Flame size={14} color="#F59E0B" />
            <Text style={styles.streakText}>5 Day Streak</Text>
          </View>
        </View>
        <Text style={styles.progressText}>
          Spent ETB 120 / ETB 250 Daily Limit
        </Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: "48%" }]} />
        </View>
        <Text style={styles.subtext}>
          You are doing great! ETB 130 left for today.
        </Text>
      </View>

      <Text style={styles.heading}>Quick Actions</Text>
      <View style={styles.actionGrid}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onNavigate("transactions")}
        >
          <Plus size={20} color="#10B981" />
          <Text style={styles.actionText}>Add Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onNavigate("budget")}
        >
          <Sparkles size={20} color="#3B82F6" />
          <Text style={styles.actionText}>Check Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onNavigate("daily")}
        >
          <ShieldAlert size={20} color="#F59E0B" />
          <Text style={styles.actionText}>Survival Mode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeaderMargin}>
        <Text style={styles.heading}>Recent Activity</Text>
        <TouchableOpacity onPress={() => onNavigate("transactions")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.txList}>
        <View style={styles.txItem}>
          <View style={styles.txDotExp} />
          <View style={{ flex: 1 }}>
            <Text style={styles.txTitle}>Dorm Snacks & Tea</Text>
            <Text style={styles.txCategory}>Food & Drinks • Today</Text>
          </View>
          <Text style={styles.txAmountExp}>-45.00 ETB</Text>
        </View>

        <View style={styles.txItem}>
          <View style={styles.txDotExp} />
          <View style={{ flex: 1 }}>
            <Text style={styles.txTitle}>Campus Taxi</Text>
            <Text style={styles.txCategory}>Transport • Yesterday</Text>
          </View>
          <Text style={styles.txAmountExp}>-30.00 ETB</Text>
        </View>

        <View style={styles.txItem}>
          <View style={styles.txDotInc} />
          <View style={{ flex: 1 }}>
            <Text style={styles.txTitle}>Allowance from Family</Text>
            <Text style={styles.txCategory}>Income • Oct 28</Text>
          </View>
          <Text style={styles.txAmountInc}>+1,500.00 ETB</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },
  cardLabel: { fontSize: 13, color: "#6B7280", fontWeight: "500" },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
    marginVertical: 6,
  },
  currency: { fontSize: 16, fontWeight: "normal", color: "#6B7280" },
  statsRow: {
    flexDirection: "row",
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  statBox: { flex: 1, flexDirection: "row", alignItems: "center", gap: 10 },
  divider: { width: 1, backgroundColor: "#E5E7EB", marginHorizontal: 10 },
  iconCircleInc: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#D1FAE5",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircleExp: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  statLabel: { fontSize: 11, color: "#6B7280" },
  incomeText: { fontSize: 14, fontWeight: "bold", color: "#10B981" },
  expenseText: { fontSize: 14, fontWeight: "bold", color: "#EF4444" },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 15, fontWeight: "bold", color: "#1F2937" },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  streakText: { fontSize: 11, color: "#D97706", fontWeight: "bold" },
  progressText: { fontSize: 13, color: "#4B5563", marginBottom: 8 },
  progressBarBg: {
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: { height: "100%", backgroundColor: "#10B981" },
  subtext: { fontSize: 11, color: "#6B7280", marginTop: 8 },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 10,
  },
  actionGrid: { flexDirection: "row", gap: 10, marginBottom: 20 },
  actionButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    gap: 6,
    elevation: 1,
  },
  actionText: { fontSize: 12, fontWeight: "600", color: "#374151" },
  sectionHeaderMargin: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  seeAll: { fontSize: 13, color: "#10B981", fontWeight: "600" },
  txList: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 30,
  },
  txItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  txDotExp: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
    marginRight: 12,
  },
  txDotInc: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#10B981",
    marginRight: 12,
  },
  txTitle: { fontSize: 14, fontWeight: "600", color: "#1F2937" },
  txCategory: { fontSize: 11, color: "#9CA3AF" },
  txAmountExp: { fontSize: 14, fontWeight: "bold", color: "#EF4444" },
  txAmountInc: { fontSize: 14, fontWeight: "bold", color: "#10B981" },
});
