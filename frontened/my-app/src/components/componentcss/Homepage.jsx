import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../authcontext/contextapi"; // Make sure to import useAuth




const generateStars = (count = 100) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${1 + Math.random() * 2}s`,
      opacity: Math.random(),
    };
    stars.push(<div key={i} className="star" style={style} />);
  }
  return stars;
};





const Homepage = () => {
      const { prompt,url,setPrompt,Getimage } = useAuth();

return (
    <div className="homepage-container ai-theme">
        <div className="stars">{generateStars(100)}</div>
        <div className="hero-section">
            <div className="ai-glow"></div>
            
            <h1 className="hero-text">
                Explore the <span>Power</span> of AI<br /> with One Prompt.
            </h1>
            <p className="tagline">Create. Imagine. Innovate. In Seconds.</p>
            <div className="prompt-box">
                <span>💡</span>
                <input
                    placeholder="Generate a futuristic cityscape..."
                    id="prompt"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                    className="inputField"
                />
                
                    <button
                        className="generate-btn"
                        type="button"
                        onClick={Getimage}
                    >
                        Generate →
                    </button>
               
            </div>
        </div>
    </div>
);
};

export default Homepage;
