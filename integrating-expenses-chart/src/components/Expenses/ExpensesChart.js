import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = (props) =>{
  // console.log(props.filteredExpensesForChart);
  return <div>
    <Chart chartExpenses={props.filteredExpensesForChart}/>
  </div>
}

export default ExpensesChart;
