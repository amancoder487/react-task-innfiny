
import Expense from './compment/Expense';
import NewExpense from './compment/NewExpense';
import { useState } from 'react';

export default function App(props) {
  const [listData,setListData] =useState([])

 


  const NewDataExpense =(data)=>{

    setListData([...listData,data])
    
  }
  
  const DeleteHander =(id)=>{
    let uu = listData.filter(
        (p)=>{
            return(
                p.id !== id
           
            )

        })
      
        setListData(uu)
      }

    const handleEditClick =(item)=>{
    //  console.log("formdata",item);
      console.log("log",item)


      setListData(...item)
  //  set
    }
  
  return (
    <div>
      <NewExpense AddHandel={NewDataExpense} list={listData }/>
      <Expense list={listData} setListData={setListData}  DeleteHander={DeleteHander}  handleEditClick={handleEditClick}/>

    </div>
    
  )
}