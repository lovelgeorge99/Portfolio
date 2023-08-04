import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import  Footer  from './components/Footer';
import Contact from './components/Contact';
import Certifications from './components/Certifications';



function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      
      <AboutMe />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
