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

      
    </div>
  );
}

export default SupportPage;