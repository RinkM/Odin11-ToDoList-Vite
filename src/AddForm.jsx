
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
      dueDate: values.dueDate,
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
      dueDate: "",
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
  <form onSubmit={formik.handleSubmit}>
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

    
      <label htmlFor="dueDate">Deadline:</label>
    <input

      id="dueDate"
      name="dueDate"
      type="date"
      onChange={formik.handleChange}
      value={formik.values.dueDate}
    />

    <button id = "formButton" type="submit">Add Item</button>

  </form>

);
}



export default AddForm