import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false && (<button type="button" onClick={() =>{
      setIsEditing(true);
  }}>Add Expense</button>)}
      {isEditing === true && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={() =>{
    setIsEditing(false)
  }} />)}
      
    </div>
  );
};

export default NewExpense;
