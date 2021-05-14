import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // title is the current state value, setTitle is the function for updating that
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by react"); this is because there are 4 expenseItems in Expense.js


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
