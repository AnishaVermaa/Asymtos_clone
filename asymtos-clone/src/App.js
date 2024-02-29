import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Carrer from "./components/Carrer/Carrer";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
       <Services />
     <Team />
     <Carrer />
    <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
