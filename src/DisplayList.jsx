import { useState } from "react"

import toDoLibrary from "./toDoLibrary"


// some help -  made as a ul li list.
// https://reactjs.org/docs/lists-and-keys.html

const DisplayList = (props) =>{
  const [state, setState] = useState()
  const [library, setLibrary] = props.hookLibrary;


  const markComplete = (itemId)=> {
    const index = library.findIndex(item =>{
      return item.itemId == itemId
    })
    library.splice(index,1)
    setLibrary(toDoLibrary)


  }


  const ListItem =  (props)=> {
    console.log(props.item)
    return <div className = "toDoItem">
    {props.item.toDoName} 
    <button onClick={()=>markComplete(props.item.itemId)} className="finishedBtn">Finished</button>
  </div>
    
    
    
    
  }
  
  return (<div id = "toDoList">
      {library.map((item)=>
        <ListItem key ={item.itemId}
          item = {item}/>
        )}
      </div>
  )

}

export default DisplayList
