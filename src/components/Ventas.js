import React, { Component } from "react";
import pastel from "../imagenes/post.jpg";
import "./styles/estilo.css";

class Ventas extends Component {
  render() {
    return (
      <section>
        <div className="producto">
          <div class="row">
            <div class="col-md-3">
              <div class="s_product"> 
                <img src={pastel} alt={"pastel"} ></img>
                <div></div>
                <h3>Pastel</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="s_product"> 
                <img src={pastel} alt={"pastel"} ></img>
                <div></div>
                <h3>Pastel</h3>
              </div>
            </div>
            <div class="col-md-3">
              <div class="s_product"> 
                <img src={pastel} alt={"pastel"} ></img>
                <div></div>
                <h3>Pastel</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Ventas;
