import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Customers from './pages/Customers';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';  // import Navbar

function App() {
  return (
    <Router>
      <Navbar />  {/* Add Navbar here so it shows on every page */}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        />

        {/* Default route: redirect to login if nothing matches */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


