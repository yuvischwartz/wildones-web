import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';
import Contact from './pages/Contact';
import Topbar2 from './components/Topbar2';
import LogoBar from './components/LogoBar';
import Footer from './components/Footer';
import Decorations from './categories/Decorations';


function App() {
  return (
    <>
      <div className={'bg-white w-screen h-full'}>
        {/* <Topbar2 /> */}
        {/* <LogoBar /> */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/to-do's" element={<Todos />} /> 
          <Route path="/contact" element={<Contact />} /> 
          {/* Categories */}
          <Route path="/categories/decorations" element={<Decorations/>} /> 
        </Routes>
        <Footer/>
    </div>
    </>
  );
}

export default App;
