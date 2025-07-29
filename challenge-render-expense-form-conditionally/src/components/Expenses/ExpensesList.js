import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) =>{
  if (props.items.length === 0){
    return <h2 className="expenses-list__fallback">No expenses Found</h2>
  }
  return <>
  <ul className="expenses-list">
    {props.items.map((item)=>{
      return <ExpenseItem key={item.id}  title={item.title} date={item.date} price={item.price} />
      
    })}
  </ul>
  {props.items.length === 1 && (<p className="expenses-list__oneItem">Only one expense found. Please add more</p>)}
  </>
}

export default ExpensesList;