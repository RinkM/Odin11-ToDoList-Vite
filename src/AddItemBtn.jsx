import { useState } from "react"
import toDoLibrary from "./toDoLibrary"


// how to change the itemID to a new number each time?




const AddItemBtn = (formData) =>{
    const [state, setState] = useState()

    const ToDoFactory = (formData) => {
        const toDo = {
        toDoName: "newThing",
        completed:false,
        itemId:6}
        return toDo
    }
    const addItem = ()=>{
        toDoLibrary.push(ToDoFactory())
        console.log(toDoLibrary)
    }
    
    return (
        <button onClick={()=>addItem()}>Add Item</button>
    )
    

}


export default AddItemBtn