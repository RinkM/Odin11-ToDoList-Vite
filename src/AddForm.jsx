
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
    reactKey:creationDate}
    
    return taskObject
  }

  const addItem = (values)=>{
    toDoLibrary.push(ToDoFactory(values))
    
    setLibrary([...toDoLibrary])
  }



  const formik = useFormik({
    initialValues: {
      toDoName: '',
      // lastName: '',
      // email: '',
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
      value={formik.values.firstName}
    />

{/*     
      <label htmlFor="lastName">Last Name</label>
    <input
      id="lastName"
      name="lastName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
    />
      <label htmlFor="email">Email Address</label>
    <input

      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    /> */}

    <button type="submit">Add Item</button>

  </form>

);
}



export default AddForm