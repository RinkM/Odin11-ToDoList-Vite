
import {formatDistanceToNow, differenceInMilliseconds} from "date-fns";

import { useState } from "react";

const FilterTimeBtns = (props) =>{
  const [projects, setProjects] = props.hookProject
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter


  const daysList = [
    {filter:"Any Time", listText:"Any Time", reactID :0}, 
    {filter:7, listText:"7 Days",reactID :1},
    {filter:30, listText:"30 Days",reactID :2}
  ]

  const FilterButtons = (props)=> {
    return(
    <button       
    id = {"timeFilterBtn"+props.DaysListItem.reactID} 
    // style ={{color: "white"}} 
    className = "projectListItem dateSortBtn" 
    onClick= {()=>updateTimeFilter(props.DaysListItem)}>
    {props.DaysListItem.listText}
    </button>)
  }

  const highlightProjectBtn = (btnID)=> {
    
    const projectList = [...document.getElementById("projectListID").children]
    // projectList.forEach(button => button.classList.remove("activeProject"))
  
    const projectBtn = document.getElementById(btnID)
    console.log(projectBtn)
    projectBtn.classList.add("activeProject")
  }

  const updateTimeFilter = (DaysListItem)=>{
    highlightProjectBtn("timeFilterBtn"+DaysListItem.reactID)
    activeProject.time = DaysListItem.filter;
    setDeadlineFilter(DaysListItem)
    console.log("DaysListItem", DaysListItem)
  }
  

return(

    <div id = "dateFilterContainer" className="filterList">
      {daysList.map((DaysListItem) =>{
        return <FilterButtons key = {"filter"+DaysListItem.reactID} DaysListItem = {DaysListItem}/>}
     )
    }
    </div>
)

}
export default FilterTimeBtns