import React from "react"
import "./App.css"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Page1 from "./components/page1"

function App() {
  

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path ="/page1" element ={<Page1/>}></Route>
        <Route path ="/" element ={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
