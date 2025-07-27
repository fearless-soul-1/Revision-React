import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../../UI/Card.js";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
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
