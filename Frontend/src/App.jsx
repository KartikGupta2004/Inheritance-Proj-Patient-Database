import { useState } from 'react'
import './App.css'
import UserHeader from './Components/Header/UserHeader.jsx'
import AdminHeader from './Components/Header/AdminHeader.jsx'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from "./Components/Sidebar/Sidebar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Media from 'react-media';
import FileManager from "./Components/Sidebar/FileManager.jsx";
import Setting from "./Components/Sidebar/Setting.jsx";
import { useAuthContext } from './Components/Hooks/useAuthContext.jsx'
function App() {
  const [count, setCount] = useState(0)
  const {user} = useAuthContext();
  return (
    <>
      {(!user)?(<UserHeader/>):user.Role==='User'?(<UserHeader/>):(<AdminHeader/>)}
      <Media query="(max-width: 1024px)">
      <SideBar>
        <Routes path='/' element={<App/>}>
          <Route path="file-manager" element={<FileManager />} />
          <Route path="settings" element={<Setting />} />
        </Routes>
      </SideBar>
      </Media>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
