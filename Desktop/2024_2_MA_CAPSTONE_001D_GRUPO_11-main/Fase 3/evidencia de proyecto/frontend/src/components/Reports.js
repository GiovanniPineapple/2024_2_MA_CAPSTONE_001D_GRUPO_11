import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reports = () => {
  const [mostVisitedComuna, setMostVisitedComuna] = useState(null);
  const [leastVisitedComuna, setLeastVisitedComuna] = useState(null);
  const [mostReservedDay, setMostReservedDay] = useState(null);
  const [leastReservedDay, setLeastReservedDay] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const mostVisitedRes = await axios.get('http://localhost:5000/report/most-visited-comuna');
        setMostVisitedComuna(mostVisitedRes.data);

        const leastVisitedRes = await axios.get('http://localhost:5000/report/least-visited-comuna');
        setLeastVisitedComuna(leastVisitedRes.data);

        const mostReservedRes = await axios.get('http://localhost:5000/report/most-day-reserved');
        setMostReservedDay(mostReservedRes.data);

        const leastReservedRes = await axios.get('http://localhost:5000/report/least-day-reserved');
        setLeastReservedDay(leastReservedRes.data);

        const response = await axios.get('http://localhost:5000/report/per-comuna');
        setData(response.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching report:', error);
        setError('Error al cargar los datos');
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <div>Cargando reportes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="text-center my-4">Reportes de Citas</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary text-center">
              <th>Reporte</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comuna Más Visitada</td>
              <td>
                {mostVisitedComuna ? (
                  `Comuna: ${mostVisitedComuna.comuna}, Visitas: ${mostVisitedComuna.visitCount}`
                ) : (
                  'Cargando...'
                )}
              </td>
            </tr>
            <tr>
              <td>Comuna Menos Visitada</td>
              <td>
                {leastVisitedComuna ? (
                  `Comuna: ${leastVisitedComuna.comuna}, Visitas: ${leastVisitedComuna.visitCount}`
                ) : (
                  'Cargando...'
                )}
              </td>
            </tr>
            <tr>
              <td>Día Más Agendado</td>
              <td>
                {mostReservedDay ? (
                  `Día: ${mostReservedDay.day}, Citas: ${mostReservedDay.appointmentcount}`
                ) : (
                  'Cargando...'
                )}
              </td>
            </tr>
            <tr>
              <td>Día Menos Agendado</td>
              <td>
                {leastReservedDay ? (
                  `Día: ${leastReservedDay.day}, Citas: ${leastReservedDay.appointmentcount}`
                ) : (
                  'Cargando...'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-center my-4">Ingresos Totales por Comuna</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-success">
            <tr>
              <th>Comuna</th>
              <th>Ingresos Totales</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.address_appoin}</td>
                <td>${parseFloat(row.total_income).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handlePrint}>
          Imprimir Reporte
        </button>
      </div>
    </div>
  );
};

export default Reports;
