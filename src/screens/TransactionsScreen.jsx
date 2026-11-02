import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Plus, Search, Tag, Calendar } from "lucide-react-native";

const initialTxData = [
  {
    id: "1",
    title: "Dorm Snacks & Tea",
    amount: 45.0,
    type: "expense",
    category: "Food",
    date: "2026-10-30",
  },
  {
    id: "2",
    title: "Campus Taxi",
    amount: 30.0,
    type: "expense",
    category: "Transport",
    date: "2026-10-29",
  },
  {
    id: "3",
    title: "Allowance from Family",
    amount: 1500.0,
    type: "income",
    category: "Income",
    date: "2026-10-28",
  },
];

export default function TransactionsScreen() {
  const [transactions, setTransactions] = useState(initialTxData);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");

  const handleAdd = () => {
    if (!title || !amount) return;
    const newTx = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().split("T")[0],
    };
    setTransactions([newTx, ...transactions]);
    setModalVisible(false);
    setTitle("");
    setAmount("");
  };

  const filtered = transactions.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.searchBox}>
          <Search size={18} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search transactions..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Plus size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.metaRow}>
                <Tag size={12} color="#6B7280" />
                <Text style={styles.metaText}>{item.category}</Text>
                <Text style={styles.dot}>•</Text>
                <Calendar size={12} color="#6B7280" />
                <Text style={styles.metaText}>{item.date}</Text>
              </View>
            </View>
            <Text
              style={item.type === "income" ? styles.income : styles.expense}
            >
              {item.type === "income" ? "+" : "-"}
              {item.amount.toFixed(2)} ETB
            </Text>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Transaction</Text>
            <View style={styles.typeSelector}>
              <TouchableOpacity
                style={[
                  styles.typeBtn,
                  type === "expense" && styles.activeExpBtn,
                ]}
                onPress={() => setType("expense")}
              >
                <Text style={styles.typeBtnText}>Expense</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.typeBtn,
                  type === "income" && styles.activeIncBtn,
                ]}
                onPress={() => setType("income")}
              >
                <Text style={styles.typeBtnText}>Income</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Title (e.g. Lunch)"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Amount (ETB)"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
            <TextInput
              style={styles.input}
              placeholder="Category (Food, Transport...)"
              value={category}
              onChangeText={setCategory}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={handleAdd}>
                <Text style={{ color: "#FFF" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  topRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    elevation: 1,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14 },
  addButton: {
    width: 44,
    height: 44,
    backgroundColor: "#10B981",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 1,
  },
  title: { fontSize: 15, fontWeight: "600", color: "#1F2937" },
  metaRow: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 4 },
  metaText: { fontSize: 12, color: "#6B7280" },
  dot: { color: "#9CA3AF" },
  income: { fontSize: 15, fontWeight: "bold", color: "#10B981" },
  expense: { fontSize: 15, fontWeight: "bold", color: "#EF4444" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 20 },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  typeSelector: { flexDirection: "row", gap: 10, marginBottom: 14 },
  typeBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
  },
  activeExpBtn: { backgroundColor: "#EF4444", borderColor: "#EF4444" },
  activeIncBtn: { backgroundColor: "#10B981", borderColor: "#10B981" },
  typeBtnText: { fontSize: 14, color: "#374151", fontWeight: "600" },
  input: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 12,
  },
  modalActions: { flexDirection: "row", gap: 10, marginTop: 10 },
  cancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
  },
  saveBtn: {
    flex: 1,
    backgroundColor: "#10B981",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
