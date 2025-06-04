import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Homepage/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Layout from "./components/Layout/Layout/Layout";
import { Profile } from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";
import { HomeResetProvider } from "./context/HomeResetContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Auth from "./pages/Auth/Auth";
import { MovieProvider } from "./context/MovieContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <HomeResetProvider>
          <MovieProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies/:movieId" element={<MovieDetail />} />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/favorites"
                  element={
                    <PrivateRoute>
                      <Favorites />
                    </PrivateRoute>
                  }
                />
                <Route path="/login" element={<Auth />} />
              </Routes>
            </Layout>
          </MovieProvider>
        </HomeResetProvider>
      </AuthProvider>
    </div>
  );
}
export default App;
