import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Carta from './Carta';
import Coleccion from './Coleccion';

import 'materialize-css/dist/css/materialize.min.css';

var info = "Hola";

function Print(element){
  info = "red"

}


class App extends Component{
  render(){
  return (
    <div>

    <nav class = "light-blue darken-4">
    <div class="nav-wrapper">
    <a href="#" class="brand-logo center">Tacos</a>
    </div>
    </nav>

    <div class = "container">
    <Coleccion/>
    </div>

    <Carta/>

    </div>
  );
}
}

export default App;

/*<ul id="nav-mobile" class="left hide-on-med-and-down">
  <li><a href="sass.html">Sass</a></li>
  <li><a href="badges.html">Components</a></li>
  <li><a href="collapsible.html">JavaScript</a></li>
</ul>*/
