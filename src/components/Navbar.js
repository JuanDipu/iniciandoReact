import React from "react";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Tienda</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
      /*   <div className="Navbar">
            <div className="container-fluid">
              <div className="Navbar__brand" >
                
                <span className="font-weight-light">Platzi</span>
                <span className="font-weight-bold">Confa</span>
              </div>
            </div>
          </div> */
    );
  }
}
export default Navbar;
