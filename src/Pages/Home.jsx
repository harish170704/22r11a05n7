import React, { useState } from "react";
import "../index.css";

export default function Home() {
  const [fullUrl, setFullUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [validityMinutes, setValidityMinutes] = useState(30);
  const [shortenedLink, setShortenedLink] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const generateRandomAlias = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setShortenedLink(null);

    if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
      setErrorMessage("Please enter a URL starting with http:// or https://");
      return;
    }

    const alias = customAlias.trim() || generateRandomAlias();
    const fakeShortUrl = `${window.location.origin}/${alias}`;
    setShortenedLink(fakeShortUrl);
  };

  return (
    <div className="container">
      <h1>Simple URL Shortener</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Paste your full URL here"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Custom short name (optional)"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
        />
        <input
          type="number"
          placeholder="Link valid for (minutes)"
          value={validityMinutes}
          onChange={(e) => setValidityMinutes(e.target.value)}
        />
        <button type="submit">Generate Short Link</button>
      </form>

      {shortenedLink && (
        <p className="short-url">
          Your short link:{" "}
          <a href={fullUrl} target="_blank" rel="noopener noreferrer">
            {shortenedLink}
          </a>
        </p>
      )}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}
