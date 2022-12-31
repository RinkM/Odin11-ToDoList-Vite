import { useState } from 'react'
import DisplayList from './DisplayList'
import toDoLibrary from './toDoLibrary'
import DisplayProjects from './DisplayProjects'
import projectLibrary from './projectLibrary'

// if(!localStorage.getItem('bgcolor')) {
//   populateStorage();
// } else {
//   setStyles();
// }


// JSON.parse(localStorage.projectLibrary)
// JSON.parse(localStorage.taskLibrary)

const loadLocalTaskLibrary = ()=>{console.log((toDoLibrary))
  if (!localStorage.taskLibrary){
    return toDoLibrary
  } else {const taskLibrary = JSON.parse(localStorage.taskLibrary)
    return taskLibrary
  }
}

function App() {
  const [library, setLibrary] = useState(loadLocalTaskLibrary())
  const [activeProject, setActiveProject]= useState(projectLibrary[0][0])
  const [deadlineFilter, setDeadlineFilter] = useState(projectLibrary[1])

  return (
    <div className="App backgroundApp">
      <div className='appHeader backgroundApp'><h1>Get Stuff Done!</h1></div>
      <DisplayProjects  hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} hookActiveProject = {[activeProject, setActiveProject]}/>

      <DisplayList  hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} hookActiveProject = {[activeProject, setActiveProject]} hookLibrary = {[library, setLibrary]}/>
    </div>
  )
}

export default App
