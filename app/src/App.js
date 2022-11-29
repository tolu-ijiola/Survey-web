import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import './style/home.css'
import './style/contact.css'
import './style/dropdown.css'
import Contact from "./pages/contact";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
