import React from "react";
import "./SAHotspotMap.css"; // we'll add styles next
import { ReactComponent as SouthAfricaMap } from "./SouthAfricaMapProvinces.svg";


// Dummy hotspot data (replace later with real data)
const hotspots = [
  { province: "Gauteng", x: 250, y: 300, cases: 120 },
  { province: "KwaZulu-Natal", x: 400, y: 400, cases: 95 },
  { province: "Eastern Cape", x: 350, y: 500, cases: 80 },
  { province: "Western Cape", x: 150, y: 550, cases: 110 }
];

function SAHotspotMap() {
  return (
    <div className="map-container">
      {/* Placeholder map image - replace with SVG or Leaflet later */}
      <SouthAfricaMap className="map-svg" 
        onClick={(e) => {
          const province = e.target.id;
          alert(`Data for ${province} will be available once government records are integrated.`);
       }}

      />

      
      {hotspots.map((spot, index) => (
        <div
          key={index}
          className="hotspot"
          style={{ left: spot.x, top: spot.y }}
          onClick={() => alert(`Data for ${spot.city} will be available soon.`)}
        ></div>
      ))}
    </div>
  );
}

export default SAHotspotMap;