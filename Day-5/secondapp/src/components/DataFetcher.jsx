import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   async function fetchData() {
    const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // console.log("Data fetched successfully:", response);
    const json = await response.json();
    setData(json);
    console.log("Data fetched successfully:", json);
  }

  //     async function fetchData() {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos/1"
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const json = await response.json();
  //       setData(json);
  //       console.log("Data fetched successfully:", json);
  //     } catch (e) {
  //       console.error("Fetching error: ", e);
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>This is DataFetcher component</h1>
      {data ? (
        data.map((data) => (
            <div key={data.id}>
            <p> Title: {data.title}</p>
            <p> Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
        ))
      ) : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;
