import './ExpenseItem.css';
const ExpenseItem = (props) => {
    // const expDate= new Date(2021, 2, 2).toISOString();
    // const expPrice=234.90;
    // const expTitle='Car Insurance';
    // const location = 'Location';
    return (
        <div className="expense-item">
            <div>{props.expense.date}</div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
            </div>
            <div className="expense-item__price">
                ${props.expense.amount}
            </div>
            <div className="location">
                {props.expense.location}
            </div>
        </div>
    );
}

export default ExpenseItem;