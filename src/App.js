import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/about" element={<Todos />} /> 
          <Route path="/about" element={<Contact />} /> 
        </Routes>
    </div>
    </>
  );
}

export default App;
