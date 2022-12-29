
import { useState } from "react";
import FormProject from "./FormProject";
import projectLibrary from "./projectLibrary";
import FilterTimeBtns from "./FilterTimeBtns";
import FilterProjectBtns from "./FilterProjectBtns";






const DisplayProjects = (props)=>{

  const [activeProject, setActiveProject] = props.hookActiveProject
  const [projects, setProjects] = useState(projectLibrary[0])
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter

const addProjectBtn = ()=>{
  
  const form = document.getElementById("formProject")
  form.classList.remove("hidden")
  form.classList.toggle("flex")
}


return(
  <div className='navLeft flexWrapper'>
    <div className="projectHeader"><h2>Projects</h2></div>
    
    <FilterTimeBtns 
      hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} 
      hookProject = {[projects, setProjects]} 
      hookActiveProject = {[activeProject, setActiveProject]}/>
    <FilterProjectBtns 
      hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} 
      hookProject = {[projects, setProjects]} 
      hookActiveProject = {[activeProject, setActiveProject]}  />

    <button id = "addProjectBtn" style ={{color: "white"}} className = "projectListItem" key="addProjectBtn"
      onClick= {()=>addProjectBtn()}>     
      + New Project
    </button>
    <FormProject 
      hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} 
      hookProject = {[projects, setProjects]}
      hookActiveProject = {[activeProject, setActiveProject]} />
  </div>
  
)

}


export default DisplayProjects