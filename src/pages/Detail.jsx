
import {data} from "../all-data/data"
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import {useParams} from 'react-router-dom'

function Detail() {
  function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  const {slug} = useParams()
  const p = data.products.find((product)=>convertToSlug(product.title) === slug)

  
    return (
    <div>
        <Header/>
        <CategoryCard categories={data.categories} />
        <img src="../p.image" alt="this is immage"></img>
        <h1>{p.title} </h1>
        <h3>{p.category} </h3>
        <p>{p.description} </p>
        <p>{p.price} </p>
        <p>{p.stock} </p>

    </div>
  )
}

export default Detail