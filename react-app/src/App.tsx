import { categories } from "./data/categories";
import { useState } from "react";
import "./App.css";
import ExpenseList from "./ExpenseTracker/ExpenseList";
import ExpenseInput from "./ExpenseTracker/ExpenseForm";
import ExpenseFilter from "./ExpenseTracker/ExpenseFilter";

function App() {
  //

  const [expenses, setExpenses] = useState([
    { id: 0, description: "aaa", amount: 9, category: "Utilities" },
    { id: 1, description: "bbb", amount: 9, category: "Utilities" },
    { id: 2, description: "ccc", amount: 9, category: "Utilities" },
    { id: 3, description: "ddd", amount: 9, category: "Utilities" },
  ]);

  const [filter, setFilter] = useState("");

  const DeleteItem = (id: number) => {
    // Here delete items from the array
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  // Add an option to detect all categories
  const visibleExpenses = filter
    ? expenses.filter((e) => e.category === filter)
    : expenses;

  return (
    <>
      <ExpenseInput
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter onSelectCategory={(category) => setFilter(category)} />
      <ExpenseList expenses={visibleExpenses} onDelete={DeleteItem} />
    </>
  );
}

export default App;
