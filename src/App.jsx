import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddForm from './addForm'
import DisplayList from './DisplayList'
import toDoLibrary from './toDoLibrary'
import DisplayProjects from './DisplayProjects'

import { formatDistanceToNow, differenceInDays, differenceInMilliseconds  } from 'date-fns'







function App() {
  const [library, setLibrary] = useState(toDoLibrary)

  return (
    <div className="App backgroundApp">
      <div className='appHeader backgroundApp'><h1>Get Stuff Done!</h1>
       
      </div>
      <div className='navLeft flexWrapper backgroundApp'>
        <DisplayProjects/>

        <AddForm hookLibrary = {[library, setLibrary]}/>
      </div>
      <DisplayList hookLibrary = {[library, setLibrary]}/>
    </div>
  )
}

export default App
