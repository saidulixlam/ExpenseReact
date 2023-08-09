import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEdit, setEdit] = useState(false);
    function submitHandler(expenseData) {
        const newdata = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddexpense(newdata);
        setEdit(false);
    }
    function startEdit() {
        setEdit(true);
    }
    function stopEdit() {
        setEdit(false);
    }
    return (
        <div className="btn">
            {!isEdit && <button onClick={startEdit} className="button">Add new expense</button>}
            {isEdit && <ExpenseForm onFormSubmit={submitHandler} onStopEditing={stopEdit} />}
        </div>
    );
}

export default NewExpense;