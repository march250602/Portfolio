import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
       

        <Outlet />
        <span className="tags bottom-tags">
          
          <br />
          <span className="bottom-tag-html">Elsa's Portfolio</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
