import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Homepage/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Layout from "./components/Layout/Layout/Layout";
import { Profile } from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* </Router> */}
      </Layout>
    </div>
  );
}
export default App;
