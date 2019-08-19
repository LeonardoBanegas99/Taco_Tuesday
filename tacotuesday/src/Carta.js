import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Carta extends Component{
  render(){
    return(
      <div className = "Carta" class="row">
      <div class="col s6 offset-s3">
        <div class="card blue-grey darken-1" id="carta">
          <div class="card-content white-text">
            <span class="card-title">{this.props.titulo}</span>
            {this.props.cuerpo}
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Carta;
