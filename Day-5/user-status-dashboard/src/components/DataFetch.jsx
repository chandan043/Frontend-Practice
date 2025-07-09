import { useEffect, useState } from "react";
import './DataFetch.css';

const DataFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userWithStatus, setuserWithStatus] = useState([]);

    async function fetchData() {

        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            setData(json);
            setError(null);

            const userWithStatus = json.map(user =>
            ({
                ...user,
                status: Math.random() > 0.5 ? "Online" : "Offline"
            }));

            setuserWithStatus(userWithStatus);

        } catch (e) {
            setError(e.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval( ()=>{
            fetchData();
        },10000);

        return ()=> clearInterval(interval);
    }, []);


    return (
        <div className="card-container">
            <h2 id="secondHeading">Data Fetch Component</h2>
            <br/>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {
                userWithStatus && userWithStatus.map(item => (
                    <div key={item.id}
                    style={ { color: item.status === "Online" ? "green" : "red" }} 
                    className="card"
                    >
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p> 
                        <p>Status: {item.status}</p><br/>
                    </div>
                ))

                // <pre>{JSON.stringify(data, null, 2)}</pre>
            }

        </div>
    );
}

export default DataFetch;