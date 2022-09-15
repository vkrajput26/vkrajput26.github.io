import logo from './logo.svg';
import './App.css';
import AllRoute from './Router/AllRoute';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
 
  return (
    <div className="App">
    <ChakraProvider>
   <Navbar/>
   </ChakraProvider>
        <hr className='navbar-line'/>
      
        <AllRoute/> 
        {/* <section id='#'>
          <Navbar/>
        </section>
        <section id='#home' >
          <Home/>
        </section>
        <section id='#about'>
          <About/>
        </section>
        <section id='#project'>
          <Projects/>
        </section>
        <section id='#skills'>
            <Skills/>
        </section>
        <section id='#contact'>
          <Contact/>
        </section>
       */}
    </div>
  );
}

export default App;
