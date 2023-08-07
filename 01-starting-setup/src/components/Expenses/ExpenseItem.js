import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    // const expDate= new Date(2021, 2, 2).toISOString();
    // const expPrice=234.90;
    // const expTitle='Car Insurance';
    // const location = 'Location';

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <ExpenseDetails amount={props.expense.amount} location={props.expense.location} title={props.expense.title}/>
            <div></div>
        </Card>
    );
}

export default ExpenseItem;