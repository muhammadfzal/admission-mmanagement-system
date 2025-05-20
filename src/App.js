import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdmissionForm from "./pages/Admission"
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
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
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
