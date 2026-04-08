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
import DisclaimerBanner from "./components/DisclaimerBanner";

function App() {
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState("map"); // track which section is active
  const [showReportForm, setShowReportForm] = useState(false);

  const handleSearch = (query) => {
    // For now, fake data — later connect to your API
    const fakeDatabase = [
      { name: "David Mokoena", status: "Convicted - Assault & Rape" },
      { name: "James Nkosi", status: "Pending Case - Under Investigation" },
      { name: "Nathi Ngweni", status: "Confirmed - Anonymous Reports (3)" },
    ];

    const found = fakeDatabase.find(
      (record) => record.name.toLowerCase() === query.toLowerCase()
    );

    setResult(found || null);
    setHasSearched(true);
  
  };

  const handleClearSearch = () => {
    setResult(null);
    setHasSearched(false);
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
          <div className="search-container">
            <SearchBar onSearch={handleSearch} onClear={handleClearSearch}/>
      
          </div>
        
          {/* Show result card OR fallback message */}
          {result ? (
            <ResultCard record={result} onClose={() => setResult(null)} />
          ) : hasSearched ? (
            <p className="no-results">No results found</p>
          ) : null}

          <SAHotspotMap />
        </>
      )}

      {currentPage === "news" && <NewsFeed />}

      {currentPage === "reports" && (
        <>
          <h2>Community Reports</h2>
          <DisclaimerBanner />
          <div className="report-actions">
            <button onClick={() => setShowReportForm(true)}>Report an Incident</button>
         </div>

          <ReportInfo />
          
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

