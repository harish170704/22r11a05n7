import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const mockData = {
  abc123: "https://www.google.com",
  xyz456: "https://www.github.com",
};

export default function RedirectPage() {
  const { shortcode } = useParams();

  useEffect(() => {
    const url = mockData[shortcode];
    if (url) {
      window.location.href = url;
    } else {
      alert("Invalid or expired link");
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
}
