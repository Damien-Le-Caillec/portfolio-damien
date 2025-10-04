import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './styles/App.css'
import Home from './pages/Home'
import About from './pages/about'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import OtherSkills from './pages/OtherSkills'
import FutureProjects from './pages/FutureProjects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'

import Header from './components/common/header' 




const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <Home />
  },

  {
    path: '/A-propos-de-moi',
    element: 
      <About />
  },

  {
    path: '/Competences',
    element: 
      <Skills />
  },

  {
    path: '/Projets',
    element: 
      <Projects />
  },

  {
    path: '/Autres-competences',
    element: 
      <OtherSkills />
  },

  {
    path: '/Futurs-projets',
    element: 
      <FutureProjects />
  },

  {
    path: '/Education',
    element: 
      <Education />
  },

  {
    path: '/Contact',
    element: 
      <Contact />
  },

  {
    path: '/Error404',
    element: 
      <Error404 />
  },

])

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App
