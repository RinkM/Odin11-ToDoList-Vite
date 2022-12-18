
import { Formik } from "formik"
import { useFormik } from "formik"
import projectLibrary from "./projectLibrary"




const ProjectForm = (props)=>{
  const [projects, setProjects] = props.hookProject

  const ProjectFactory = (values) => {
    const creationDate = Date.now()
    const project = {
      name: values.project,
      reactKey:creationDate,
    }
    return project
  }


  const addProject = (values)=>{
    projects.push(ProjectFactory(values))
    setProjects([...projects])
    console.log(projects)
  }

  const formik = useFormik({
    initialValues: {
      project: '',
    },
  onSubmit: values => {

    console.log(values);
    addProject(values);
    // alert(JSON.stringify(values, null, 2));
  },
});
return (
  <form className = "projectForm backgroundForm" onSubmit={formik.handleSubmit}>
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


export default ProjectForm