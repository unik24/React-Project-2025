import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Homepage/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Layout from "./components/Layout/Layout/Layout";
import { Profile } from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Layout>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        
      </Layout>
    </div>
  );
}
export default App;
