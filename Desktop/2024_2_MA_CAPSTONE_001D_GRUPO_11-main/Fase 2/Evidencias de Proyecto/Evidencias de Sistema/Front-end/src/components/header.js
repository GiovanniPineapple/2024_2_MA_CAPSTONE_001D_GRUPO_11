import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link para las rutas

const Header = () => {
  return (
    <header className="bg-dark text-white text-center py-4">
      <img src="/img/imagen1.jpg" alt="Logo de la página" className="logo mx-auto d-block mb-3" />
      <h1 className="display-4">Bienvenidos a Andes K9</h1>
      <p className="lead">Entrenamiento y Noticias sobre tu mejor amigo canino</p>
      
      {/* Navegación */}
      <nav>
        <Link to="/" className="btn btn-primary mx-2">Inicio</Link>
        <Link to="/formuser" className="btn btn-secondary mx-2">Crear usuario</Link>
        <Link to="/addservice" className="btn btn-secondary mx-2">Crear servicio</Link>
      </nav>
    </header>
  );
};
export default Header;
