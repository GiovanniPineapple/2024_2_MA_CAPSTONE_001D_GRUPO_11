import React from 'react';

const AboutUs = () => {
    const styles = {
        videoBanner: {
            position: 'relative',
            paddingTop: '30%', // Relación de aspecto más pequeña
            marginBottom: '30px',
            backgroundColor: '#000',
            maxWidth: '800px', // Limitar el ancho del video
            margin: '0 auto', // Centrar el video
            borderRadius: '10px', // Bordes redondeados
            overflow: 'hidden',
        },
        videoIframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
        },
        container: {
            padding: '2rem 1rem',
        },
        section: {
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem',
        },
        image: {
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            marginBottom: '1rem',
            fontWeight: 600,
        },
        text: {
            marginBottom: '1rem',
            lineHeight: 1.6,
        },
    };

    return (
        <div><br>
        </br>
            <div style={styles.section}>

                <div style={styles.videoBanner}>
                    <iframe
                        src="https://www.youtube.com/embed/mGaURED_-z8"
                        title="Video Banner"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={styles.videoIframe}
                    ></iframe>
                </div>
            </div>
            {/* Video Banner */}
            

            {/* Contenido principal */}
            <div style={styles.container}>
                {/* Sección de ¿Quiénes Somos? */}
                <div style={styles.section}>
                    <div className="row">
                        <div className="col-md-6">
                            <h2 style={styles.heading}>¿Quiénes Somos?</h2>
                            <p style={styles.text}>
                                En AndesK9, nos dedicamos a ofrecer servicios de alta calidad para el adiestramiento y bienestar de tu mascota. 
                                Con años de experiencia en el campo, nuestro equipo está compuesto por entrenadores y profesionales dedicados a asegurar que tu perro reciba la mejor atención.
                            </p>
                            <p style={styles.text}>
                                Nuestra misión es brindar un ambiente seguro y estimulante para el desarrollo de tu mascota, promoviendo una educación basada en el respeto mutuo y el amor por los animales.
                            </p>
                            <p style={styles.text}>
                                Con una variedad de programas y servicios diseñados para satisfacer las necesidades de cada perro y dueño, nos enorgullece ver cómo cada mascota progresa y se convierte en un miembro más de la familia.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img 
                                src="img/quienessomos.jpg" 
                                alt="Quiénes somos" 
                                className="img-fluid"
                                style={styles.image}
                            />
                        </div>
                    </div>
                </div>

                

                {/* Sección "Conoce a nuestro equipo" */}
                <div style={styles.section}>
                    <div className="text-center">
                        <h3 style={styles.heading}>Conoce a nuestro equipo</h3>
                        <p style={styles.text}>
                            Nuestro equipo está formado por entrenadores certificados, veterinarios y expertos en comportamiento animal. Trabajamos en conjunto para asegurar que tu perro tenga la mejor experiencia posible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
