const { Router } = require('express');
const { getMovies, getMoviesById, createMovie, updateMovie, deleteMovie, getFrontend } = require('../controllers/movies.controller');


const router = Router();

router.get('/', getFrontend)
router.get('/movies', getMovies)
router.get('/movies/:id', getMoviesById)
router.post('/movies', createMovie)
router.put('/movies/:id', updateMovie)
router.delete('/movies/:id', deleteMovie)

module.exports = router;