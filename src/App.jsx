import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './routers/Home'
import Login from './routers/Login'
function App() {

  return (
    <>
    <Nav />
    <Outlet />
    
    
    </>
  )
}

export default App