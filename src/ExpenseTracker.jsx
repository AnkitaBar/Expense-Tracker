import React, { useState } from 'react'
import './ExpenseTracker.css'

const ExpenseTracker = () => {
    const [input,setInput] = useState('');
    const [amount,setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        if (!input || !amount) return;

        const newExpense = {
            id : expenses.length + 1,
            title : input ,
            amount : amount
        } ;
        setExpenses([...expenses,newExpense]);
        setInput('');
        setAmount('');
    }

    const deleteExpense = (id) =>{
        setExpenses(expenses.filter(expense => expense.id !== id))
    }
  return (
    <div className='container'>
      <h2>Expense Tracker</h2>
      <div className='expense'>
        <input placeholder='Expense' type='text'value={input} onChange={(e) => setInput(e.target.value)}/>
        <input placeholder='Amount' type='number'
            value={amount} onChange={(e) => setAmount(e.target.value)}/>
        
        <button onClick={addExpense} className='add'>Add Expense</button>
      </div>
      <ul className='expense-list'>
      {expenses.map((expense) => (
        <li key={expense.id}>
            
            <span >{expense.title}</span>
            
            <span>${expense.amount}</span>

            <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
        </li>
      ))
      }

      </ul>
    </div>
  )
}

export default ExpenseTracker
