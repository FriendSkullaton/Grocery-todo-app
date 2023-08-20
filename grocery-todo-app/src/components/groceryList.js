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

    const removeGrocery = id => {
        const removeArr=[...grocerys].filter(grocery => grocery.id !== id)

        setGrocerys(removeArr)
    }

    const updateGrocery = (groceryId, newValue) => {
        setGrocerys(prev =>prev.map(item => (item.id === groceryId ? newValue : item )))
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

    <GroceryForm 
    onSubmit={addGrocery} 
    />

    <Grocery 
    grocerys={grocerys} 
    completeGrocery={completeGrocery}
    removeGrocery = {removeGrocery}
    updateGrocery = {updateGrocery}
    />
    </>
  )
}

export default GroceryList