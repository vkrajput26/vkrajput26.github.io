import logo from './logo.svg';
import './App.css';
import AllRoute from './Router/AllRoute';
import Navbar from './Components/Navbar';

function App() {
 
  return (
    <div className="App">
     {/* hello world
        <div className="App1">
          1fffffffffffffffffffffffffffffffffff
        </div>
        <div className="App2">
          2fffdddsssssssssssssssssssssssssssssssssssssssssssss
        </div>
        <div className="App3">
          3hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </div> */}
        <Navbar/>
        <AllRoute/>
     
    </div>
  );
}

export default App;
