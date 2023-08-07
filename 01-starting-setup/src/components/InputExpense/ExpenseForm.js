import Card from "../UI/Card";
import './ExpenseForm.css'
const ExpenseForm = () => {
    const titleHandler =(e)=>{
        console.log(e.target.value);
    }
    const amountHandler =(e)=>{
        console.log(e.target.value);
    }
    return (
        <Card className="input-form">
            <div className="new-expense">
                <form action="#">
                    <div className="title">
                        <label htmlFor="title">Title:</label>
                        <input type="text" onChange={titleHandler}/>
                    </div>
                    <div className="amount">
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" onChange={amountHandler}/>
                    </div>
                    <div className="date">
                        <label htmlFor="date">Date:</label>
                        <input type="date" />
                    </div>
                    <div className="button"></div>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        </Card>
    );
}

export default ExpenseForm;