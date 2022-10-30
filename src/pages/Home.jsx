import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useState } from "react";
import {data} from "../all-data/data"
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

function Home() {
   
    return (
        <div className="container mb-5">
            <Header />
           
            <CategoryCard categories={data.categories} />
            <Main products={data.products} />
            <Footer />
        </div>
    )
}

export default Home