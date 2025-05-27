import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdmissionForm from "./pages/Admission";
import AdminDashboard from "./pages/dashboard";
import PrivateRoute from "./privateRouts";

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicLayout>
              <SignUp />
            </PublicLayout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PublicLayout>
              <SignIn />
            </PublicLayout>
          }
        />

        {/* Protected route for students */}
        <Route
          path="/admission-form"
          element={
            <PrivateRoute allowedRole="user">
              <PublicLayout>
                <AdmissionForm />
              </PublicLayout>
            </PrivateRoute>
          }
        />

        {/* Protected route for admin */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute allowedRole="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
