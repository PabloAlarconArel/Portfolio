import './App.css'
import { SetTheme } from './components/SetTheme';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technology from './components/Technology';
import Education from './components/Education';
import Extra from './components/Extra';



function App() {
  return (
    <>
    <div className='App'>
    <SetTheme>
      <Header/>
      <About/>
      <Technology/>
      <Education/>
      <Projects/>
      <Extra/>
      <Contact/>
    </SetTheme>
    </div>
    </>
  )
}

export default App
