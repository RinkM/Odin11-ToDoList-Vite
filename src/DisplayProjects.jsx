
import { useState } from "react";
import ProjectForm from "./ProjectForm";
import projectLibrary from "./projectLibrary";






const DisplayProjects = ()=>{
  const [activeProject, setActiveProject]= useState("All")
  const [projects, setProjects] = useState(projectLibrary)


  const listProjects = projects.map((project) =>
    <button id = {project.reactKey} className = "projectListItem" key={project.reactKey}
      onClick= {()=>projectClick(project.name)}>     
      {project.name}
    </button>
);

  const projectClick = (name)=>{
    setActiveProject(name)
    console.log(activeProject)

  };

return(
  <div id="projects">
    <ProjectForm hookProject = {[projects, setProjects]} />
    {listProjects}

  </div>
)

}


export default DisplayProjects