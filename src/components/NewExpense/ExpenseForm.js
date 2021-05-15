import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // instead of the three separate useStates above
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    // console.log(event);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //spread operator takes the object and pulls out all the key value pairs and adds them to this new object
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // the above is actually incorrect in some cases; react schedules state updates and doesn't perform them instantly. So you could have a lot of state updates at the same time and could then be depending on an outdated or incorrect state snapshot

    // the below will gurantee that the state snapshot will provide the latest state snapshot

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //this is needed because we are choosing to use three separate states above instead of the single combined state userInput
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //parses date string and turns it into a date object
    };

    //this is the function that is passed from NewExpense.js which add the id to the above expenseData
    onSaveExpenseData(expenseData);
    //console.log(expenseData);
    setEnteredAmount(""); //this works because of the two way binding on the inputs
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* value={enteredTitle} is two way binding. We listen for the input and then feed the state back into the input so that when we change the state we also change the input */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* type=button so it doesn't submit the form */}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
