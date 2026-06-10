import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setUsers(data.users);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px', borderRadius: '8px' }}>
      <h2>Task 3: User Data Fetch</h2>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {!loading && !error && (
        <ul style={{ maxHeight: '300px', overflowY: 'auto', paddingLeft: '20px' }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: '15px' }}>
              <strong>{user.firstName} {user.lastName}</strong><br />
              Email: {user.email}<br />
              Company: {user.company?.name || 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
