const pool = require("../db");
const httpError = require("../helpers/handleError");

const getMovies = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM movies");
    res.json(response.rows);
  } catch (e) {
    httpError(res, e);
  }
};

const getMoviesById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM movies WHERE id = $1", [
      id,
    ]);
    if (response.rows.length === 0) {
      return res.status(404).send("Video not found.");
    }
    res.json(response.rows);
  } catch (e) {
    httpError(res, e);
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, author } = req.body;
    const response = await pool.query(
      "INSERT INTO movies (title, author) VALUES ($1, $2) RETURNING *",
      [title, author]
    );
    res.json(response.rows);
  } catch (e) {
    httpError(res, e);
  }
};

const updateMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author } = req.body;
    const response = await pool.query(
      "UPDATE movies SET title = $1, author = $2 WHERE id = $3 RETURNING *",
      [title, author, id]
    );
    if (response.rows.length === 0) {
      return res.status(404).send("Video not found.");
    }
    res.json(response.rows);
  } catch (e) {
    httpError(res, e);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM movies WHERE id = $1", [id]);
    if (response.rowCount === 0) {
      return res.status(404).send("Video not found.");
    }
    res.sendStatus(204);
  } catch (e) {
    httpError(res, e);
  }
};

module.exports = {
  getMovies,
  getMoviesById,
  createMovie,
  updateMovie,
  deleteMovie,
};
