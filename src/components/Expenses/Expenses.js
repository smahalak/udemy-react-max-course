import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    //console.log("Expense.js");
    //console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  // when user selects a year from the drop down only the expenses with the selected date will appear
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        {/* selected={filteredYear} is the two way binding so the dropdown defaults to 2021 whish is the useState above */}
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        {/* && will fire if truthy */}
        {filteredExpenses.length === 0 && <p>No expense found.</p>}

        {/* previously was props.items.map but we replaced w/ filteredExpenses so that the array is now filtered for the year drop down to filter */}

        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}


      </Card>
    </div>
  );
};

export default Expenses;
