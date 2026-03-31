import React, { useState } from "react";
import "./SAHotspotMap.css"; // we'll add styles next
import { ReactComponent as SouthAfricaMap } from "./SouthAfricaMapProvinces.svg";

const provinceSeverity = {
  "ZA-GT": "high",
  "ZA-KZN": "high",
  "ZA-WC": "medium",
  "ZA-EC": "medium",
  "ZA-NC": "low",
  "ZA-FS": "low",
  "ZA-LP": "low",
  "ZA-MP": "low",
  "ZA-NW": "low"
};

const severityMessages = {
  high: "High prevalence zone",
  medium: "Moderate prevalence zone",
  low: "Lower prevalence zone"
};


function SAHotspotMap() {

  const [hoverProvince, setHoverProvince] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleMouseEnter = (e) => {
    const province = e.target.id;
    if (province) setHoverProvince(province);
  };

  const handleMouseLeave = () => setHoverProvince(null);

  const handleClick = (e) => {
    const province = e.target.id;
    if (province) setSelectedProvince(province);
  };


  return (
    <div className="map-container">
      <SouthAfricaMap
        className="map-svg"
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
        onClick={handleClick}
      />

      {/* Hover tooltip */}
      {hoverProvince && (
        <div className="tooltip">
          Data for {hoverProvince} will be available once government records are integrated.
          {hoverProvince} — {severityMessages[provinceSeverity[hoverProvince]]}
        </div>
      )}

      {/* Click popup */}
      {selectedProvince && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedProvince}</h3>
            <p>Data for {selectedProvince} will be available once government records are integrated.</p>
            <p>{severityMessages[provinceSeverity[selectedProvince]]}</p>
            <button onClick={() => setSelectedProvince(null)}>Close</button>
          </div>
        </div>
      )}

      
  
    </div>
  );
}

export default SAHotspotMap;