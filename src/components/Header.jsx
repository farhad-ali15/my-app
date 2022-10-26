import logo from '../images/KFC-Logo.png';



function Header() {

  console.log()
  return (
    <header className="container mb-5">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo}></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="btn btn-delivery" aria-current="page" href="#">Start an order for the delivery</a>
              </li>
             
                           
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-3">
                <a class="btn" aria-current="page" href="#"><i class="bi bi-geo-fill"></i><span className="txt-loc">select Location</span> <i class="bi bi-chevron-compact-down txt-loc"></i></a>
              </li>
              <li class="nav-item me-3">
                <a class="btn btn-cart-counter mr-2" aria-current="page" href="#">0</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-danger" href="#">Register / Sign In</a>
              </li>
                           
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header; 