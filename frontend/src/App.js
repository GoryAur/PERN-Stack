import MovieForm from "./components/MoviesForm";
import MoviesList from "./components/MoviesList";
import Menu from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route index path="/" element={<MoviesList />} />
          <Route path="/movies/new" element={<MovieForm />} />
          <Route path="/movies/:id/edit" element={<MovieForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
