import './App.css';
import Controls from './components/Controls';
import Display from './components/Display';
import Parent from './components/memorization/Parent';
import ToggleComponent from './components/ToggleComponent';

function App() {
  return (
    <div className="App">
      
      {/* <h1 id='MainHeading'>Lifting Up State</h1>
      <Parent / >
      <Display />
      <Controls /> */}

      {/* <h1 id='MainHeading'>Memiozation</h1>
      <Parent/> */}

      <ToggleComponent/>
    </div>
  );
}

export default App;
