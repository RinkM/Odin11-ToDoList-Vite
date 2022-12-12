import { useState } from "react"

import toDoLibrary from "./toDoLibrary"



const DisplayList = (props) =>{
  const [state, setState] = useState()
  const [library, setLibrary] = props.hookLibrary

  


  const markComplete = (reactKey)=> {
    const index = toDoLibrary.findIndex(item =>{
      return item.reactKey == reactKey
    })
    const removeTask = document.getElementById(reactKey)
    removeTask.classList.add("removeTaskAnimation")


    toDoLibrary.splice(index,1)
    setTimeout(()=>setLibrary([...toDoLibrary]), 1000)
    


  }


  const ListItem =  (props)=> {
    return (
    <div className = "toDoItem" id = {props.item.reactKey}>
    {props.item.toDoName} 
    <button onClick={()=>markComplete(props.item.reactKey)} className="finishedBtn">Finished</button>
  </div>
  )}


  return (
    <div id = "toDoList">
      {library.map((item)=>
        <ListItem key ={item.reactKey}
          item = {item}/>
        )}
      </div>
  )

}

export default DisplayList
