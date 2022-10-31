import logo from './KFC-Logo.png';
import { Link } from "react-router-dom"


function Header() {

  console.log()
  return (
    <header className='mb-5'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="..."></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-delivery"  >Start an order for the delivery</Link>
              </li>


            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="btn"  ><i className="bi bi-geo-fill"></i><span className="txt-loc">select Location</span> <i className="bi bi-chevron-compact-down txt-loc"></i></Link>
              </li>
              <li className="nav-item me-3">
                <Link className="btn btn-cart-counter mr-2" >0</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-danger" to="/login">Register / Sign In</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header; 