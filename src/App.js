import logo from './logo.svg';
import './App.css';
import AllRoute from './Router/AllRoute';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

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
