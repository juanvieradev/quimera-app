import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
        </ul>
      </nav>
      <h1>Bienvenido a mi aplicación</h1>
    </div>
  );
}

export default App;