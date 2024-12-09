import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IncomeByComuna  = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/report/per-comuna');
        setData(response.data);
      } catch (err) {
        console.error('Error al obtener los datos:', err);
        setError('No se pudieron cargar los datos. Intenta más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >
      <h1 >Reporte: Ingresos por Dirección</h1>
      <table >
        <thead>
          <tr>
            <th >Dirección</th>
            <th >Ingresos Totales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td >{row.address_appoin}</td>
              <td >${parseFloat(row.total_income).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeByComuna;
