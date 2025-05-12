import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
