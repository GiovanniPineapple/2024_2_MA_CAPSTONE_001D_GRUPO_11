// components/NewsSection.js
import React from 'react';

const NewsSection = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Últimas Noticias</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="img/news1.jpg" className="card-img-top" alt="Noticia 1" />
            <div className="card-body">
              <h5 className="card-title">Nuevo Curso de Entrenamiento</h5>
              <p className="card-text">Anunciamos el nuevo curso de entrenamiento avanzado para perros de servicio.</p>
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/news2.jpg" className="card-img-top" alt="Noticia 2" />
            <div className="card-body">
              <h5 className="card-title">Competencia de Agilidad</h5>
              <p className="card-text">Nuestros perros han logrado destacarse en la última competencia de agilidad regional.</p>
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="img/news3.jpeg" className="card-img-top" alt="Noticia 3" />
            <div className="card-body">
              <h5 className="card-title">Técnicas de Rescate en Montaña</h5>
              <p className="card-text">Los perros de rescate de montaña han finalizado su última etapa de entrenamiento.</p>
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
