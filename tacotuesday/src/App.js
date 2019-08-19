import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Carta from './Carta';
import Coleccion from './Coleccion';

import 'materialize-css/dist/css/materialize.min.css';

function Input(){

}

class App extends Component{
  render(){
  return (
    <div>

    <nav class = "red darken-3 darken-4">
    <div class="nav-wrapper">
    <a href="#" class="brand-logo center">Tacos</a>
    </div>
    </nav>

    <div class = "container">
    <Coleccion/>
    </div>

    <Carta titulo= "Tacos Al Pastor" cuerpo="El ingrediente principal para estos tacos es la carne de cerdo adobada con achiote o chile ancho, naranja, vinagre, pimienta. Estos se acompañan con un trozo de piña, la tortilla es pequeña y en ocasiones se usan dos, una sobre otra."/>
    <Carta titulo= "Tacos Dorados" cuerpo="Estos tacos se elaboran a partir de tortillas de maíz recién hechas y se rellenan por lo regular de carne deshebrada de pollo, res, cerdo o barbacoa, frijol o bien de papa con queso; la tortilla se enrolla y se fríe en abundante aceite o manteca de cerdo para que tome una consistencia dorada y firme. Cuando se sirven, por lo regular se les pone encima una capa de crema, queso rallado, lechuga picada y salsa al gusto verde o roja"/>
    <Carta titulo= "Tacos Doblados" cuerpo="Estos tacos se hacen con una tortilla doblada y frita en aceite, lo que la hace dura y lista para rellenarse de papas, carne, frijoles, etc. además de algún tipo de ensalada de hojas verdes."/>
    <Carta titulo= "Tacos de Carnitas" cuerpo="Elaborados con carne de cerdo cocida en manteca (grasa) del mismo."/>
    <Carta titulo= "Tacos de Pollo" cuerpo="Este taco se elabora con pollo cocido y desmenuzado, mole, cebolla, y se acompaña con una tortilla elaborada con, harina de maíz, harina de trigo, manteca de cerdo, sal y agua."/>




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
