import React, { useState } from "react";
import "./SupportPage.css";

function SupportPage() {

  const [showLegal, setShowLegal] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false); 
  const [showExercises, setShowExercises] = useState(false);


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
        <h3>Guided Exercises</h3>
        <p>Explore breathing, mindfulness, and healing practices to support recovery.</p>

        {showExercises && (
         <div className="exercise-block">
            <h4>Guided Breathing</h4>
            <img src="/images/breathing exercises.png" alt="Breathing exercise illustration" />
            <p>Slow, deep breathing helps calm the nervous system and reduce stress.</p>

            <h4>Meditation & Mindfulness</h4>
            <img src="/images/Meditation benefits .png" alt="Meditation benefits illustration" />
            <p>Meditation improves focus, reduces anxiety, and helps the brain recover from trauma.</p>

            <h4>Healing Journey</h4>
            <img src="/images/Healing journey.png" alt="Healing symbolic art" />
            <p>Healing is a process — every step you take builds resilience and strength.</p>
         </div>
        )}

        <button onClick={() => setShowExercises(!showExercises)}>
          {showExercises ? "Collapse" : "Learn More"}
        </button>
      </section>

      {/* New Section: Legal Resources */}
      <section className="support-section">
        <h3>Legal Resources & Helplines</h3>
        <p>Find official channels for reporting GBV and legal aid.</p>
        {showLegal && (
          <ul>
            <li>Police emergency: 10111</li>
            <li>Legal Aid South Africa</li>
            <li>GBV Command Centre: 0800 428 428</li>
          </ul>
        )}
        <button onClick={() => setShowLegal(!showLegal)}>
          {showLegal ? "Collapse" : "Show Resources"}
        </button>
      </section>

      {/* New Section: Community Support */}
      <section className="support-section">
        <h3>Community Support & Counseling</h3>
        <p>Access survivor support groups and counseling services.</p>
        {showCommunity && (
          <ul>
            <li>Rape Crisis Cape Town Trust</li>
            <li>LifeLine South Africa</li>
            <li>Local community GBV forums</li>
          </ul>
        )}
        <button onClick={() => setShowCommunity(!showCommunity)}>
          {showCommunity ? "Collapse" : "Learn More"}
        </button>
      </section>

    </div>
  );
}

export default SupportPage;