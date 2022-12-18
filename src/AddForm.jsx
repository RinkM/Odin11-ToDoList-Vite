
import { set } from "date-fns/esm"
import { Formik } from "formik"
import { useFormik } from "formik"
import toDoLibrary from "./toDoLibrary"
import taskFactory from "./taskFactory"



const AddForm = (props)=>{
  const [library, setLibrary] = props.hookLibrary
  const addItem = (values)=>{
    toDoLibrary.push(taskFactory(values))
        console.log(values)
    setLibrary([...toDoLibrary])
    console.log([...toDoLibrary]);
      }



  const formik = useFormik({
    initialValues: {
      toDoName: "",
      description:"",
      deadline: "",
      priority: "3",
      project:"Food"


    },
  onSubmit: values => {

    
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

      <button id = "formButton" type="submit">Add Item</button>

    </form>
  </div>
);
}



export default AddForm