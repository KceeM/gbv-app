import React from "react";

function ResultCard({ record }) {
  if (!record) {
    return (
      <div className="result-card">
        <p>No GBV-related records found for this name.</p>
      </div>
    );
  }

  return (
    <div className="result-card">
      <h3>{record.name}</h3>
      <p>Status: {record.status}</p>
    </div>
  );
}

export default ResultCard;