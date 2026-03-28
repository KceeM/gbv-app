import './App.css';
import React, { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import SAHotspotMap from "./components/SAHotspotMap";



function App() {
  const [result, setResult] = useState(null);

  const handleSearch = (query) => {
    // For now, fake data — later connect to your API
    const fakeDatabase = [
      { name: "David Mokoena", status: "Convicted - Assault & Rape" },
      { name: "James Nkosi", status: "Pending Case - Under Investigation" },
    ];

    const found = fakeDatabase.find(
      (record) => record.name.toLowerCase() === query.toLowerCase()
    );

    setResult(found || null);
  };

  return (
    <div className="App">
        <h1>GBV Registry App</h1>
        <p>Welcome to a safer future.</p>
        <WelcomeMessage />
        <SearchBar onSearch={handleSearch} />
        <ResultCard record={result} />
        <SAHotspotMap />

    </div>
  );
}

export default App;
