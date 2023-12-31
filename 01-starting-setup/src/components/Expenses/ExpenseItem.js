import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
const ExpenseItem = (props) => {
    //const id=Math.random();
    const title = props.expense.title;
    const [price, setPrice] = useState(props.expense.amount);
    function clickFunction() {
        setPrice('100');
        console.log(price);
    }
    // console.log(props.expense.id);
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <ExpenseDetails amount={price} location={props.expense.location} title={title} key={props.expense.id}/>
            <button onClick={clickFunction}>Update Expense</button>
        </Card>
    );
}

export default ExpenseItem;