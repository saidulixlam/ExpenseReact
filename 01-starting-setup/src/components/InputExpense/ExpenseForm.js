import Card from "../UI/Card";
import {useState} from 'react';
import './ExpenseForm.css'  
const ExpenseForm = (props) => {
    const [enteredTitle,setTitle]=useState('');
    const [enteredAmount,setAmount]=useState('');
    const [enteredDate,setDate]=useState('');
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
    const submitForm=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            location:"Location",
        }
        props.onFormSubmit(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <Card className="input-form">
            <div className="new-expense">
                <form onSubmit={submitForm}>
                    <div className="title">
                        <label htmlFor="title">Title:</label>
                        <input type="text" value={enteredTitle} onChange={titleHandler}/>
                    </div>
                    <div className="amount">
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" value={enteredAmount} onChange={amountHandler}/>
                    </div>
                    <div className="date">
                        <label htmlFor="date">Date:</label>
                        <input type="date" value={enteredDate} onChange={datetHandler}/>
                    </div>
                    {/* <div className="location">
                        <label htmlFor="location">Place:</label>
                        <input type="text"/>
                    </div> */}
                    <div className="button"></div>
                    <button type="submit" >Add Expense</button>
                </form>
            </div>
        </Card>
    );
}

export default ExpenseForm;