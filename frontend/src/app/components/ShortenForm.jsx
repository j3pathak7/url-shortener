"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

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
      setQrCode(response.data.qr_code);
    } catch (err) {
      setError("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadQrCode = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:image/png;base64,${qrCode}`;
    downloadLink.download = "qr_code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // reset copy status after 1.5 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
          URL Shortener & QR Code Generator
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Shorten URLs and Create QR Codes Instantly
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
          Simplify sharing and accessing content with our powerful URL
          shortening and QR code generation tool.
        </p>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 mb-4"
              placeholder="Enter URL to shorten"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </button>
            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          </form>
          {shortUrl && (
            <div className="mt-8">
              <p className="text-green-500 text-lg mb-4">
                Shortened URL:{" "}
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline break-all"
                >
                  {shortUrl}
                </a>
                <CopyToClipboard text={shortUrl} onCopy={handleCopy}>
                  <FaCopy
                    className={`inline-block cursor-pointer ml-2 ${
                      copied ? "text-green-500" : "text-gray-400"
                    }`}
                  />
                </CopyToClipboard>
              </p>
              {qrCode && (
                <div className="flex flex-col items-center">
                  <img
                    src={`data:image/png;base64,${qrCode}`}
                    alt="QR Code"
                    className="mb-4"
                    width={200}
                  />
                  <button
                    onClick={handleDownloadQrCode}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-4"
                  >
                    Download QR Code
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
