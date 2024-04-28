import { Contact } from '../../react-portfolio/src/components/Contact/Contact'
import { Experience } from '../../react-portfolio/src/components/Experience/Experience'
import { Hero } from '../../react-portfolio/src/components/Hero/Hero'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
function App() {
 
  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <Experience/>
        <Contact/>
        <About/>
      </div>
    </>
  )
}

export default App
