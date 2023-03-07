import React,{useState} from "react";
import "./style.css";
import UserTable from "./Table/UserTable.js"
import AddUserForm from "./forms/AddUserForm.js"
import EditForm from "./forms/Editform.js"


export default function App() {
  const userData=[
    {id:1,name:'Arun',hobby:"Movies"},
    {id:2,name:'kumar',hobby:"chess"},
    {id:3,name:'Andy',hobby:"tennis"}
  ]
  const addUser=(user)=>{
    user.id=user.length+1
    setUsers([...users,user])
  }
  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id!==id)
    )}
  const[users,setUsers]=useState(userData)
  const[editing,setEditing]=useState(false)
  const iniitialFormState ={id:null,name:'',hobby:''}
  const[currentUser,setCurrentUSer]=useState(iniitialFormState)

  const editRow = (user) =>{
    setEditing(true)
    setCurrentUSer({id:user.id,name:user.name,hobby:user.hobby,})
  }
  const updateUser=(id,updatedUser)=>{
    setEditing(false)
    setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
  }
  return (
   <div className="container">
     <h1>CRUD App with HOOKS</h1>
   <div className="flex-rows">
     <div className="flex-large">
       {editing?(<>
          <h1>Edit UserForm</h1>
          <EditForm
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
          />
       </>):(
         <>
          <h2>ADD User</h2>
       <AddUserForm addUser={addUser}/>
         </>
       )}
       
       </div>
       <div className="flexlarge">
         <h2>View User</h2>
         <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>

       </div>
     </div>
   </div>
  );
}

