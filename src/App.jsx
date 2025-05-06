import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpenCatalogue from "./Components/Nav.jsx";
import Nav from './Components/Nav.jsx';
import Menu from './Components/Menu.jsx';
import Header from './Components/Header.jsx';
// import './style.css'

function App() {


  return (
    <>
      <Header/>
      <Nav/>
      <Menu/>
    </>
  )
}

export default App;
