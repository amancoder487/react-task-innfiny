import React from 'react'



const Expenseitem = (props) => {
    //console.log("sxsxsxs",props.date)


    return (
        props.dataList.map((p ,key)=>{
            return(
                <div key={p.id} className='flex  border-2 border-blue-500 border-solid m-[26px]'>

            <div className='font-bold text-lg text-red-500 whitespace-nowrap ml-[35px] border-[2px] border-black bg-orange-300 text-center border-solid w-[94px]'>
                <div>{p.date.getDate()}</div>
                <div>{p.date.getMonth()}</div>
                <div>{p.date.getFullYear()}</div>
            </div>
            <div className='flex justify-between w-[100vw] items-center'>
                <h1 className='font-bold text-lg text-red-500'>{p.name}</h1>
                <div className='font-bold text-lg text-red-500'>{p.amount}</div>
            </div>
            <div>
                <button onClick={() => props.handleEditClick(p)}>Edit</button>
                <button onClick={() => {props.DeleteHander(p.id)}}>Delete</button>
            </div>
        
        </div>


            )
        })

        


    )
}

export default Expenseitem
