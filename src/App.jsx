import { HashRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";

import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Development from "./pages/Development";

function App() {
  return (
    <HashRouter>
    
        {/* Left Sidebar */}
        <div
          style={{
            width: "220px",
            background: "#fff",
            padding: "20px",
            borderRight: "1px solid #ddd",
          }}
        >
          <Menu />
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/development" element={<Development />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;