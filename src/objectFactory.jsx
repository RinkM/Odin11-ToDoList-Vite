



const TaskFactory = (values, activeProject) => {
  const creationDate = Date.now()
  
  const taskObject = {
    toDoName: values.toDoName,
    completed:false,
    reactKey: creationDate,
    description: values.description,
    deadline: values.deadline,
    priority: values.priority
  }



    if (taskObject.deadline ==""){
      taskObject.dueDate = false
    } else{
    taskObject.dueDate = new Date(values.deadline+"T23:59:59")}

    const finalTaskObject = Object.assign(taskObject, activeProject)

    return finalTaskObject
    }

const ProjectFactory = (values, projectLibrary) => {
  const creationDate = Date.now()

  const projectColors = [
    "#315C2B",
    "#5AD2F4",
    "#A599B5",
    "#EE964B",
    "#E94F37",
    "#A51080",
    "#2A9D8F",
    "#F4A261"
  ]

  const index = (projectLibrary.length - 1)-(Math.floor(projectLibrary.length/projectColors.length)*projectColors.length)

  const randomNum =  ()=>{
    let randomNum = Math.floor(Math.random()*projectColors.length);
    return(randomNum)
  };

  const project = {
    projectName: values.project,
    reactKeyProject:creationDate,
    projectColor:projectColors[index],
    canDelete:true
  }
  // console.log("Factory - projectInfo:",project)


  
  return project
}





export default {TaskFactory, ProjectFactory}