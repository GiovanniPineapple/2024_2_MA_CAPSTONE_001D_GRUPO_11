import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientInstagramPosts from "./ClientInstagramPosts.js";

const AdminInstagramPosts = () => {
    const [postLink, setPostLink] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://34.176.165.30/:5000/api/instagram-posts', {
          post_link: postLink,
          image_url: imageUrl,
          caption: caption,
        });
        alert('Post agregado correctamente');
      } catch (error) {
        console.error('Error al agregar el post:', error);
      }
    };
  
    return (

        <div className="container">
            <div>

                <h2>Agregar Publicación de Instagram</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="postLink">Enlace del Post</label>
                    <input
                    type="url"
                    id="postLink"
                    className="form-control"
                    value={postLink}
                    onChange={(e) => setPostLink(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">URL de la Imagen</label>
                    <input
                    type="url"
                    id="imageUrl"
                    className="form-control"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="caption">Descripción del Post</label>
                    <textarea
                    id="caption"
                    className="form-control"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Agregar Post
                </button>
                </form>
            </div>

            <div>
            <ClientInstagramPosts />
            </div>





        </div>




        
    );
  };

export default AdminInstagramPosts;
