import React,{useState} from 'react';
const EditUserForm=(props)=>{
  const [user,setUser]=useState(props.currentUser)
  const handleChange=(event)=>{
    const {name,value}=event.target
    setUser({...user,[name]:value})
}
return (
  <form onSubmit={
    event=>{
      event.preventDefault();
      if(!user.name||!user.hobby) return
      props.updateUser(user.id,user);
    }
  }>
    <label>Name:</label>
    <input type="text" value={user.name} name="name" onChange={handleChange}/><br/><br/>
    <label>Hobbies:</label>
    <input type="text" value={user.hobby} name="hobby" onChange={handleChange}/><br/><br/>
    <button>Update User</button>
    <button onClick={()=>{
      props.setEditing(false)
    }}>Cancel</button>
  </form>
)

}
export default EditUserForm;