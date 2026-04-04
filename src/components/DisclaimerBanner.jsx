import React from "react";
import "./DisclaimerBanner.css";

function DisclaimerBanner() {
  return (
    <div className="disclaimer-banner">
      <p>
        ⚠️ <strong>Disclaimer:</strong> Anonymous reports are community warnings only. 
        They are <strong>not legally verified</strong> and should not be treated as official evidence. 
        All reports undergo review before being displayed publicly.
      </p>
    </div>
  );
}

export default DisclaimerBanner;