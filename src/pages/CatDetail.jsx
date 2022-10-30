import {data} from "../all-data/data"
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import {useParams} from 'react-router-dom'


function CatDetail() {
    

    function convertToSlug(text) {
      return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }
    const {CatSlug} = useParams()
    const q = data.products.find((products)=>convertToSlug(products.category) === CatSlug)
  
  
    return (
    <div>
        <Header/>
        <CategoryCard categories={data.categories} />
        <img src="../p.image" alt="this is immage"></img>

        <h1>{q.title} </h1>
        <p>{q.description} </p>
        <p>{q.price} </p>
        <p>{q.stock} </p>

    </div>
  )
}
export default CatDetail