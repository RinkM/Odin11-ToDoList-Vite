
import { set } from "date-fns/esm"
import { Formik } from "formik"
import { useFormik } from "formik"
import toDoLibrary from "./toDoLibrary"
import TaskFactory from "./TaskFactory"



const FormEditTask = (props)=>{
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [library, setLibrary] = props.hookLibrary
  

  const editButton = (taskProps)=>{
    console.log("taskObject",taskProps)
    const task = document.getElementById("taskContainer"+taskProps.reactKey)
    const taskInfo = document.getElementById("taskInfo"+taskProps.reactKey)
    const taskEditForm = document.getElementById("taskForm"+taskProps.reactKey)

    taskInfo.classList.add("hidden")
    taskEditForm.classList.remove("hidden")
  }


  const editItem = (values)=>{
    const indexFunction = (task)=> task.reactKey == props.props.reactKey;
    const index = toDoLibrary.findIndex(indexFunction)
    toDoLibrary[index].toDoName = values.toDoName
    toDoLibrary[index].description = values.description
    toDoLibrary[index].deadline = values.deadline
    toDoLibrary[index].priority = values.priority
    toDoLibrary[index].dueDate = new Date(values.deadline+"T23:59:59")

    localStorage.setItem("taskLibrary", JSON.stringify(toDoLibrary))
    setLibrary([...toDoLibrary])

  }

  // const addItem = (values)=>{
  //   toDoLibrary.push(TaskFactory.TaskFactory(values, activeProject))
  //       console.log(values)
  //   setLibrary([...toDoLibrary])
  //   console.log([...toDoLibrary]);
  //     }


  const hideForm=()=>{
    const taskInfo = document.getElementById("taskInfo"+props.props.reactKey)
    const taskEditForm = document.getElementById("taskForm"+props.props.reactKey)
    taskEditForm.classList.add("hidden")
    taskInfo.classList.remove("hidden")

  }

  const formik = useFormik({
    initialValues: {
      toDoName: props.props.toDoName,
      description:props.props.description,
      deadline: props.props.deadline,
      priority: props.props.priority,
    },
  onSubmit: values => {

    hideForm()
    console.log(values)


    editItem(values);
    // alert(JSON.stringify(values, null, 2));
  },


});


return (
  <div id = {"taskForm"+props.props.reactKey} className="hidden taskFormContainer backgroundForm">
    <form id = "taskFormID" className="taskForm addTaskBtn" onSubmit={formik.handleSubmit}>
      
      <div id = "formTaskName">
        <label id = "taskNameLabel" htmlFor="toDoName">Action Item: </label>
        <input
          id="toDoName"
          name="toDoName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.toDoName}
        />
      </div>
      


      <div id = "formTaskDescription">
        <label id = "descriptionLabel" htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>

      <div id = "formTaskDeadline">
        <label id = "deadlineLabel" htmlFor="deadline">Deadline:</label>
        <input

          id="deadline"
          name="deadline"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.deadline}
        />
      </div>


      <div id = "formTaskPriority">
        <label id = "priorityLabel" htmlFor="priority">Priority:</label>
        <select 
          id = "prioritySelect"
          name ="priority"
          onChange={formik.handleChange}
          value={formik.values.priority}
        >
          <option value="" label = "Select Priority">Select Priority</option>
          <option value="1" label = "Low">Low</option>
          <option value="2" label = "Medium">Medium</option>
          <option value="3" label = "High">High</option>
        </select>
      </div>

      <button id = "taskFormBtn" className= "formButton" type="submit">Edit Item</button>

    </form>
  </div>
);
}



export default FormEditTask