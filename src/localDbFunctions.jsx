




const setLocalTaskLibrary = (library)=>{
  localStorage.setItem("taskLibrary", JSON.stringify(library))
}


const setLocalProjectLibrary = (library)=>{
  localStorage.setItem("projectLibrary", JSON.stringify(library))
}

const getLocalProjectLibrary = ()=>{
  return JSON.parse(localStorage.getItem("projectLibrary"))
}

const getLocalTaskLibrary = ()=>{
  return JSON.parse(localStorage.getItem("taskLibrary"))
}

const toDoLibrary = [
  {toDoName:"Eat Breakfast",
  completed:false,
  reactKey:0,
  description:"Eat eggs and toast.",
  deadline: "2022-12-30",
  priority: "3",
  projectName: "Food",
  reactKeyProject:"project4",
  projectColor:"#315C2B",
  
  dueDate: new Date("2022-12-30T23:59:59"),
},

  {toDoName:"Eat Lunch",
  completed:false,
  reactKey:1,
  description:"Eat sandwich.",
  deadline: "2022-12-31",
  priority: "2",
  projectName: "Food",
  reactKeyProject:"project1",
  projectColor:"#315C2B",
  dueDate: new Date("2022-12-31T23:59:59"),
  
},

  {toDoName:"Eat Dinner",
  completed:false,
  reactKey:2,
  description:"Eat mac & cheese.",
  deadline: "2023-01-20",
  priority: "1",
  projectName: "Meals",
  reactKeyProject:"project2",
  projectColor: "#5AD2F4",
  dueDate: new Date("2023-01-20T23:59:59"),
},

  {toDoName:"Eat Dessert",
  completed:false,
  reactKey:3,
  description:"Eat ice cream.",
  deadline: "2023-04-20",
  priority: "1",
  projectName: "Meals",
  reactKeyProject:"project2",
  projectColor: "#5AD2F4",
  dueDate: new Date("2023-04-20T23:59:59"),
}
]



const projectLibrary = [[
  {projectName: "All",
  reactKeyProject:"project0",
  projectColor:"#3d518c",
  time: "All"}
  ,
  {projectName: "Food",
  reactKeyProject:"project1",
  projectColor:"#315C2B",
  time: "All"}
  ,
  {projectName: "Meals",
  reactKeyProject:"project2",
  projectColor: "#5AD2F4",
  time:"All"}
  ],
  {filter:"Any Time", listText:"Any Time", reactID :0},
  ["All Projects", 7,30]
]


const projectLibraryJSON = [
  {"projectName": "All",
  "reactKeyProject":"project0",
  "projectColor":"#3d518c",
  "time": "All"
  },
  {"projectName": "Food",
  "reactKeyProject":"project1",
  "projectColor":"#315C2B",
  "time": "All"
  },
  {"projectName": "Meals",
  "reactKeyProject":"project2",
  "projectColor": "#5AD2F4",
  "time":"All"}
  ]


