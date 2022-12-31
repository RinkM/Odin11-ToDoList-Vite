

import {formatDistanceToNow, differenceInMilliseconds} from "date-fns";

import { useState } from "react";





const FilterProjectBtns = (props) =>{
  const [projects, setProjects] = props.hookProject
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter


  const highlightProjectBtn = (project)=> {
    
    const activeProject = document.getElementById("project"+project.reactKeyProject)
    const projectList = [...document.getElementById("projectListID").children]
    projectList.forEach(button => button.classList.remove("activeProject"))
    activeProject.classList.add("activeProject")
  }

  const projectClick = (project)=>{
    console.log("project project",project)
    highlightProjectBtn(project)

    setActiveProject(project)
  };

  

  const filterButtons = projects.map((project) =>{
    return(
      <button id = {"project"+project.reactKeyProject} 
        style ={{color: project.projectColor}} 
        className = "projectListItem" 
        key={"projectBtn"+project.reactKeyProject}
        onClick= {()=>projectClick(project)}>
        {project.projectName}
      </button>
      )

      });


  const ProjectFilters = (project) =>{    
      return(
      <button id = {project.project.reactKeyProject} 
        style ={{color: project.project.projectColor}} 
        className = "projectListItem" 
        key={"key"+Date.now()}
        onClick= {()=>projectClick(project.project)}>
        {project.project.projectName}
      </button>)
    }

  return(
    <div id = "projectListID" className="filterList projectList">
      {filterButtons}
  </div>)

}

export default FilterProjectBtns

