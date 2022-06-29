const express = require('express');
const PeliculaController = require('../controllers/PeliculaController');

const router = express.Router();

router.get('/peliculas', PeliculaController.index);
router.get('/create', PeliculaController.create);
router.post('/create', PeliculaController.store);
router.post('/peliculas/delete', PeliculaController.destroy);
router.get('/peliculas/edit/:id', PeliculaController.edit);
router.post('/peliculas/edit/:id', PeliculaController.update);

module.exports = router;