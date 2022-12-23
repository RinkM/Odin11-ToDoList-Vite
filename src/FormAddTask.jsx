
import { set } from "date-fns/esm"
import { Formik } from "formik"
import { useFormik } from "formik"
import toDoLibrary from "./toDoLibrary"
import TaskFactory from "./TaskFactory"



const FormAddTask = (props)=>{
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [library, setLibrary] = props.hookLibrary

  const addItem = (values)=>{
    toDoLibrary.push(TaskFactory.TaskFactory(values, activeProject))
        console.log(values)
    setLibrary([...toDoLibrary])
    console.log([...toDoLibrary]);
      }

  const formik = useFormik({
    initialValues: {
      toDoName: "",
      description:"",
      deadline: "",
      priority: "",
      project:"Food"
    },
  onSubmit: values => {
    console.log(values)

    
    addItem(values);
    // alert(JSON.stringify(values, null, 2));
  },
});
return (
  <div className="taskFormContainer ">
    <form className="taskForm backgroundForm" onSubmit={formik.handleSubmit}>
      <label htmlFor="toDoName">Action Item: </label>
      <input
        id="toDoName"
        name="toDoName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.toDoName}
      />

      
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      
        <label htmlFor="deadline">Deadline:</label>
      <input

        id="deadline"
        name="deadline"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.deadline}
      />



<label htmlFor="priority">Priority</label>
<select 
  className="prioritySelect"
  name ="priority"
  onChange={formik.handleChange}
  value={formik.values.priority}
>
<option value="" label = "Select Priority">Select Priority</option>
<option value="1" label = "Low">Low</option>
<option value="2" label = "Medium">Medium</option>
<option value="3" label = "High">High</option>


</select>


      <button id = "formButton" type="submit">Add Item</button>

    </form>
  </div>
);
}



export default FormAddTask