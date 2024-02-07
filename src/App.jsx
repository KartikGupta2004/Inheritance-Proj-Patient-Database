import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from "./Components/Sidebar/Sidebar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Media from 'react-media';
import FileManager from "./Components/Sidebar/FileManager.jsx";
import Setting from "./Components/Sidebar/Setting.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
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
