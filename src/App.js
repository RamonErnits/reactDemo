import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>
   
    </div>
    </>
  )

  // let component
  // switch (window.location.pathname){
  //   case "/" :
  //     component = <Home />
  //     break
  //     case "/contact" :
  //     component = <Contact />
  //     break
  //     case "/about" : 
  //     component = <About />
  //     break
  // }
  // return (
  // <>
  // <Navbar />
  // <div className="container">
  //   {component}
  // </div>
  // </>
  // )
}


export default App;
