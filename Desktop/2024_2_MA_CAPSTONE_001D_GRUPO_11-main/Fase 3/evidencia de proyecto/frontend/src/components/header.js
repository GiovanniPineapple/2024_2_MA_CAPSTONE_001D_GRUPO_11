import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Asegúrate de importar correctamente el hook
import '../styles/header.css'; // Asegúrate de crear y usar este archivo de estilos

const Header = () => {
  const { authData, logout } = useAuth();
  const role = authData?.role || 'no_logeado';
  const userName = authData?.userName || '';
  const UserId = authData?.UserId || '';

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/" className="logo">
              <img src="./img/logo2.PNG" alt="AndesK9 Logo" className="logo-img" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-wrap justify-content-center">
              <li className="nav-item">
                <Link to="/" className="nav-link">Inicio</Link>
              </li>
              {role === 'no_logeado' && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Iniciar Sesión</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contactform" className="nav-link">Contacto</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/noticias" className="nav-link">Noticias y actividades</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/AboutUs" className="nav-link">Quienes somos</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ServiceListCardnu" className="nav-link">Servicios</Link>
                  </li>
                </>
              )}
              {role === 'admin' && (
                <>
                  <li className="nav-item">
                    <span className="nav-link active">Bienvenido, {authData?.name || 'Admin'}</span>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin-dashboard" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/userlist" className="nav-link">Usuarios</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/servicelist" className="nav-link">Servicios</Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={logout} className="logout-btn">Cerrar Sesión</button>
                  </li>
                </>
              )}
              {role === 'cliente' && (
                <>
                  <li className="nav-item">
                    <span className="nav-link active">Bienvenido, {authData?.name || authData?.UserId}</span>
                  </li>
                  <li className="nav-item">
                    <Link to="/servicelistCard" className="nav-link">Servicios</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/select-appointment" className="nav-link">Agendar Cita</Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={logout} className="logout-btn">Cerrar Sesión</button>
                  </li>
                </>
              )}
              {role === 'entrenador' && (
                <>
                  <li className="nav-item">
                    <span className="nav-link active">Bienvenido, {userName} (Entrenador)</span>
                  </li>
                  <li className="nav-item">
                    <Link to="/horario" className="nav-link">Horario</Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={logout} className="btn btn-outline-dark rounded-button">Cerrar Sesión</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
