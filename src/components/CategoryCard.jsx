import { Link } from "react-router-dom"

function CategoryCard({ categories }) {
    function convertToSlug(text) {
        return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      }
    
    return (
        <div className="row mb-5">
            {
                categories.map(category => {
                    let CatSlug = convertToSlug(category.title)
                    return (
                        <div key={category.id} className="card-btn d-flex justify-content-between col-md-2   mb-3">
                         <Link to={`/categories/${CatSlug}`}><img src={category.image} className="img-thumbnail" alt="..."></img></Link>   
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard