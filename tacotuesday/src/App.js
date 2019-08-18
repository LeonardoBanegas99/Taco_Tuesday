import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
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
        <i class="material-icons blue-text">image</i>
      </a>
    </li>

    <li class="collection-item">
      <span class = "title">Tacos Dorados</span>
      <a href="" class="secondary-content">
        <i class="material-icons blue-text">image</i>
      </a>
    </li>

    <li class="collection-item">
      <span class = "title">Tacos Doblados</span>
      <a href="" class="secondary-content">
        <i class="material-icons blue-text">image</i>
      </a>
    </li>

    <li class="collection-item">
      <span class = "title">Tacos de Carnitas</span>
      <a href="" class="secondary-content">
        <i class="material-icons blue-text">image</i>
      </a>
    </li>

    <li class="collection-item">
      <span class = "title">Tacos de Pollo</span>
      <a href="" class="secondary-content">
        <i class="material-icons blue-text">image</i>
      </a>
    </li>

    </ul>
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
