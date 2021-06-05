import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar'
import * as serviceWorker from './serviceWorker';
import Formulario from './components/Formulario'
import Ventas from './components/Ventas'
import FlavorForm from './components/input'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
//import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 
//import '../node_modules/bootstrap/dist/js/'
ReactDOM.render(
  <React.StrictMode>
     <Navbar /> 
   {/*  <FlavorForm></FlavorForm> */}
  {/*   <Formulario></Formulario> */}
  <Ventas></Ventas>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
