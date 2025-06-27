import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./Site/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen relative scroll-smooth">
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
