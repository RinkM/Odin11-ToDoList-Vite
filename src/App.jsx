import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FormAddTask from './FormAddTask'
import DisplayList from './DisplayList'
import toDoLibrary from './toDoLibrary'
import DisplayProjects from './DisplayProjects'
import projectLibrary from './projectLibrary'






function App() {
  const [library, setLibrary] = useState(toDoLibrary)
  const [activeProject, setActiveProject]= useState(projectLibrary[0])
  return (
    <div className="App backgroundApp">
      <div className='appHeader backgroundApp'><h1>Get Stuff Done!</h1></div>
      <DisplayProjects hookActiveProject = {[activeProject, setActiveProject]}/>
      <DisplayList hookActiveProject = {[activeProject, setActiveProject]} hookLibrary = {[library, setLibrary]}/>
    </div>
  )
}

export default App
