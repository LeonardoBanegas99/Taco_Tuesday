import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';

var info = "Hola";

function Print(element){
  element.color = 'red';
  element.render();
}


function App() {
  return (
    <div>

    <nav class = "light-blue darken-4">
    <div class="nav-wrapper">
    <a href="#" class="brand-logo center">Tacos</a>
    </div>
    </nav>

    <div class = "container">
    <ul class="collection with-header">

    <li class="collection-header"><h4>Tipos de Tacos</h4></li>
    <li class="collection-item">
      <span class = "title">Tacos Al Pastor</span>
      <a href="" class="secondary-content">
        <a href="#Pastor" class = "btn fix cyan darken-4">
          <span>Show</span>
          <i class="material-icons blue-text right">image</i>
      </a>
      </a>
    </li>

    <li class="collection-item">
      <span class = "title">Tacos Dorados</span>
      <a href="" class="secondary-content">
        <a href="#Dorados" class = "btn fix cyan darken-4">
          <span>Show</span>
          <i class="material-icons blue-text right">image</i>
      </a>
      </a>
    </li>

    <li class="collection-item">
      <span class = "title">Tacos Doblados</span>
      <a href="" class="secondary-content">
        <a class = "button fix cyan darken-4" onclick={info = "Doblados"}>
          <span>Show</span>
          <i class="material-icons blue-text right">image</i>
      </a>
      </a>
    </li>

    <li class="collection-item">
      <span class = "title">Tacos de Carnitas</span>
      <a href="" class="secondary-content">
        <a href="#Carnitas" class = "btn fix cyan darken-4">
          <span>Show</span>
          <i class="material-icons blue-text right">image</i>
      </a>
      </a>
    </li>

    <li class="collection-item">
    <span class = "title">Tacos de Pollo</span>
    <a href="" class="secondary-content">
      <a href="#Pollo" class = "btn fix cyan darken-4">
        <span>Show</span>
        <i class="material-icons blue-text right">image</i>
      </a>
    </a>
    </li>


    </ul>
    </div>

    <div class="row">
    <div class="col s6 offset-s3">
      <div class="card blue-grey darken-1" id="carta">
        <div class="card-content white-text">
          <span class="card-title">Informacion de los Tacos</span>
          {""}
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}

export default App;

/*<ul id="nav-mobile" class="left hide-on-med-and-down">
  <li><a href="sass.html">Sass</a></li>
  <li><a href="badges.html">Components</a></li>
  <li><a href="collapsible.html">JavaScript</a></li>
</ul>*/
