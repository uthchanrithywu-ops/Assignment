import React from "react";
import "./Development.css";
import Footer from "./Footer";


// import images
import Rasy from "../assets/Rasy.png";
import Roth from "../assets/Roth.png";
import Thanun from "../assets/Thanun.png";
import Rithy from "../assets/Rithy.jpg";
import Fary from "../assets/Fary.png";
import Teacher from "../assets/Teacher.png";

function DeveloperPage() {
    return (
        <>
      
        <div className="developer-container">

            {/* Teacher Section */}
            <div className="teacher-section">
                <h2>Teacher</h2>

                <div className="card teacher-card">
                    <img src={Teacher} alt="Teacher" />
                    <h3>Mr. Pen Sokny</h3>
                    <p>Senior Modern Frontend Web Instructor</p>
                </div>
            </div>

            {/* Students Section */}
            <div className="students-section">
                <h2>Students</h2>

                <div className="students-grid">

                    <div className="card">
                        <img src={Rasy} alt="Vanda Rasy" />
                        <h3>Vanda Rasy</h3>
                    </div>

                    <div className="card">
                        <img src={Roth} alt="Suy Panhatiroth" />
                        <h3>Suy Panhatiroth</h3>
                    </div>

                    <div className="card">
                        <img src={Thanun} alt="Oem Thanun" />
                        <h3>Oem Thanun</h3>
                    </div>

                    <div className="card">
                        <img src={Rithy} alt="Uth Chanrithy" />
                        <h3>Uth Chanrithy</h3>
                    </div>

                    <div className="card">
                        <img src={Fary} alt="Seth Fary" />
                        <h3>Seth Fary</h3>
                    </div>

                </div>
            </div>
          <Footer/>
        </div>
      
              </>
    );
}

export default DeveloperPage;