import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/users/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          data.map((user, idx) => {
            return (
              <div key={idx}>
                <p>{user.username + "  " + user.email}</p>
              </div>
            );
          })
        )}
      </header>
    </div>
  );
}

export default App;
