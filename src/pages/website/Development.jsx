import React from "react";
import "./Development.css";
import Footer from "./Footer";


// import images

import Rithy from "../../assets/Rithy.jpg";
import Rasy from "../../assets/Rasy.png";
import Roth from "../../assets/Roth.png";

function DeveloperPage() {
    return (
        <>
        <div className="developer-container">
            {/* Leadership organization chart */}
            <section className="leadership-section" aria-labelledby="leadership-heading">
                <h2 id="leadership-heading">Leadership Structure</h2>
                <div className="organization-chart">
                    <div className="organization-president">
                        <div className="card leadership-card president-card">
                            <span className="leadership-role">President</span>
                            <img src={Rithy} alt="Uth Chanrithy" />
                            <h3>Uth Chanrithy</h3>
                        </div>
                    </div>
                    <div className="organization-vice-presidents">
                        <div className="card leadership-card">
                            <span className="leadership-role">Vice President</span>
                            <img src={Rasy} alt="Rasy" />
                            <h3>Rasy</h3>
                        </div>
                        <div className="card leadership-card">
                            <span className="leadership-role">Vice President</span>
                            <img src={Roth} alt="Roth" />
                            <h3>Roth</h3>
                        </div>
                    </div>
                </div>
            </section>
          <Footer/>
        </div>
      
              </>
    );
}

export default DeveloperPage;
