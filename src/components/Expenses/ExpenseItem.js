import React from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../Utility/Card";

const ExpenceItem = (props)  =>{
  

  return (
    <li>
      <Card className="expense-item">
        <ExpenceDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">₹ {props.expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenceItem;
