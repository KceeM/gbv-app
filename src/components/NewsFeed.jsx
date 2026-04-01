import React, { useEffect, useState } from "react";
import "./NewsFeed.css";

function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://newsdata.io/api/1/news?country=za&q=gender-based violence&apikey=pub_d0008eb0305741cd93deb814067f875e`)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setArticles(data.results);
        } else {
          setError("No articles found");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch news");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="news-feed">
      <h2>South African GBV News</h2>
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          {article.image_url && (
            <img src={article.image_url} alt={article.title} className="news-image" />
          )}
          <div className="news-text">
            <h3>{article.title}</h3>
            {article.description && <p>{article.description}</p>}
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      ))}

    </div>
  );
}

export default NewsFeed;