import { useEffect } from "react";
import toDoLibrary from "../taskComponents/toDoLibrary";
import projectLibrary from "./projectLibrary";




const FilterProjectBtns = (props) =>{
  const [projects, setProjects] = props.hookProject
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter
  const [library, setLibrary] = props.hookLibrary

  useEffect(()=>{
    delProjectBtn(activeProject)
  }, [activeProject])

const delProjectBtn = (project)=>{
  let allDelBtns = [...document.getElementsByClassName("delProjectBtn")]
  allDelBtns.forEach(button => button.classList.add("hidden"))

  const delBtn = document.getElementById("delProjectBtn"+project.reactKeyProject)
  if (delBtn){delBtn.classList.remove("hidden")}
  
}


  const highlightProjectBtn = (project)=> {
    delProjectBtn(project)
    let allProjectItems = [...document.getElementsByClassName("projectListItem")]
    const activeProject = document.getElementById("project"+project.reactKeyProject)
    allProjectItems.forEach(button => button.classList.remove("activeProject"))
    activeProject.classList.add("activeProject")
  }


  const deleteProject = (project)=>{
  console.log(project)
  console.log(library)
  
  // expected output: Array ["exuberant", "destruction", "present"]
  // error if there are tasks in there. 
  // user must complete or move the tasks to a different project. 

  // searches for the tasks 
  const result = library.filter(task => task.projectName == project.projectName);
  console.log(result);

  // removes the tasks with that project. 
  if (result.length != 0){
    result.map((task)=> {
      const taskIndex = library.findIndex(item =>{
        return item.reactKeyProject == task.reactKeyProject
      });
      library.splice(taskIndex,1)
      }
      );
    setLibrary([...library]);
    localStorage.setItem("taskLibrary", JSON.stringify(library))
     };

  const index = projects.findIndex(item =>{
  return item.reactKeyProject == project.reactKeyProject
  })

  projects.splice(index,1)
  setProjects([...projects])
  setActiveProject(projectLibrary[0][0])
  localStorage.setItem("projectLibrary", JSON.stringify(projects));
  
}

  const projectClick = (project)=>{
    console.log("project project",project)
    setActiveProject(project)
    highlightProjectBtn(project)
  };

  const DeleteIcon = (project)=>{
    if (project.props.canDelete){
    return(
      <button 
        className="delProjectBtn iconBtn hidden" 
        id = {"delProjectBtn"+project.props.reactKeyProject} 
        key = {"delProjectBtn"+project.props.reactKeyProject}
        style ={{color: "red"}} 
        onClick = {()=>deleteProject(project.props)}
        >
      <i 
      key = {"delete"+project.reactKeyProject} 
      className="fa fa-trash " 
      aria-hidden="true">
      </i>
    </button>)}

  }

  const filterButtons = projects.map((project) =>{
    return(
      <div id = {"projectContainer"+project.reactKeyProject}
      className = "projectListItem" 
      key={"projectLis"+project.reactKeyProject}>
      <button 
        id = {"project"+project.reactKeyProject} 
        style ={{color: project.projectColor}} 
        className = "projectListItem" 
        key={"projectBtn"+project.reactKeyProject}
        onClick= {()=>projectClick(project)}>
        {project.projectName}
      </button>
      <DeleteIcon props = {project}/>
      </div>

      )

      });
  return(
    <div id = "projectListID" className="filterList projectList">
      Categories
      {filterButtons}
      
  </div>)

}

export default FilterProjectBtns

