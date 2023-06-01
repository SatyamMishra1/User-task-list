import React from "react";
import './home.css'
import { Link } from "react-router-dom";



function Home(props) {
  
  const [data, setData] = React.useState()
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem("listData")) || [])
  
  function handleAdd(){
    let tempTask = [...tasks]
    let obj = {
      id:Math.random()*100+1,
      data: data,
      isEdit: false
    }
    tempTask.push(obj)
    localStorage.setItem("listData", JSON.stringify(tasks));
    setData("")
    setTasks(tempTask);
  }

  function edit(e, i){
    let tempData = [...tasks]
    tempData[i].data=e.target.value
    setTasks(tempData);
  }

  function handleDelete(i){
    const filteredData = tasks.filter((task) => task.id !== i);
    localStorage.setItem("listData", JSON.stringify(filteredData))
    setTasks(filteredData);
  }
  function setEdit(i){
    let tempData = [...tasks]
    tempData[i].isEdit = !tempData[i].isEdit
    localStorage.setItem("listData", JSON.stringify(tasks))
    setTasks(tempData)
  }
  
  return (
    <div className="home">
      <div className="nav">
        <h3>Welcome</h3>
        <h3>{props.name}</h3>
        <h3><Link style={{textDecoration: 'none', color: 'white'}} to="/">Logout</Link></h3>
      </div>
      <div className="listItems">
        <h1>List Items</h1>
        <form>
            <input id="addData" onChange={(e) => setData(e.target.value)} value={data} type="text" placeholder="Enter your task..."/>
            <button onClick={handleAdd} id="addBtn" type="button">Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>List Items</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length!==0?tasks.map((obj, i)=>
              <tr key={obj.id}>
                <td> {(obj.isEdit)?<input type="text" value={obj.data} onChange={(e)=>edit(e, i)}/>: obj.data} </td>
                <td style={{cursor: "pointer"}} onClick={()=>{setEdit(i)}}>{(obj.isEdit)?"Save":"Edit"}</td>
                <td style={{cursor: "pointer"}} onClick={()=>{handleDelete(obj.id)}}>{'Delete'}</td>
              </tr>
            ):"No Task found"
          
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
