import React, {useState} from 'react'
import GroceryForm from './groceryForm'

function GroceryList() {
    const [groceries, setGroceries] = useState([])
    
  return (
    <>
    <h1>Grocery List</h1>
    <GroceryForm />
    </>
  )
}

export default GroceryList