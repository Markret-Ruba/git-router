
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Nav"
import All from "./pages/All"
import Stack from "./pages/Stack"
import Data from "./pages/Data"
import Cyber from "./pages/Cyber"
import Career from "./pages/Career"

function App() {
  return (
    <>
    <Nav></Nav>
    <div className="App">
      <Router>
        <div>
         
          <Link to ="/"> All </Link><br></br>
          <Link to ="/stack"> Fullstack </Link><br></br>
          <Link to ="/data"> Datascience </Link><br></br>
          <Link to ="/cyber"> Cyber Security </Link><br></br>
          <Link to ="/career"> Career </Link><br></br>
          </div>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/stack" element={<Stack/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="/cyber" element={<Cyber/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>


    </>
  )
}

export default App
