import React, {useState} from 'react'
import GroceryForm from './groceryForm'

function Grocery() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


  return Grocery.map((grocery, index) => (
    <div 
    className={grocery.isComplete ? 'grocery-row complete' : 'grocery-row'} 
    key={index}>
        
        <div 
        key={grocery.id} 
        onClick={() => completeGrocery(grocery.id)}>
            {grocery.text}
        </div>

        <div className='icons'>

        </div>

    </div>
  ))
}

export default Grocery