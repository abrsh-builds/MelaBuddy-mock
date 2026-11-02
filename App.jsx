import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

import OverviewScreen from "./src/screens/OverviewScreen";
import TransactionsScreen from "./src/screens/TransactionsScreen";
import BudgetScreen from "./src/screens/BudgetScreen";
import BalanceScreen from "./src/screens/BalanceScreen";
import DailyGoalScreen from "./src/screens/DailyGoalScreen";
import ReportScreen from "./src/screens/ReportScreen";

import {
  LayoutDashboard,
  Receipt,
  PieChart,
  Wallet,
  Target,
  BarChart3,
} from "lucide-react-native";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderScreen = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewScreen onNavigate={(tab) => setActiveTab(tab)} />;
      case "transactions":
        return <TransactionsScreen />;
      case "budget":
        return <BudgetScreen />;
      case "balance":
        return <BalanceScreen />;
      case "daily":
        return <DailyGoalScreen />;
      case "report":
        return <ReportScreen />;
      default:
        return <OverviewScreen onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#10B981" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          MelaBuddy <Text style={styles.amharicBadge}>(መላ)</Text>
        </Text>
        <Text style={styles.headerSubtitle}>Student Financial Friend</Text>
      </View>

      <View style={styles.content}>{renderScreen()}</View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "overview" && styles.activeNavItem,
          ]}
          onPress={() => setActiveTab("overview")}
        >
          <LayoutDashboard
            size={20}
            color={activeTab === "overview" ? "#10B981" : "#6B7280"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "overview" && styles.activeNavText,
            ]}
          >
            Overview
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "transactions" && styles.activeNavItem,
          ]}
          onPress={() => setActiveTab("transactions")}
        >
          <Receipt
            size={20}
            color={activeTab === "transactions" ? "#10B981" : "#6B7280"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "transactions" && styles.activeNavText,
            ]}
          >
            Transact
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "budget" && styles.activeNavItem,
          ]}
          onPress={() => setActiveTab("budget")}
        >
          <PieChart
            size={20}
            color={activeTab === "budget" ? "#10B981" : "#6B7280"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "budget" && styles.activeNavText,
            ]}
          >
            Budget
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "balance" && styles.activeNavItem,
          ]}
          onPress={() => setActiveTab("balance")}
        >
          <Wallet
            size={20}
            color={activeTab === "balance" ? "#10B981" : "#6B7280"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "balance" && styles.activeNavText,
            ]}
          >
            Balance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "daily" && styles.activeNavItem,
          ]}
          onPress={() => setActiveTab("daily")}
        >
          <Target
            size={20}
            color={activeTab === "daily" ? "#10B981" : "#6B7280"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "daily" && styles.activeNavText,
            ]}
          >
            Daily Goal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "report" && styles.activeNavItem,
          ]}
          onPress={() => setActiveTab("report")}
        >
          <BarChart3
            size={20}
            color={activeTab === "report" ? "#10B981" : "#6B7280"}
          />
          <Text
            style={[
              styles.navText,
              activeTab === "report" && styles.activeNavText,
            ]}
          >
            Report
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6" },
  header: {
    backgroundColor: "#10B981",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#FFFFFF" },
  amharicBadge: { fontSize: 16, fontWeight: "normal", color: "#D1FAE5" },
  headerSubtitle: { fontSize: 12, color: "#ECFDF5", marginTop: 2 },
  content: { flex: 1 },
  navBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingVertical: 8,
    paddingHorizontal: 4,
    justifyContent: "space-around",
    elevation: 8,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 4,
  },
  activeNavItem: { borderTopWidth: 2, borderTopColor: "#10B981" },
  navText: { fontSize: 10, marginTop: 3, color: "#6B7280", fontWeight: "500" },
  activeNavText: { color: "#10B981", fontWeight: "bold" },
});
