import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses({expenses}){
  return (
    <div className="expenses">
      {expenses.map((expense)=>{
        return (<ExpenseItem key={expense.id} date={expense.date} title={expense.title} location={expense.location} price={expense.price} />)
      })}
      </div>
  )
}

export default Expenses;
