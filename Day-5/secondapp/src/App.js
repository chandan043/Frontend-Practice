import "./App.css";
import DataFetcher from "./components/DataFetcher";
import Timer from "./components/Timer";
import UserList from "./components/UserList";
import ContactForm from "./components/ContactForm";

function App() {

  return (
    <div className="App">
      <div>
        <h1>List and Keys</h1>
        <UserList />
        {/* <Timer /> */}
        {/* <DataFetcher/> */}
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
