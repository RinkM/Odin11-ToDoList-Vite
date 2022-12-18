


const taskFactory = (values) => {
  const creationDate = Date.now()
  
  const taskObject = {
    toDoName: values.toDoName,
    completed:false,
    reactKey: creationDate,
    description: values.description,
    deadline: values.deadline,
    priority: values.priority,
    project:"Food"}

    if (taskObject.deadline ==""){
      taskObject.dueDate = false
    } else{
    taskObject.dueDate = new Date(values.deadline+"T23:59:59")}
    
    console.log(taskObject)
    return taskObject
    }

export default taskFactory