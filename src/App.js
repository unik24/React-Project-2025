import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout/Layout";
// import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
