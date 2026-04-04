import React from "react";
import "./ResultCard.css";

function ResultCard({ record, onClose }) {
  if (!record) return null;

  // Determine tag color based on status
  const statusText = record.status.toLowerCase();
  let tagClass = "tag-default";

  if (statusText.includes("convicted")) tagClass = "tag-convicted";
  else if (statusText.includes("pending")) tagClass = "tag-pending";
  else if (statusText.includes("dropped")) tagClass = "tag-dropped";
  else if (statusText.includes("confirmed")) tagClass = "tag-confirmed";
  else if (statusText.includes("flagged")) tagClass = "tag-flagged";

  return (
    <div className="result-card">
      <button className="close-btn" onClick={onClose}>✖</button>
      <div className="result-header">
        <div className="icon-placeholder">👤</div>
        <div>
          <h3>{record.name}</h3>
          <p className="status-line">
            Status: <span className={`tag ${tagClass}`}>{record.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
}


export default ResultCard;