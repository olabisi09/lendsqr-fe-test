import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Layout from "./components/layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import UserDetailsPage from "./pages/userDetails/userDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-details" element={<UserDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
