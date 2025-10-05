import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './styles/App.css'
import Home from './pages/Home'
import About from './pages/About.jsx'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import OtherSkills from './pages/OtherSkills'
import FutureProjects from './pages/FutureProjects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'

import Header from './components/common/Header.jsx' 
import Footer from './components/common/Footer.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <Home />
  },

  {
    path: '/about',
    element: 
      <About />
  },

  {
    path: '/skills',
    element: 
      <Skills />
  },

  {
    path: '/works',
    element: 
      <Projects />
  },

  {
    path: '/other-skills',
    element: 
      <OtherSkills />
  },

  {
    path: '/future-projects',
    element: 
      <FutureProjects />
  },

  {
    path: '/education',
    element: 
      <Education />
  },

  {
    path: '/contact',
    element: 
      <Contact />
  },

  {
    path: '/error404',
    element: 
      <Error404 />
  },

])

function App() {

  return (
    <div className="app">
      <Header />
      <main><RouterProvider router={router} /></main>
      <Footer />
    </div>
  );
}

export default App
