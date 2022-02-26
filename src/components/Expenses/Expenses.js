import React ,{useState} from "react";
import ExpensesList from './ExpensesList'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import Card from "../Utility/Card";


const Expenses = (props) => {
  const [ddlValue,setddlValue] = useState('2020');

  const filterSelectionHandler = year =>{
    setddlValue(year);
  }
  const filteredItems = props.Items.filter(expense => {
    return expense.date.getFullYear().toString() === ddlValue;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={ddlValue}
        onFilterSelection={filterSelectionHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList Items={filteredItems} />
    </Card>
  );
}

export default Expenses;