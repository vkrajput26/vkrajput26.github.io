import logo from './logo.svg';
import './App.css';
import AllRoute from './Router/AllRoute';
import Navbar from './Components/Navbar';

function App() {
 
  return (
    <div className="App">
    
        <Navbar/>
        <hr className='navbar-line'/>
        <AllRoute/>
     
    </div>
  );
}

export default App;
