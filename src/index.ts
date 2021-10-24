/*
    Desarrollador: Equinoccio Technology
    CEO: ing. Lucas Omar Moreno
    Año: 2021
    Tematica: Sitio Web de la empresa
*/

// Imports
import express from 'express';
import chalk from 'chalk';
import path from 'path';
import { db } from './database/config';
import helmet from 'helmet';

// [Express]
const app = express();
app.set('PORT', process.env.PORT || 3000);
app.use(require('cors')());
app.use(express.json());
app.use(express.static('src/public')); // Para prod solo 'public'
app.use(helmet());

// [MongoDB]
// db.connection();

// [Rutas]
// import ContactRoutes from './routes/contact.routes';
// app.use('/api/contact', ContactRoutes);

// [Necesario para no perder las rutas en produccion]
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// Ejecución de servidor
app.listen(app.get('PORT'), () => {
    console.log(chalk.blue('[Desarrollador] - ') + 'Equinoccio Technology');
    console.log(chalk.blue('[Express] - ') + `Servidor corriendo en http://localhost:${app.get('PORT')}`);   
});

