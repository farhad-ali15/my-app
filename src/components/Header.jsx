import logo from './KFC-Logo.png';



function Header() {

  console.log()
  return (
    <header className='mb-5'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo}></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn btn-delivery" aria-current="page" href="#">Start an order for the delivery</a>
              </li>
             
                           
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
                <a className="btn" aria-current="page" href="#"><i className="bi bi-geo-fill"></i><span className="txt-loc">select Location</span> <i className="bi bi-chevron-compact-down txt-loc"></i></a>
              </li>
              <li className="nav-item me-3">
                <a className="btn btn-cart-counter mr-2" aria-current="page" href="#">0</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-danger" href="#">Register / Sign In</a>
              </li>
                           
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header; 