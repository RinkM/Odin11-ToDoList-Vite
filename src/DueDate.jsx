
import {parseISO, formatDistanceToNow, differenceInMilliseconds} from "date-fns";

import { useState } from "react";

const DueDate = (deadline) =>{
  const today = new Date()
  let taskDate = deadline.props
  console.log(taskDate)
  if (typeof(taskDate) =="string"){
    taskDate = parseISO(taskDate)
  }
  console.log("from DUEDATETETE!!!", typeof(taskDate))
  console.log(taskDate)
  if (taskDate){
    const value = differenceInMilliseconds(taskDate, today)
    if (value<0) {
      return (<div className="taskDeadline">
        Overdue {formatDistanceToNow(taskDate,{addSuffix:false})}
      </div> )
    }else {
      return (<div className="taskDeadline">
        Due in {formatDistanceToNow(taskDate,{addSuffix:false})}
      </div> )
    }
  } else {
    return console.log("error: you didn't enter a date!")
  }

}
export default DueDate