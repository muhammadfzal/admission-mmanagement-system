import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdmissionForm from "./pages/Admission"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
