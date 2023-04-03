import Navbar from './components/Navbar'
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App h-full w-full ">
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
