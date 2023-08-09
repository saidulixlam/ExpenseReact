import ExpenseItem from "./components/Expenses/ExpenseItem";
// import ExpenseForm from "./components/InputExpense/ExpenseForm";
import NewExpense from "./components/InputExpense/NewExpense";
import { useState } from "react";
import Card from "./components/UI/Card";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

function App() {
  const dummy_items = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.23, date: new Date(2021, 2, 2), location: 'Location' },
    { id: 'e2', title: 'Car Insurance', amount: 44.63, date: new Date(2022, 2, 2), location: 'Location' },
    { id: 'e3', title: 'New Desk', amount: 70.90, date: new Date(2021, 2, 12), location: 'Location' },
    { id: 'e4', title: 'Toilet Paper', amount: 104.93, date: new Date(2020, 9, 12), location: 'Location' }
  ]
  const [items,setExpenses]=useState(dummy_items);
  const [filteredYear,setFilteredYear]=useState('2020');

  function newExpenseAdder(expense) {
    setExpenses((prev)=>{
      return [expense,...prev]
    })
  };
  const filterFunction = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <h2>Expense Items </h2>
      
      <NewExpense onAddexpense={newExpenseAdder}/>
      <Card>
        <ExpensesFilter onChangeFilter={filterFunction} selected={filteredYear}/>
      {items.map((item)=>(
        <ExpenseItem
        expense={item}
      />
      ))}   
      </Card>
    </div>
  );
}

export default App;
