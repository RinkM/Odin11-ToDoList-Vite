
import {formatDistanceToNow, differenceInMilliseconds} from "date-fns";

import { useState } from "react";

const FilterTimeBtns = (props) =>{
  const [projects, setProjects] = props.hookProject
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter

  const daysList = [
    {filter:"Any Time", listText:"Any Time", reactID :0, }, 
    {filter:7, listText:"7 Days",reactID :1, },
    {filter:30, listText:"30 Days",reactID :2, }
  ]


  const filterButtons = daysList.map((DaysListItem) =>{
    return(
      <button       
      id = {"timeFilterBtn"+DaysListItem.reactID} 
      key = {"timeFilterBtn"+DaysListItem.reactID} 
      className = "projectListItem dateSortBtn" 
      onClick= {()=>updateTimeFilter(DaysListItem)}>
      {DaysListItem.listText}
      </button>
    )

      });

  const updateTimeFilter = (DaysListItem)=>{
    setDeadlineFilter(DaysListItem)
    highlightProjectBtn(DaysListItem)
    // console.log("DaysListItem", DaysListItem)
  }

  const highlightProjectBtn = (filter)=> {
    // console.log(filter)
    const activeFilter = document.getElementById("timeFilterBtn"+filter.reactID)
    const projectList = [...document.getElementById("dateFilterContainer").children]
    projectList.forEach(button => button.classList.remove("activeProject"))
    activeFilter.classList.add("activeProject")
  }

return(
    <div id = "dateFilterContainer" className="filterList">
      Deadline
      {filterButtons}
      
        {/* //  <FilterButtons key = {"filter"+DaysListItem.reactID} DaysListItem = {DaysListItem}/> */}
       
    </div>
    
)
}
export default FilterTimeBtns