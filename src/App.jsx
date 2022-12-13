import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddForm from './addForm'
import DisplayList from './DisplayList'
import toDoLibrary from './toDoLibrary'
import './App.css'

function App() {
  const [library, setLibrary] = useState(toDoLibrary)

  return (
    <div className="App">

      <AddForm hookLibrary = {[library, setLibrary]}/>
      <DisplayList hookLibrary = {[library, setLibrary]}/>
    </div>
  )
}

export default App
