import React, { useState, useEffect } from "react";

const messages = [
  "You are not alone. Healing begins with courage.",
  "Your voice matters. Every step forward is strength.",
  "Together, we can break the cycle of abuse.",
  "Physical scars fade, but your spirit remains unbreakable.",
  "Reporting is not weakness, it’s power."
];

function WelcomeMessage() {
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return <h2>{message}</h2>;
}

export default WelcomeMessage;