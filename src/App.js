import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Project1 from  './components/Project1'
import Project2 from  './components/Project2'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Project1" element={<Project1 />} />
          <Route path="Project2" element={<Project2 />} />
          </Route>
      </Routes>
    </>
  )
}

export default App