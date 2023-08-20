import React, {useState} from 'react'
import GroceryForm from './groceryForm'
import Grocery from './grocery'

function GroceryList() {
    const [grocerys, setGrocerys] = useState([])

    const addGrocery = grocery => {
        // if (!grocery.text || /^\s*$.test(grocery.text)) {
        //     return;
        // }

        const newGrocerys = [grocery, ...grocerys];
        setGrocerys(newGrocerys);
    }

    const completeGrocery = id => {
        let updatedGrocerys = grocerys.map(grocery => {
            if (grocery.id === id){
                grocery.isComplete = !grocery.isComplete
            }
            return grocery
        })
        setGrocerys(updatedGrocerys);
    }
    
  return (
    <>
    <h1>Grocery List</h1>
    <GroceryForm onSubmit={addGrocery} />
    <Grocery grocerys={grocerys} completeGrocery={completeGrocery}/>
    </>
  )
}

export default GroceryList