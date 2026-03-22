import { HashRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import NavBar from "./components/NavBar"
import Portfolio from "./pages/Portfolio"
import CV from "./pages/CV"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import EasterEgg from "./components/EasterEgg";


function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
      <EasterEgg>
        {({ toggleSecret }) => (
          <Footer onSecretClick={toggleSecret} />
        )}
      </EasterEgg>

    </HashRouter>
  )
}


export default App
