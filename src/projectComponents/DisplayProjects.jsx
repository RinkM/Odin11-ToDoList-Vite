
import { useState } from "react";
import FormProject from "./FormProject";
import projectLibrary from "./projectLibrary";
import FilterTimeBtns from "./FilterTimeBtns";
import FilterProjectBtns from "./FilterProjectBtns";




const loadLocalProjectLibrary = ()=>{
  // console.log((projectLibrary[0]))
  if (!localStorage.projectLibrary){
    return projectLibrary[0]
  } else {const projectLibrary = JSON.parse(localStorage.projectLibrary)
    return projectLibrary
  }
}

const DisplayProjects = (props)=>{

  const [activeProject, setActiveProject] = props.hookActiveProject
  const [projects, setProjects] = useState(()=>loadLocalProjectLibrary())
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter
  const [library, setLibrary] = props.hookLibrary

const addProjectBtn = ()=>{
  
  const form = document.getElementById("formProject")
  form.classList.remove("hidden")
  form.classList.toggle("flex")
}

function closeProjects () {
  const navLeft = document.getElementById("projectDisplay");
  navLeft.classList.add("hiddenProject")
}





return(
  <div id = "projectDisplay" class = "hiddenProject">
    <div id = "navProject" className='navLeft'>
    
    

      <div className="projectHeader"><h2>Projects</h2></div>
      
      <FilterTimeBtns 
        hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} 
        hookProject = {[projects, setProjects]} 
        hookActiveProject = {[activeProject, setActiveProject]}/>
      <FilterProjectBtns 
        hookLibrary = {[library, setLibrary]}
        hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} 
        hookProject = {[projects, setProjects]} 
        hookActiveProject = {[activeProject, setActiveProject]}  />

      <button id = "addProjectBtn" className = "projectListItem" key="addProjectBtn"
        onClick= {()=>addProjectBtn()}>     
        + New Project
      </button>
      <FormProject 
        hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} 
        hookProject = {[projects, setProjects]}
        hookActiveProject = {[activeProject, setActiveProject]} />

      <button id = "cancelBtn" className = "projectListItem" key="addProjectBtn"
        onClick= {()=>closeProjects()}>
        Cancel
      </button>
    </div>
  </div>
  
)

}


export default DisplayProjects