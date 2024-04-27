"use client";
import React, { useState } from "react";
import axios from "axios";

const ShortenForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/shorten/`,
        {
          original_url: url,
        }
      );
      setShortUrl(response.data.short_code);
      setQrCode(response.data.qr_code); // Set the QR code received from the backend
    } catch (err) {
      setError("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadQrCode = () => {
    // Create a temporary anchor element to trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:image/png;base64,${qrCode}`;
    downloadLink.download = "qr_code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          URL Shortener and QR generator
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="url" className="block font-bold mb-2">
              URL
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter URL"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </button>
          </div>
          {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
          {shortUrl && (
            <div className="mt-4">
              <p className="text-green-500 text-sm">
                Shortened URL:{" "}
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {shortUrl}
                </a>
              </p>
              {qrCode && (
                <>
                  <div className="mt-4 flex justify-center items-center">
                    <img
                      src={`data:image/png;base64,${qrCode}`}
                      alt="QR Code"
                      className="mr-2"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleDownloadQrCode}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Download QR Code
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ShortenForm;
