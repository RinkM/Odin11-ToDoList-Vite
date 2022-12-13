
import { Formik } from "formik"
import { useFormik } from "formik"
import toDoLibrary from "./toDoLibrary"



const AddForm = (props)=>{
  const [library, setLibrary] = props.hookLibrary

  const ToDoFactory = (values) => {
    const creationDate = Date.now()


    const taskObject = {
      toDoName: values.toDoName,
      completed:false,
      reactKey:creationDate,
      description: values.description,
      deadline: values.deadline,
      priority: "3",
      project:"Food"}
    return taskObject
  }

  const addItem = (values)=>{
    toDoLibrary.push(ToDoFactory(values))
    
    setLibrary([...toDoLibrary])
  }



  const formik = useFormik({
    initialValues: {
      toDoName: '',
      description:"",
      deadline: "",
      priority: "3",
      project:"Food"


    },
  onSubmit: values => {

    console.log(values);
    addItem(values);
    // alert(JSON.stringify(values, null, 2));
  },
});
return (
  <form className="taskForm" onSubmit={formik.handleSubmit}>
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

    <button id = "formButton" type="submit">Add Item</button>

  </form>

);
}



export default AddForm