
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import {data} from "./data/all-data"
import CategoryCard from "./components/CategoryCard";





function App() {
  
return(
  <div className="container mb-5">
    <Header/>
    <CategoryCard categories={data.categories}/>
    <Main products={data.products}/>
    <Footer/>
  </div>
)
}

export default App;
