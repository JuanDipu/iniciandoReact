import React, { Component } from "react";
import "./styles/estilo.css";
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "1",
      dat: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleChange(event) {
    console.log(event.target.value);
    //this.setState({ num: event.target.value });
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(this.state);
    // lo siguiente se envía los datos al dervidor
    fetch("3000/formulario", {
      method: "POST",
      //Volver string un objeto
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    event.preventDefault();
    this.setState({
      num: "1",
      dat: "",
    });
  }
  submitForm = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="form">
        <h1>Formulario</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <select
              name="num"
              onChange={this.handleChange}
              value={this.state.num}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <input
              size="50"
              type="text"
              name="dat"
              onChange={this.handleChange}
              value={this.state.dat}
            ></input>
          </div>
          <div className="input">
            <select
              name="num"
              onChange={this.handleChange}
              value={this.state.num}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <input
              size="50"
              type="text"
              name="dat"
              onChange={this.handleChange}
              value={this.state.dat}
            ></input>
          </div>
          <div  className="boton">
          <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default Formulario;
