import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PhoneLogin from "./pages/PhoneLogin";
import Home from "./pages/Home";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/phone" element={<PhoneLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
