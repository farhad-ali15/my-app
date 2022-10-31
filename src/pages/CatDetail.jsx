import { data } from "../all-data/data"
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import Main from "../components/Main"

function CatDetail() {


  function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  const { CatSlug } = useParams()
  const prod = data.products.filter((products) => convertToSlug(products.category) === CatSlug)


  return (
    <div>
      <Header />
      <CategoryCard categories={data.categories} />



      <Main products={prod} />



    </div>
  )
}
export default CatDetail