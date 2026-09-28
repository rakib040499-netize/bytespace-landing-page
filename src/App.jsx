import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/signup" element={<Auth mode="signup" />} />
    </Routes>
  );
}
