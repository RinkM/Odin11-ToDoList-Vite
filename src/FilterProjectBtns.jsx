

import {formatDistanceToNow, differenceInMilliseconds} from "date-fns";

import { useState } from "react";





const FilterProjectBtns = (props) =>{
  const [projects, setProjects] = props.hookProject
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter




  const highlightProjectBtn = (btnID)=> {
    const projectList = [...document.getElementById("projectListID").children]
    // projectList.forEach(button => button.classList.remove("activeProject"))

    const projectBtn = document.getElementById(btnID)
    projectBtn.classList.add("activeProject")

  }

  const projectClick = (name)=>{
    const projectBtn = document.getElementById(name.reactKeyProject)
    projectBtn.classList.add("activeProject")
    
    // highlightProjectBtn(name.reactKeyProject)

    setActiveProject(()=>name)
    console.log("project name",name)
    console.log("active-Project", activeProject)
    
  };

  



  const ProjectFilters = (project) =>{    
      return(
      <button id = {project.project.reactKeyProject} 
        style ={{color: project.project.projectColor}} 
        className = "projectListItem" 
        key={Date.now()}
        onClick= {()=>projectClick(project.project)}>
        {project.project.projectName}
      </button>)
    }

  return(
    <div id = "projectListID" className="filterList projectList">
      {projects.map((project)=>{
        return <ProjectFilters key = {"key"+project.reactKeyProject} project = {project}/>}
     )
    }


  </div>)

}




export default FilterProjectBtns

