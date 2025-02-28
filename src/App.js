import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./output.css";
import Header from "./components/header/Header";
import "./components/header/header.css";
import Home from "./pages/Home";
//import About from "./pages/About";
//import Services from "./pages/Services";
//import Pages from "./pages/Pages";
//import Blog from "./pages/Blog";
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
