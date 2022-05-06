import React, { useState, useEffect } from "react";
// import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const loadMovies = async () => {
    const response = await fetch("http://localhost:4000/movies");
    const data = await response.json();
    setMovies(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/movies/${id}`, {
        method: "DELETE",
      });
      setMovies(movies.filter((movies) => movies.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      {movies.map((movies) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <Typography>{movies.title}</Typography>
              <Typography>{movies.author}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/movies/${movies.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(movies.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default MoviesList;
