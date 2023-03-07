import React,{useState} from 'react'
import ReactDOM from 'react-dom'
const AddUserForm=(props)=>{
  const initialFormState ={id:null,name:'',hobby:''}
  const [user,setUser]=useState(initialFormState)

  const handleChange=(event)=>{
      const {name,value}=event.target
      setUser({...user,[name]:value})
  }
  return(
    
    <form onSubmit={
      event=>{
        event.preventDefault();
        if(!user.name||!user.hobby) return
        props.addUser(user);
        setUser(initialFormState)
      }
    }>
      <label>Name:</label>
      <input type="text" value={user.name} name="name" onChange={handleChange}/><br/><br/>
      <label>Hobbies:</label>
      <input type="text" value={user.hobby} name="hobby" onChange={handleChange}/><br/><br/>
      <button>Add new user</button>
    </form>
  )
}
export default AddUserForm;