import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import ParticleBackground from './components/ParticleBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  return (
    <div className="App overflow-hidden">
      <ParticleBackground/>
      
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/Projects' element={<Projects/>}/>
                <Route path='/Resume' element={<Resume/>}/>
                <Route path='/Contact' element={<Contact/>}/>

            </Routes>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
