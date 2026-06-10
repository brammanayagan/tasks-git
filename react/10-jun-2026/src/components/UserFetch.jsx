import { useEffect, useState } from "react";

const UserFetch = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setusers(data.users);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Name: {user.firstName}
              <br />
              Email: {user.email}
              <br />
              Company: {user.company.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserFetch;
