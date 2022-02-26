import React ,{useState}from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {

  const [isEdting, setIsEditing] = useState(false);

  const getDatafromChildandModify = (expense)=>{
    const entredExpenseData = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(entredExpenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () =>{
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEdting && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEdting && (
        <ExpenseForm
          onSaveExpense={getDatafromChildandModify}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
  
};

export default NewExpenses;
