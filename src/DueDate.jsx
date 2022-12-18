
import {formatDistanceToNow, differenceInMilliseconds} from "date-fns";

import { useState } from "react";

const DueDate = (deadline) =>{
  
  // const [state, setState]= useState()
  const today = new Date()
  const taskDate = deadline.props
  console.log("taskDate", taskDate)
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
    return console.log("error: you didn't enter a date! Fool!")
  }

}
export default DueDate