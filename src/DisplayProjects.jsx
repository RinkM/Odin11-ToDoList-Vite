
import { useState } from "react";
import FormProject from "./FormProject";
import projectLibrary from "./projectLibrary";






const DisplayProjects = (props)=>{

  const [activeProject, setActiveProject] = props.hookActiveProject
  const [projects, setProjects] = useState(projectLibrary)
  

  const listProjects = projects.map((project) =>
    <button id = {project.reactKeyProject} style ={{color: project.projectColor}} className = "projectListItem" key={project.reactKey}
      onClick= {()=>projectClick(project)}>     
      {project.projectName}
    </button>
);

  const projectClick = (name)=>{
    setActiveProject(name)
    console.log("active-Project", activeProject)

  };

return(
  <div id="projectContainer backgroundForm">

    <FormProject hookProject = {[projects, setProjects]} hookActiveProject = {[activeProject, setActiveProject]} />
    <div className="projectList">{listProjects}</div>

  </div>
)

}


export default DisplayProjects