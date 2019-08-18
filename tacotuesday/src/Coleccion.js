import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Coleccion extends Component{
  render(){
    return(
      <div class="collection">
        <a href="#1" class="collection-item">Tacos Al Pastor</a>
        <a href="#2" class="collection-item">Tacos Dorados</a>
        <a href="#3" class="collection-item">Tacos Doblados</a>
        <a href="#4" class="collection-item">Tacos de Carnitas</a>
        <a href="#5" class="collection-item">Tacos de Pollo</a>
      </div>
  );
}
}

export default Coleccion;
