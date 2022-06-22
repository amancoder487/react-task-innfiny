import { list } from 'postcss'
import React from 'react'
import Expenseitem from './Expenseitem'

const Expense = (props) => {
  
  return (
    <div>


        <Expenseitem dataList={props.list}  DeleteHander={props.DeleteHander}  handleEditClick={props.handleEditClick}/>
       
    </div>
  )
}

export default Expense