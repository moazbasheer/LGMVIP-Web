import { useState } from "react";
import './App.css';
function App() {
  const [users, setUsers] = useState(undefined);
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const loadUsers = async () => {
    setUsers([]);
    const response = await fetch("https://reqres.in/api/users?page=1");
    
    await sleep(500);
    const json = await response.json();
    
    setUsers(json.data);
  };
  return (
    <div className="main">
      <button onClick={loadUsers}>Load users</button>
      <div className="empty-el">
        {
          (users && users.length === 0)? "Loading...":""
        }
      </div>
      <div className="grid">
        {
          (users)?users.map((e) => {
            return (
              <div className="element" key={e.id}>
                <div>First name: {e.first_name}</div>
                <div>Last name: {e.last_name}</div>
                <div>Email: {e.email}</div>
                <div>
                  <img src={e.avatar} alt="alt" />
                </div>
              </div>
            );
          }):""
        }
      </div>
    </div>
  );
}

export default App;
