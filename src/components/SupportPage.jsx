import React from "react";
import "./SupportPage.css";

function SupportPage() {
  return (
    <div className="support-page">
      <h2>Support Companion</h2>
      <p>
        We understand how painful and overwhelming traumatic experiences can be. 
        Trauma doesn’t just affect emotions — it can change how the brain processes 
        memory, fear, and decision-making. Healing is possible, and we’re here to 
        guide you with supportive practices.
      </p>

      {/* Trauma & the Brain */}
      <section className="support-section">
        <h3>Trauma and the Brain</h3>
        <img src="/images/Trauma brain.png" alt="Brain illustration showing trauma effects" />
        <p>
          Trauma can over-activate the amygdala (fear center), disrupt the hippocampus 
          (memory), and suppress the prefrontal cortex (rational thinking). This is why 
          survivors often feel hyper-alert, struggle with memory, or find it hard to 
          make decisions.
        </p>
      </section>

      {/* Guided Exercises */}
      <section className="support-section">
        <h3>Guided Breathing</h3>
        <img src="/images/breathing exercises.png" alt="Breathing exercise illustration" />
        <p>Slow, deep breathing helps calm the nervous system and reduce stress.</p>

        <h3>Meditation & Mindfulness</h3>
        <img src="/images/Meditation benefits .png" alt="Meditation benefits illustration" />
        <p>Meditation improves focus, reduces anxiety, and helps the brain recover from trauma.</p>

        <h3>Healing Journey</h3>
        <img src="/images/Healing journey.png" alt="Healing symbolic art" />
        <p>Healing is a process — every step you take builds resilience and strength.</p>
      </section>

      {/* Reporting Guidelines */}
      <section className="support-section">
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
      </section>
    </div>
  );
}

export default SupportPage;