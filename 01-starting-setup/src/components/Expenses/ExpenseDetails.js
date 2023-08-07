import Card from '../UI/Card';
import './ExpenseDetails.css';
const ExpenseDetails= (props) => {
    return ( 
        <Card className="expenses">
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
            <div className="location">
                {props.location}
            </div>
        </Card>
     );
}
 
export default ExpenseDetails ;