import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //this is the object from the submitHandler in ExpenseForm.js
      id: Math.random().toString()
    }
    //console.log(expenseData);
    onAddExpense(expenseData); // so now we have the expenseData object from the form plus an id from above that will go to App.js "lift the state"

  }

  return (
    <div className="new-expense">
      {/* passing a function that will be triggered when the form is submitted */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
