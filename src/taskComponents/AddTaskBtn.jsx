

  const showForm = ()=> {
    const form = document.getElementById("formDiv")
    form.classList.remove("hidden")

    const button = document.getElementById("newTaskBtn")
    button.classList.toggle("hidden")
    button.classList.toggle("flex")
    // setTimeout(()=>{form.classList.remove("hidden")}, 1200)
    form.classList.remove("hidden")
  }


  const AddTaskBtn = () => {

    try {
      const form = document.getElementById("formDiv")
      form.classList.add("hidden")
    }catch {
        console.log("formAddTask Error - no formDiv. This should occur on first load")
    }finally {}
    return(
        <button className="flex iconBtn" id = "newTaskBtn" onClick={()=>showForm()}>
          <i className="fa fa-plus-circle " aria-hidden="true"></i>

        </button>
    )
  }

  export  default AddTaskBtn