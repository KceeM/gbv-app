import React from "react";
import "./ReportCard.css";

function ReportCard({ title, date, description, reportStatus }) {
  return (
    <div className="report-card">
      <h3>{title}</h3>
      <p className="report-date">Reported: {date}</p>
      <p>{description}</p>
      <span className={`tag ${reportStatus.toLowerCase()}`}>{reportStatus}</span>
      <button>View Details</button>
    </div>
  );
}

export default ReportCard;