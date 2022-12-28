
import { Formik } from "formik"
import { useFormik } from "formik"
import projectLibrary from "./projectLibrary"
import ProjectFactory from "./TaskFactory"
import TaskFactory from "./TaskFactory"



const FormProject = (props)=>{
  const [projects, setProjects] = props.hookProject
  
  const addProjectBtn = ()=>{
    const form = document.getElementById("formProject")
    form.classList.toggle("hidden")
    form.classList.toggle("flex")
  }

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
    addProjectBtn()

    const project = TaskFactory.ProjectFactory(values)
    console.log(values);
    addProject(project);
      const form = document.getElementById("formProject")
      form.classList.add("hidden")
  },
});
return (
  <form id = "formProject" className = "hidden backgroundForm" onSubmit={formik.handleSubmit}>
    <button type = "button" onClick={()=>addProjectBtn()}  className="closeWindowBtn">X</button>
    <label htmlFor="project">Add Project </label>
    <input
      id="project"
      name="project"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.project}
    />
    <button id = "projectFormBtn" className= "formButton"type="submit">Add</button>

  </form>

);
}


export default FormProject