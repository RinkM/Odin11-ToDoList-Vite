import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddForm from './addForm'
import DisplayList from './DisplayList'
import toDoLibrary from './toDoLibrary'
import DisplayProjects from './DisplayProjects'

function App() {
  const [library, setLibrary] = useState(toDoLibrary)

  return (
    <div className="App">
      <div className='appHeader'><h1>Get Stuff Done!</h1></div>
      <div className='flexWrapper'>
        <DisplayProjects/>
        <AddForm hookLibrary = {[library, setLibrary]}/>
      </div>
      <DisplayList hookLibrary = {[library, setLibrary]}/>
      
    </div>
  )
}

export default App
