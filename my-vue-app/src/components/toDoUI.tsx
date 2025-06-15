import React from 'react'


function GetTaskDetails({item}){
  console.log(item)
 return (
  <div style={{
    border:"1px solid black",
    display:"flex",
    borderRadius:"16px",
    width:"100%",
    justifyContent:"space-around",
    margin:"15px",
    alignItems:'center',
    boxShadow:"0 0 10px black",
    backgroundColor:"white"
  }}>
    <div >
 <p>Task</p>
 <p>{item.title}</p>
 </div>
 <div>
 <p>Priority</p>
 <p>{item.priority}</p>
 </div>
 <div>
 
 <span style={{  backgroundColor: "#e0e0e0",
            padding: "6px 14px",
            borderRadius: "10px",}}>{item.status}</span>
 </div>
 <div>
 <p>Assignee</p>
 <p>{item.assignee}</p>
 </div>
 
  </div>
 )
}

function ToDoUI() {
  const tasks = [
    {
      id: 1,
      title: "Go to gym",
      priority: "High",
      status: "To Do",
      assignee: "Marshall",
    },
    {
      id: 2,
      title: "Go to ",
      priority: "low",
      status: "To Do",
      assignee: "Marsha",
    },
  ];
  return (
    <div style={{width:"50%",     backgroundColor:"lightGray"
    }} >
      {
        tasks.map((item)=>(
          <GetTaskDetails item={item} />
        ))
      }
   </div>
  )
}

export default ToDoUI