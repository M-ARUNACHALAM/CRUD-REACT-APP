import React from 'react'
const UserTable=(props)=>(
  <table id="style">
    <thead>
      <tr>
        <th>Name</th>
        <th>Hobbies</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody >
      {props.users.length>0?(
        props.users.map((user)=>(
          <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.hobby}</td>
        <td>
          <button className="button" onClick={()=>props.editRow(user)}>Edit</button>
          <button onClick={()=>props.deleteUser(user.id)} className="button">Delete</button>
        </td>
      </tr>
        ))
      ):(
        <tr>
          <td colSpan={3}>
            No Users Found
            </td>
        </tr>
      ) }
        
    </tbody>
  </table>
)
export default UserTable;