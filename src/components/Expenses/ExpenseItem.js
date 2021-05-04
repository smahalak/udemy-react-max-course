import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  // title is the current state value, setTitle is the function for updating that
  const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by react"); this is because there are 4 expenseItems in Expense.js

  const clickHandler = () => {
    setTitle("updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
