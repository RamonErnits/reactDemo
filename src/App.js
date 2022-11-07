import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {
  let component
  switch (window.location.pathname){
    case "/" :
      component = <Home />
      break
      case "/contact" :
      component = <Contact />
      break
      case "/about" : 
      component = <About />
      break
  }
  return (
  <>
  <Navbar />
  <div className="container">
    {component}
  </div>
  </>
  )
}

export default App;
