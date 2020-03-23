const express = require('express'); //importa express
const multer = require('multer'); //importa multer
const uploadConfig = require('./config/upload'); //importa upconf

const SessionController = require('./controllers/SessionController'); 
//const SpotController = require('./controllers/SpotController'); 
const DashboardController = require('./controllers/DashboardController'); 
//const BookingController = require('./controllers/BookingController'); 



const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store); //rota

//routes.get('/spots', SpotController.index); //rota
//routes.post('/spots', upload.single('thumbnail') , SpotController.store); //rota
 
routes.get('/dashboard', DashboardController.show); //rota

//routes.post('/spots/:spot_id/bookings', BookingController.store); //rota



module.exports = routes; //exporta as rotas 