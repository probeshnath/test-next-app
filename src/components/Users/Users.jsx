"use client"

import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data) )
    },[])

  return (
    <div>
        <h2>Users: {users.length}</h2>
        <div>
        {
            users.map(user =>(
                <div key={user.id} className="card bg-primary mb-3 text-primary-content">
                <div className="card-body">
                    <p>{user.id}</p>
                    <h2 className="card-title">{user.name}!</h2>
                    <p>{user.email}</p>
                   
                </div>
            </div>
            ))
        }
    </div>
     </div>
    
  )
}

export default Users