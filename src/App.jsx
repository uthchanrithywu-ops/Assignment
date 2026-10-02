import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

import { useEffect } from "react";
import "./App.css";

import Menu from "./components/Menu";

import Home from "./pages/website/Home.jsx";
import About from "./pages/website/About.jsx";
import Vision from "./pages/website/Vision.jsx";
import Contact from "./pages/website/Contact.jsx";
import Courses from "./pages/website/Courses.jsx";
import Development from "./pages/website/Development.jsx";
import NotFound from "./pages/website/NotFound.jsx";

import Staff from "./pages/Staff_pages/Staff.jsx";
import StaffLogin from "./pages/Staff_pages/StaffLogin.jsx";


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView();
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}


function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <div className="site-shell">
        <Menu />

        <main className="site-content">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/development" element={<Development />} />

            <Route
              path="/staff/login"
              element={<StaffLogin />}
            />

            <Route
              path="/staff"
              element={
                sessionStorage.getItem("staffLoggedIn") === "true"
                  ? <Staff />
                  : <Navigate to="/staff/login" replace />
              }
            />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
