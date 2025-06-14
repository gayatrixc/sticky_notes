
import { Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Error from './components/Error';
import Navbar from './components/Navbar.jsx';
import About from './components/About/About';
import ToDo from './components/To-Do/Home'
import {ContextProvider} from './components/Context/Context'
function App() {
  return (
    <ContextProvider>
      <div className='relative'>
      <div className='relative top-0'>
      <Navbar/>
      </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/to-do" element={<ToDo />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <div className='relative bottom-0'>
    <Footer/>
    </div>
    </div>
    </ContextProvider>
  );
}

export default App;