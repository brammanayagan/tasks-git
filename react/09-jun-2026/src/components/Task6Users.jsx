import React, { useState, useEffect } from 'react';

const Task6Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Task 6: User Search (API)</h2>
      
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
      />
      <br /><br />
      
      {filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
      <hr />
    </div>
  );
};

export default Task6Users;
