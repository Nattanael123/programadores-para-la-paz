const express = require('express');
const app = express();

app.use(express.json());

// El array "reportes" almacena los reportes en memoria mientras el servidor está activo.
// No se guarda en una base de datos; al reiniciar el servidor, se pierde todo lo registrado.
let reportes = [];

app.get('/reportes', (req, res) => {
  // GET devuelve todos los reportes almacenados en el array.
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
