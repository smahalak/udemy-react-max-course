import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //this is the object from the submitHandler in ExpenseForm.js
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    onAddExpense(expenseData); // so now we have the expenseData object from the form plus an id from above that will go to App.js "lift the state"
    setIsEditing(false); //this closes the form when it is submitted
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* so when the button is clicked, isEditing becomes truthy */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* passing a function that will be triggered when the form is submitted */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {/* onCancel prop passes to the form so that when the cancel button is clicked setIsEditing becomes falsy */}
    </div>
  );
};

export default NewExpense;
