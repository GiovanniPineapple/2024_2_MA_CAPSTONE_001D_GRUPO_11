import React, { useEffect, useState } from 'react';
import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';

const ServiceListCard = () => {
  const [services, setServices] = useState([]);

  // Función para obtener la lista de servicios
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error al obtener servicios:', error);
      }
    };

    fetchServices();
  }, []);

  // Función para manejar la compra del servicio
  const buyService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/services/buy/${id}`, {
        method: 'POST',
      });
      if (response.ok) {
        // Aquí podrías agregar lógica adicional, como mostrar un mensaje de éxito o redirigir
        alert('Servicio comprado con éxito');
      } else {
        console.error('Error al comprar el servicio:', response.status);
      }
    } catch (error) {
      console.error('Error al comprar el servicio:', error);
    }
  };

  return (
    <Container>
      <h3 className="text-center mb-4">Lista de Servicios</h3>
      <Row>
        {services.map((service) => (
          <Col sm="4" key={service.id_service} className="mb-4">
            <Card>
              {service.service_image_path ? (
                <CardImg
                  top
                  src={`http://localhost:5000/${service.service_image_path}`}
                  alt={`${service.service_name}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ height: '200px', backgroundColor: '#e0e0e0' }} />
              )}
              <CardBody>
                <CardTitle tag="h5">{service.service_name}</CardTitle>
                <CardText>{service.service_description}</CardText>
                <CardText>
                  <strong>Precio:</strong> ${service.service_price.toLocaleString('es-CL')} CLP
                </CardText>
                <CardText>
                  <strong>Duración:</strong> {service.service_duration} visitas
                </CardText>
                <Button color="primary" onClick={() => buyService(service.id_service)}>
                  Comprar
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceListCard;
