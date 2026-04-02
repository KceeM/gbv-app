import React from "react";
import "./ReportInfo.css";

function ReportInfo() {
  return (
    <div className="report-info">
      <h3>Reporting Guidelines</h3>
      <p>
        We encourage you to report GBV-related crimes legally by filing a case at your 
        nearest police station. Legal reports are the most effective way to ensure justice.
      </p>
      <p>
        Anonymous reports on our system are meant as <strong>warnings</strong> — they help 
        flag potential dangers but are not legally validated. These reports will be displayed 
        with a disclaimer that they are unconfirmed.
      </p>
      <p>
        To protect reputations, false accusations will be rejected. Reports go through a 
        validation process before being confirmed, which may include virtual calls or 
        providing personal details (such as ID numbers). While reports remain anonymous 
        on our system, validation ensures accuracy and fairness.
      </p>
      <p>
        This process will also create future jobs — dedicated staff will review, validate, 
        and manage reports responsibly.
      </p>
    </div>
  );
}

export default ReportInfo;