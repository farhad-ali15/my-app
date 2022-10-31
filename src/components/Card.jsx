import {Link} from "react-router-dom"

function Card({ product }) {
    return (
        <div className="card  height-90%"  >
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="card-btn d-flex justify-content-between">
                    <Link to ="/" className="btn "><strong>Rs. {product.price}</strong></Link>
                    <Link to ="/" className="btn btn-danger">Add to cart</Link>
                </div>
            </div>
        </div>
    )
}



export default Card;