import React, {useState} from 'react'
import GroceryForm from './groceryForm'
import { GrClose } from 'react-icons/gr'
import {AiFillEdit} from 'react-icons/ai'

const Grocery = ({grocerys, completeGrocery, removeGrocery, updateGrocery }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateGrocery(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <GroceryForm edit={edit} onSubmit={submitUpdate} />
    }


  return grocerys.map((grocery, index) => (
    <div 
    className={grocery.isComplete ? 'grocery-row complete' : 'grocery-row'} 
    key={index}>
        
        <div 
        key={grocery.id} 
        onClick={() => completeGrocery(grocery.id)}>
            {grocery.text}
        </div>

        <div className='icons'>

        <AiFillEdit 
             onClick={() => setEdit({id: grocery.id, value: grocery.text})}
             className='edit-icon'
            />

            <GrClose
             onClick={() => removeGrocery(grocery.id)}
             className='delete-icon'
            />
        </div>

    </div>
  ))
}

export default Grocery