import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { FaUsersCog, FaUserPlus, FaTasks, FaClipboardList, FaClock, FaCalendarAlt, FaTag, FaChartBar, FaInstagram } from 'react-icons/fa';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Panel de Administración</h1>

      {/* Lista de Gestión de Usuarios */}
      <div className="mb-4 p-4 bg-light rounded shadow">
        <h3>Gestión de Usuarios</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/userlist')}><FaUsersCog /> Lista de usuarios</Button>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/formuser')}><FaUserPlus /> Formulario de usuarios</Button>
          </Col>
        </Row>
      </div>

      {/* Lista de Gestión de Servicios */}
      <div className="mb-4 p-4 bg-light rounded shadow">
        <h3>Gestión de Servicios</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/addservice')}><FaClipboardList /> Formulario de Servicios</Button>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/servicelist')}><FaTasks /> Gestión de Servicios</Button>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/createavailablehour')}><FaClock /> Crear horas</Button>
          </Col>
        </Row>
      </div>

      {/* Lista de Otros Servicios */}
      <div className="mb-4 p-4 bg-light rounded shadow">
        <h3>Otros Servicios</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/AdminCalendar')}><FaCalendarAlt /> Calendario</Button>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/CouponList')}><FaTag /> Lista de Cupones</Button>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/CreateCoupon')}><FaTag /> Crear cupón</Button>
          </Col>
        </Row>
      </div>

      {/* Reportes */}
      <div className="mb-4 p-4 bg-light rounded shadow">
        <h3>Reportes</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/Reports')}><FaChartBar /> Reportes</Button>
          </Col>
        </Row>
      </div>

      {/* Publicaciones de Instagram */}
      <div className="mb-4 p-4 bg-light rounded shadow">
        <h3>Publicaciones de Instagram</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/AdminInstagramPosts')}><FaInstagram /> Ingresar post</Button>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Button className="custom-btn" block onClick={() => handleNavigation('/horario')}><FaCalendarAlt /> Horario</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AdminDashboard;
