import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="spark-wrapper">
        <div className="spark spark1" />
        <div className="spark spark2" />
        <div className="spark spark3" />
      </div>

      <div className="image-frame">
        <div className="color-layer red" />
        <div className="color-layer green" />
        <div className="color-layer blue" />
        <div className="color-layer magenta" />
        <div className="grid-overlay" />
      </div>

      <h2 className="loading-text">Generating your masterpiece...</h2>
    </div>
  );
};

export default LoadingPage;
