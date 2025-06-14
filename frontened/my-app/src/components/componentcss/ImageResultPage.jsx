import React, { useState } from "react";
import "./ImageResultPage.css";
import { useAuth } from "../../authcontext/contextapi"; // Make sure to import useAuth




const ImageResultPage = ({ imageUrl }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const{url}=useAuth();

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };




// ...existing code...
const downloadImage = () => {
  const img = new Image();
  img.src = url;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const jpegUrl = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = jpegUrl;
    link.download = "AI_Image.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
};

// ...existing code...



  return (
    <div className={`cosmic-container ${isFullscreen ? "fullscreen-mode" : ""}`}>
      <div className="glow-orb" onClick={toggleFullscreen}>
        <img src={url} alt="" />
      </div>

      {!isFullscreen && (
        <div className="action-icons">
          <span title="View Fullscreen" onClick={toggleFullscreen}>&#x26F6;</span>
          <span title="Download" onClick={downloadImage}>⬇</span>
        </div>
      )}

      <div className="caption">Unveiled by Imagination</div>
    </div>
  );
};

export default ImageResultPage;
