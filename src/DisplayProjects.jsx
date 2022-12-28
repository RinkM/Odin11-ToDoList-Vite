
import { useState } from "react";
import FormProject from "./FormProject";
import projectLibrary from "./projectLibrary";






const DisplayProjects = (props)=>{

  const [activeProject, setActiveProject] = props.hookActiveProject
  const [projects, setProjects] = useState(projectLibrary)
  

  const listProjects = projects.map((project) =>
    <button id = {project.reactKeyProject} 
      style ={{color: project.projectColor}} 
      className = "projectListItem" 
      key={project.reactKey}
      onClick= {()=>projectClick(project)}>
      {project.projectName}
    </button>
);

const highlightProjectBtn = (btnID)=> {
  const projectList = [...document.getElementById("projectListID").children]
  projectList.forEach(button => button.classList.remove("activeProject"))

  const projectBtn = document.getElementById(btnID)
  projectBtn.classList.toggle("activeProject")
}


  const projectClick = (name)=>{
    console.log("name",name)
    highlightProjectBtn(name.reactKeyProject)

    setActiveProject(name)
    console.log("active-Project", activeProject)
  };

const addProjectBtn = ()=>{
  
  const form = document.getElementById("formProject")
  form.classList.remove("hidden")
  form.classList.toggle("flex")
}

return(
  <div className='navLeft flexWrapper'>
    <div className="projectHeader"><h2>Projects</h2></div>
    <div id = "projectListID" className="projectList">{listProjects}</div>
    <button id = "addProjectBtn" style ={{color: "white"}} className = "projectListItem" key="addProjectBtn"
      onClick= {()=>addProjectBtn()}>     
      + New Project
    </button>
    <FormProject hookProject = {[projects, setProjects]} hookActiveProject = {[activeProject, setActiveProject]} />
  </div>
  
)

}


export default DisplayProjects