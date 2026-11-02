import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CreditCard, Wallet, Building2 } from "lucide-react-native";

export default function BalanceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Account Balances</Text>
      <Text style={styles.subtitle}>
        Summary of money across Cash, Banks & Telebirr
      </Text>
      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Net Available Balance</Text>
        <Text style={styles.heroAmount}>4,500.00 ETB</Text>
      </View>
      <View style={styles.accountCard}>
        <View style={styles.accRow}>
          <View style={styles.accInfo}>
            <Wallet size={20} color="#10B981" />
            <Text style={styles.accName}>Physical Cash</Text>
          </View>
          <Text style={styles.accVal}>1,200 ETB</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.accRow}>
          <View style={styles.accInfo}>
            <CreditCard size={20} color="#3B82F6" />
            <Text style={styles.accName}>Telebirr Wallet</Text>
          </View>
          <Text style={styles.accVal}>2,100 ETB</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.accRow}>
          <View style={styles.accInfo}>
            <Building2 size={20} color="#8B5CF6" />
            <Text style={styles.accName}>CBE Bank Account</Text>
          </View>
          <Text style={styles.accVal}>1,200 ETB</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  subtitle: { fontSize: 13, color: "#6B7280", marginBottom: 16, marginTop: 2 },
  heroCard: {
    backgroundColor: "#10B981",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  heroLabel: { fontSize: 13, color: "#D1FAE5" },
  heroAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 4,
  },
  accountCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  accRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },
  accInfo: { flexDirection: "row", alignItems: "center", gap: 10 },
  accName: { fontSize: 14, fontWeight: "600", color: "#374151" },
  accVal: { fontSize: 15, fontWeight: "bold", color: "#111827" },
  divider: { height: 1, backgroundColor: "#F3F4F6" },
});
