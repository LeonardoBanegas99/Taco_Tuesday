import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Coleccion extends Component{
  render(){
    return(
      <div class = "container">
      <ul class="collection with-header">

      <li class="collection-header"><h4>Tipos de Tacos</h4></li>
      <li class="collection-item">
        <span class = "title">Tacos Al Pastor</span>
        <a href="" class="secondary-content">
          <a href="#" class = "btn fix cyan darken-4">
            <span>Show</span>
            <i class="material-icons blue-text right">image</i>
        </a>
        </a>
      </li>

      <li class="collection-item">
        <span class = "title">Tacos Dorados</span>
        <a href="" class="secondary-content">
          <a href="#" class = "btn fix cyan darken-4">
            <span>Show</span>
            <i class="material-icons blue-text right">image</i>
        </a>
        </a>
      </li>

      <li class="collection-item">
        <span class = "title">Tacos Doblados</span>
        <a href="" class="secondary-content">
          <a href="#" class = "btn fix cyan darken-4">
            <span>Show</span>
            <i class="material-icons blue-text right">image</i>
        </a>
        </a>
      </li>

      <li class="collection-item">
        <span class = "title">Tacos de Carnitas</span>
        <a href="" class="secondary-content">
          <a href="#" class = "btn fix cyan darken-4">
            <span>Show</span>
            <i class="material-icons blue-text right">image</i>
        </a>
        </a>
      </li>

      <li class="collection-item">
      <span class = "title">Tacos de Pollo</span>
      <a href="" class="secondary-content">
        <a href="#" class = "btn fix cyan darken-4">
          <span>Show</span>
          <i class="material-icons blue-text right">image</i>
      </a>
      </a>
      </li>

      </ul>
        </div>
  );
}
}

export default Coleccion;
