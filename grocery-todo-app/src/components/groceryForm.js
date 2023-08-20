import React, {useState, useEffect, useRef} from 'react'

function GroceryForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

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
    {props.edit ? ( 
    <>
    <input 
    type="text" 
    placeholder="Update item" 
    value= {input} 
    name="text" 
    className="grocery-input"
    onChange={handleChange}
    ref={inputRef}
    />
    <button className="grocery-button">Update</button>
    </>) : ( 
        <>
        <input 
        type="text" 
        placeholder="Add an item" 
        value= {input} 
        name="text" 
        className="grocery-input"
        onChange={handleChange}
        ref={inputRef}
        />
        <button className="grocery-button">Add item</button>
        </>)
        }


   
</form>
  )
}

export default GroceryForm