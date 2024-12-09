import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientInstagramPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/instagram-posts');
          setPosts(response.data); 
          setLoading(false); 
        } catch (error) {
          console.error("Error al obtener publicaciones:", error);
          setError("Hubo un error al obtener las publicaciones.");
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);
  
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Publicaciones de Instagram</h1>
  
        {loading && <p>Cargando publicaciones...</p>}
  
        {error && <p>{error}</p>}
  
        {posts.length > 0 ? (
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <img src={post.media_url} alt={post.caption} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{post.caption}</h5>
                    <p className="card-text">{post.created_at}</p>
                    <a href={post.post_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Ver publicación
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p>No se encontraron publicaciones.</p>
        )}
      </div>
    );
  };

export default ClientInstagramPosts;
