import Card from "../UI/Card";
import {useState} from 'react';
import './ExpenseForm.css'  
const ExpenseForm = () => {
    const [enteredTitle,setTitle]=useState("0");
    const [enteredAmount,setAmount]=useState("0");
    const [enteredDate,setDate]=useState("0");
    const titleHandler =(e)=>{
        setTitle(e.target.value);
        //console.log(e.target.value);
    };
    const amountHandler =(e)=>{
        setAmount(e.target.value);
        //console.log(e.target.value);
    };
    const datetHandler =(e)=>{
        setDate(e.target.value);
        //console.log(e.target.value);
    };
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
                        <input type="date" onChange={datetHandler}/>
                    </div>
                    <div className="button"></div>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        </Card>
    );
}

export default ExpenseForm;