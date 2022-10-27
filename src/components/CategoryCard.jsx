
function CategoryCard({ categories }) {
    return (
        <div className="row mb-5">
            {
                categories.map(category => {
                    return (
                        <div key={category.id} className="col-md-2   mb-3">
                            <img src={category.image} className="img-thumbnail" alt="..."></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard