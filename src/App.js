import './App.css';
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import WelcomeMessage from "./components/WelcomeMessage";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import SAHotspotMap from "./components/SAHotspotMap";
import NewsFeed from "./components/NewsFeed";
import ReportForm from "./components/ReportForm";
import SupportCompanion from "./components/SupportCompanion";
import SupportPage from "./components/SupportPage";
import ReportInfo from "./components/ReportInfo";

function App() {
  const [result, setResult] = useState(null);
  const [currentPage, setCurrentPage] = useState("map"); // track which section is active
  const [showReportForm, setShowReportForm] = useState(false);

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
      {/* Navigation bar at the top */}
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Conditional rendering based on currentPage */}
      {currentPage === "map" && (
        <>
          <h1>GBV Registry App</h1>
          <p>Welcome to a safer future.</p>
          <WelcomeMessage />
          <SearchBar onSearch={handleSearch} />
          <ResultCard record={result} />
          <SAHotspotMap />
        </>
      )}

      {currentPage === "news" && <NewsFeed />}

      {currentPage === "reports" && (
        <>
          <h2>Community Reports</h2>
          <ReportInfo />
          <button onClick={() => setShowReportForm(true)}>Report an Incident</button>
          {showReportForm && <ReportForm onClose={() => setShowReportForm(false)} />}
        </>
      )}

      {currentPage === "support" && <SupportPage />}


      {/* SupportCompanion floats in the corner on ALL pages */}
      <SupportCompanion />
    </div>
  );
}

export default App;

