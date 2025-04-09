import { useRef, useState } from 'react'
import Header from './components/Header'
import React from 'react'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  const projectsRef = useRef(null)

  return (
    <>
      <Header />
      <Landing onScrollToProjects={() => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
      }} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={projectsRef}>
        <Education />
      </div>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
