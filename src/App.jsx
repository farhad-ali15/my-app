
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import {products} from "./data/products"





function App() {
  
return(
  <div>
    <Header/>
    <Main products={products}/>
    <Footer/>
  </div>
)
}

export default App;
