import React, { useState } from "react";
import "./SupportCompanion.css";

function SupportCompanion() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "companion", text: "Hi, I’m here to support you. How are you feeling today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Simple scripted response for now
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "companion", text: "Thank you for sharing. Remember, you’re not alone. Would you like a grounding exercise or some resources?" }
      ]);
    }, 1000);
  };

  return (
    <div className="support-companion">
      {!open && (
        <button className="companion-toggle" onClick={() => setOpen(true)}>
          💜 Support
        </button>
      )}
      {open && (
        <div className="companion-window">
          <div className="companion-header">
            <h3>Support Companion</h3>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="companion-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="companion-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SupportCompanion;