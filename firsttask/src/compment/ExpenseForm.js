import React, { useState } from 'react'

const ExpenseForm = (props) => {
console.log("chirag",props.name);

    const [name, setName] = useState('')
    const [enteredDate, setenteredDate] = useState('')
    const [amount, setAmount] = useState('')
console.log(props);

    const dateHander = (e) => {
        setenteredDate(e.target.value)

    }
    const nameHander = (e) => {
        setName(e.target.value)

    }

    const amountHander = (e) => {
        setAmount(e.target.value)


    }

    const submitHander = (e) => {
        e.preventDefault();
        const newAdd = {name,  date:new Date(enteredDate),amount,}
        if(newAdd.name && newAdd.date && newAdd.amount){
            props.AddnewExpense(newAdd)
        }
        

        setName("")
        setenteredDate("")
        setAmount("")


    }
    return (

        <div>
            <form onSubmit={submitHander} className="border-2 border-solid border-[black]">
                <div className='flex justify-around' >
                    <div>

                        <label>Date</label>
                        <input type="date"value={enteredDate} onChange={dateHander} className="border-2 border-solid border-[black]"/>
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={nameHander} className="border-2 border-solid border-[black]"/>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="number" value={amount}  onChange={amountHander} className="border-2 border-solid border-[black]"/>
                    </div>

                </div>
                <div className='flex justify-end'>
                    <button >Add-Data</button>
                </div>
            </form>
        </div>

        
    )
}

export default ExpenseForm