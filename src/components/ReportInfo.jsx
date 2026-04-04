import React from "react";
import "./ReportInfo.css";

function ReportInfo() {
  return (
    <div className="report-page">
        <section className="report-info">
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

          {/* Demo Section */}
          <div className="demo-section">
              <h3>How Reports Will Be Displayed</h3>
              <p>
                 Each report will show the name of the person, the incident type, and a 
                 <strong> validation status tag</strong> such as:
              </p>
              <ul>
                  <li><span className="tag confirmed">Confirmed</span> – validated through official channels</li>
                  <li><span className="tag pending">Pending</span> – awaiting review</li>
                  <li><span className="tag flagged">Flagged</span> – under dispute or investigation</li>
              </ul>

              <p>
                 This demonstration shows how reports will appear once the system is live. 
                 Tags make it clear whether a report is verified, pending, or flagged.
              </p>

               <h3>Anonymous Report Examples</h3>
               <div className="demo-grid">
                  <img src="/images/Flagged anonymous re1.png" alt="Flagged anonymous report demo" />
            </div>
              <p>
                 These examples show how anonymous reports appear in the system. 
                 <strong>Confirmed</strong> reports are verified, 
                 <strong>Pending</strong> reports are under review, and 
                 <strong>Flagged</strong> reports require further investigation.
              </p>
           </div>
      

        </section>
    </div>
  );
}

export default ReportInfo;