import React from 'react'
import User from './User';
import './user.css';
function Users({users,setFilterUser,setUsers}) {
    
  return (
    <>  
        {users !== 'not found' ?(
            users.map((user) =>  
            <div key={user.id} className='users_container'>
            <User user={user} {...user} users={users} setFilterUser={setFilterUser} setUsers={setUsers}/>
            </div>)
        ):(
            <div>{users}</div>
        )}
    </>
  )
}

export default Users