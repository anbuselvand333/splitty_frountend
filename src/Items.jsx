import React, { useState } from 'react'
import {useFetchbill, useFetchamt} from './useFetch'


function Items() {
    const [item]=useFetchbill('https://splitty-backend-aun1.onrender.com/bill');

    const[selected, setSelected]=useState([]);

    const{amount, pur_item}=useFetchamt('https://splitty-backend-aun1.onrender.com/pay');

    const SelectItem=(id)=>{
        setSelected( prev=>
            prev.includes(id) ? prev.filter(itemId=>itemId !== id) : [...prev,id]
         )
    }

    const handleSubmit =()=>{
        
        pur_item({
            item_ids: selected
        })
    }

  return (

    item && (
        <>
        <div className='container'>
            <h2 className='text-center mt-3'>Splitty</h2>
            <h4>Select the Items</h4>
            <ol className='list-group mb-3'>
                {item.items.map((item)=>(
                    <li className='list-group-item' key={item.id}>
                        <input type='checkbox' className='form-check-input me-3'onChange={()=>SelectItem(item.id)} />
                        {item.name} - Rs {item.price}
                        
                    </li>
                ))}
            </ol>

            <h4>Total Amount: ₹{amount.amount}</h4>
            <a href={amount.upi_link}
               target="_blank" 
               rel="noopener noreferrer" 
               style="padding: 10px 20px; background: #28a745; color: white; text-decoration: none; border-radius: 5px;">
               Pay link
            </a>

            <div className="text-center">
                <button className='btn btn-primary m-3' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        </>
    )

  )
}


export default Items


