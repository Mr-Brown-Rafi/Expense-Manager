import React from 'react';
import './ExpensesList.css';
import ExpenceItem from './ExpenseItem';

const ExpensesList = (props) =>{

    if(props.Items.length === 0)
    {
        return(
            <h2 className='expenses-list__fallback'>No Expenses found.</h2>
        )
    }

    return (
      <ul className="expenses-list">
        {props.Items.map((expenseItem) => (
          <ExpenceItem key={expenseItem.id} expense={expenseItem} />
        ))}
      </ul>
    );
  
}
export default ExpensesList 