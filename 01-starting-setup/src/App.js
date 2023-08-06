import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.23, date: new Date(2021, 2, 2).toString(), location: 'Location' },
    { id: 'e2', title: 'Car Insurance', amount: 44.63, date: new Date(2022, 2, 2).toString(), location: 'Location' },
    { id: 'e3', title: 'New Desk', amount: 70.90, date: new Date(2021, 2, 12).toString(), location: 'Location' },
    { id: 'e4', title: 'Toilet Paper', amount: 104.93, date: new Date(2020, 9, 12).toString(), location: 'Location' }
  ]
  return (
    <div>
      <h2>Expense Items </h2>
      <ExpenseItem
        expense={expenses[0]}
      />
       <ExpenseItem
        expense={expenses[1]}
      />
       <ExpenseItem
        expense={expenses[2]}
      />
       <ExpenseItem
        expense={expenses[3]}
      />
    </div>
  );
}

export default App;
