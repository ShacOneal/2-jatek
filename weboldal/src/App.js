import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [database, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://swapi.dev/api/people/1");
      setDatabase(result.data);
    };
    fetchData();
  }, []);
  if (!database || !database.url) {
    return <div>Loading...</div>;
  }
  console.log("data", database);

  return database ? (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p>{database.name}</p>
      <img src={database.url} />
    </div>
  ) : (
    <div></div>
  );
}

export default App;
