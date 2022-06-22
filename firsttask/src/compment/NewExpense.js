import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const re =(data)=>{
        const newData ={
            ...data ,id:Math.random().toString()
        }
        props.AddHandel(newData)

    }
  return (
    <div>
        <ExpenseForm  AddnewExpense={re}/>
    </div>
  )
}

export default NewExpense