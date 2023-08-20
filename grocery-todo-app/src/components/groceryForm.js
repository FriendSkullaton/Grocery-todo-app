import React, {useState} from 'react'

function GroceryForm(props) {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit ({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        
        setInput('');
    };

  return (
<form className="grocery-form" onSubmit={handleSubmit}>
    <input 
    type="text" 
    placeholder="Add an item" 
    value= {input} 
    name="text" 
    className="grocery-input"
    onChange={handleChange}
    />
    <button className="grocery-button">Add item</button>
</form>
  )
}

export default GroceryForm