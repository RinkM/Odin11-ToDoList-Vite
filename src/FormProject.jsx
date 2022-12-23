
import { Formik } from "formik"
import { useFormik } from "formik"
import projectLibrary from "./projectLibrary"
import ProjectFactory from "./TaskFactory"
import TaskFactory from "./TaskFactory"



const FormProject = (props)=>{
  const [projects, setProjects] = props.hookProject
  


  const addProject = (project)=>{
    projects.push(project)
    // projectLibrary.push(project)
    setProjects([...projects])
    console.log(project)
  }

  const formik = useFormik({
    initialValues: {
      project: '',
    },
  onSubmit: values => {
    
    const project = TaskFactory.ProjectFactory(values)

    console.log(values);
    addProject(project);
    // alert(JSON.stringify(values, null, 2));
  },
});
return (
  <form className = "FormProject backgroundForm" onSubmit={formik.handleSubmit}>
    <label htmlFor="project">Add Project </label>
    <input
      id="project"
      name="project"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.project}
    />
    <button id = "formButton" type="submit">Add</button>

  </form>

);
}


export default FormProject