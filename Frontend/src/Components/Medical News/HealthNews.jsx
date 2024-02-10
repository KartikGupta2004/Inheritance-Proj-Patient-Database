import React, { useEffect, useState } from "react";

const HealthNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?" +
            "country=in&" +
            "category=health&" +
            "apiKey=cd147b5e8e1f453d9055367c17437d34"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        let filteredArticles = data.articles.filter(
          (article) =>
            article.source.name !== "YouTube" &&
            article.urlToImage !== null &&
            article.description !== ""
        );

        filteredArticles = filteredArticles.slice(0, 9); // Limit to first 9 articles

        setArticles(filteredArticles);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <div
              id={`image${index}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${encodeURI(
                  article.urlToImage
                )})`,
              }}
            ></div>
            <h2 id={`title${index}`}>{article.title}</h2>
            <p id={`desc${index}`}>{article.description}</p>
            <a id={`link${index}`} href={article.url}>
              Read more
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default HealthNews;
