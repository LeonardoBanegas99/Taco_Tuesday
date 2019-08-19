import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Carta from './Carta';
import Coleccion from './Coleccion';
import {todos} from './todos.json';

import 'materialize-css/dist/css/materialize.min.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  render(){
    var monkey = JSON.stringify(this.state.todos);
    localStorage.setItem('monkey',monkey);
    const todos = this.state.todos.map((todo,i) =>{
      return(
        <div className = "Carta" class="row">
        <div class="col s6 offset-s3">
        <div class="card">
          <div class="card-image">
            <img src={todo.imagendir}/>
            <span class="card-title black-text">{todo.titulo}</span>
            </div>
        <div class="card-content">
          {todo.cuerpo}
        </div>
        </div>
        </div>
        </div>
      );
    })
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

    
    {todos}

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
