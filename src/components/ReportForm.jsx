import React, { useState } from "react";
import "./ReportForm.css";

function ReportForm({ onClose }) {
  const [province, setProvince] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const report = { province, incidentType, date, notes };
    console.log("Submitted report:", report);
    // TODO: send to backend (Firebase, Supabase, or your API)
    onClose();
  };

  return (
    <div className="report-modal">
      <div className="report-content">
        <h2>Report an Incident</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Province:
            <select value={province} onChange={(e) => setProvince(e.target.value)} required>
              <option value="">Select province</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Western Cape">Western Cape</option>
              {/* Add all provinces */}
            </select>
          </label>

          <label>
            Incident Type:
            <input type="text" value={incidentType} onChange={(e) => setIncidentType(e.target.value)} required />
          </label>

          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>

          <label>
            Notes (optional):
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>

          <button type="submit">Submit Report</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;