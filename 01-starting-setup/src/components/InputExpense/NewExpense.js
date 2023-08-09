import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    function submitHandler(expenseData) {
        const newdata={
            ...expenseData,
            id:Math.random().toString()
        }
        props.onAddexpense(newdata);
    }
    
    return ( 
        <div>
            <ExpenseForm onFormSubmit={submitHandler}/>
        </div>
     );
}
 
export default NewExpense;