import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";

function ExpenseItem(props) {

  function handleButtonClick(){
    console.log("Button Clicked!")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={handleButtonClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
