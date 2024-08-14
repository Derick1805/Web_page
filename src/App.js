import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Blogs';
import Contact from './Components/Contacts';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
