import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, token } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card glass">
        <h2>Dashboard</h2>
        <p>Welcome to the protected area!</p>
        
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>
        
        <div className="token-details">
          <h3>Token (Mock)</h3>
          <code className="token-display">{token}</code>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
