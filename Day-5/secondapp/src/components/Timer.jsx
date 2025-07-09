import { useState, useEffect, use } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);

    // console.log("useEffect called")
  }, []);

  return (
    <div>
      <h1>This is Timer component</h1>
      <p>Timer: {count}</p>
    </div>
  );
};

export default Timer;
