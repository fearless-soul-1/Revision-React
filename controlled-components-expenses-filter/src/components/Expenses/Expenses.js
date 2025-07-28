import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  const changeFilterHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            location={expense.location}
            price={expense.price}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
