
import Home from "./pages/Home"
import{Routes,Route,Link} from 'react-router-dom'
import Login from "./pages/Login"
import AboutUs from "./pages/AboutUs"
import Career from "./pages/Career"
import Detail from "./pages/Detail"
import CatDetail from "./pages/CatDetail"
import CountryDetail from "./pages/CountryDetail"

function App() {
  
return(
  <div className="container">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Career" element={<Career />} />
    <Route path='/product/:slug' element={<Detail />} />
    <Route path='/categories/:CatSlug' element={<CatDetail />} />
    <Route path='/country' element={<CountryDetail />} />
    

  </Routes>
  </div>
  
)
}

export default App;
