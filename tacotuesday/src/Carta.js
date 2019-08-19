import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Carta extends Component{
  render(){
    return(
      <div className = "Carta" class="row">
      <div class="col s6 offset-s3">
      <div class="card">
        <div class="card-image">
          <img src={this.props.imagendir}/>
          <span class="card-title black-text">{this.props.titulo}</span>
          </div>
      <div class="card-content">
        {this.props.cuerpo}
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Carta;
