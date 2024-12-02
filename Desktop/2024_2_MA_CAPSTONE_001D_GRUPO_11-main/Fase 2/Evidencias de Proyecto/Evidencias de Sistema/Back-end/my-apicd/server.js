const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt'); // Para el hashing de contraseñas

const app = express();
const PORT = 5000;

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Cambia a la URL de tu aplicación React
  optionsSuccessStatus: 200
};
app.use(cors()); 
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Sirve archivos estáticos (como imágenes) desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

// ------------ Configuración de multer para servicios ------------

// Almacenamiento para las imágenes de servicios
const storageServicios = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads/img2'); // Carpeta para servicios
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const uploadServicios = multer({ storage: storageServicios });
// ------------ Configuración de multer para servicios ------------

// Almacenamiento para las imágenes de servicios
const storageActividades = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads/img3'); // Carpeta para servicios
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const uploadActividades = multer({ storage: storageActividades });


// ------------ Configuración de multer para usuarios ------------
// Almacenamiento para las imágenes de usuario
const storageUsuarios = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads/img1'); // Carpeta para usuarios
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const uploadUsuarios = multer({ storage: storageUsuarios });

// Configuración de base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Reemplaza con tu usuario
  password: 'nutria', // Reemplaza con tu contraseña
  database: 'andes' // Asegúrate de que este sea el nombre correcto de tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// ------------ CRUD para Usuarios ------------

// Crear un nuevo usuario
app.post('/usuarios', uploadUsuarios.single('userImage'), async (req, res) => {
  const { userName, userEmail, userPhone, userPassword, userRole } = req.body;

  if (!userName || !userEmail || !userPhone || !userPassword || !userRole) {
    return res.status(400).json({ message: 'Faltan datos de usuario.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const userImagePath = req.file ? `uploads/img1/${req.file.filename}` : null;

    const sql = `INSERT INTO class_user (user_name, user_email, user_phone, user_password, user_role, user_image_path) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [userName, userEmail, userPhone, hashedPassword, userRole, userImagePath];

    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error al insertar el usuario:', err);
        return res.status(500).json({ message: 'Error al guardar el usuario.' });
      }

      res.status(201).json({
        message: 'Usuario creado con éxito',
        usuario: {
          id: results.insertId,
          userName,
          userEmail,
          userPhone,
          userRole,
          userImage: userImagePath,
        },
      });
    });
  } catch (error) {
    console.error('Error al hashear la contraseña:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

// Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM class_user'; 
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los usuarios:', err);
      return res.status(500).json({ message: 'Error al obtener los usuarios' });
    }

    res.status(200).json(results);
  });
});

// Obtener un usuario específico por id
app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM class_user WHERE id_user = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener el usuario:', err);
      return res.status(500).json({ message: 'Error al obtener el usuario' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(results[0]);
  });
});

// Eliminar un usuario por id
app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM class_user WHERE id_user = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar el usuario:', err);
      return res.status(500).json({ message: 'Error al eliminar el usuario' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  });
});

// Actualizar un usuario por id
app.put('/usuarios/:id', uploadUsuarios.single('userImage'), async (req, res) => {
  const { id } = req.params;
  const { userName, userEmail, userPhone, userRole } = req.body;

  // Verifica si hay una nueva imagen
  let userImagePath = req.file ? `uploads/img1/${req.file.filename}` : null;

  // Si no se proporciona una nueva imagen, usa la existente
  if (!userImagePath) {
    const existingImageQuery = 'SELECT user_image_path FROM class_user WHERE id_user = ?';
    db.query(existingImageQuery, [id], (err, results) => {
      if (err) {
        console.error('Error al obtener la imagen actual:', err);
        return res.status(500).json({ message: 'Error al obtener la imagen actual' });
      }
      if (results.length > 0) {
        userImagePath = results[0].user_image_path; // Usa la imagen existente
      }
    });
  }

  const query = `
      UPDATE class_user 
      SET user_name = ?, user_email = ?, user_phone = ?, user_role = ?, user_image_path = ?
      WHERE id_user = ?`;
  
  db.query(query, [userName, userEmail, userPhone, userRole, userImagePath, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el usuario:', err);
      return res.status(500).json({ message: 'Error al actualizar el usuario' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario actualizado con éxito', userImagePath });
  });
});

// Crear un nuevo servicio
app.post('/services', uploadServicios.single('serviceImage'), (req, res) => {
  const { serviceName, serviceDescription, servicePrice, serviceDuration } = req.body;
  const serviceImagePath = req.file ? `uploads/img2/${req.file.filename}` : null;

  if (!serviceName || !serviceDescription || !servicePrice || !serviceDuration) {
    return res.status(400).json({ message: 'Faltan datos del servicio.' });
  }

  const sql = `INSERT INTO services (service_name, service_description, service_price, service_duration, service_image_path) VALUES (?, ?, ?, ?, ?)`;
  const values = [serviceName, serviceDescription, servicePrice, serviceDuration, serviceImagePath];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error al insertar el servicio:', err);
      return res.status(500).json({ message: 'Error al guardar el servicio.' });
    }

    res.status(201).json({
      message: 'Servicio creado con éxito',
      servicio: {
        id_service: results.insertId,
        serviceName,
        serviceDescription,
        servicePrice,
        serviceDuration,
        serviceImagePath,
      },
    });
  });
});

// Obtener todos los servicios
app.get('/services', (req, res) => {
  const query = 'SELECT * FROM services'; 
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los servicios:', err);
      return res.status(500).json({ message: 'Error al obtener los servicios' });
    }

    res.status(200).json(results);
  });
});

// Obtener un servicio específico por id
app.get('/services/:id', (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM services WHERE id_service = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener el servicio:', err);
      return res.status(500).json({ message: 'Error al obtener el servicio' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.status(200).json(results[0]);
  });
});

// Eliminar un servicio por id
app.delete('/services/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM services WHERE id_service = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar el servicio:', err);
      return res.status(500).json({ message: 'Error al eliminar el servicio' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.status(200).json({ message: 'Servicio eliminado con éxito' });
  });
});

// Actualizar un servicio por id
app.put('/services/:id', uploadServicios.single('serviceImage'), (req, res) => {
  const { id } = req.params;
  const { serviceName, serviceDescription, servicePrice, serviceDuration } = req.body;
  let serviceImagePath = req.file ? `uploads/img2/${req.file.filename}` : null;

  // Si no se proporciona una nueva imagen, usa la existente
  if (!serviceImagePath) {
    const existingImageQuery = 'SELECT service_image_path FROM services WHERE id_service = ?';
    db.query(existingImageQuery, [id], (err, results) => {
      if (err) {
        console.error('Error al obtener la imagen actual:', err);
        return res.status(500).json({ message: 'Error al obtener la imagen actual' });
      }
      if (results.length > 0) {
        serviceImagePath = results[0].service_image_path; // Usa la imagen existente
      }
    });
  }

  const query = `
      UPDATE services 
      SET service_name = ?, service_description = ?, service_price = ?, service_duration = ?, service_image_path = ?
      WHERE id_service = ?`;
  
  db.query(query, [serviceName, serviceDescription, servicePrice, serviceDuration, serviceImagePath, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el servicio:', err);
      return res.status(500).json({ message: 'Error al actualizar el servicio' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.status(200).json({ message: 'Servicio actualizado con éxito' });
  });
});




// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
