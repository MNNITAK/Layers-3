import { createContext, useCallback, useContext, useState } from "react";
import { baseUrl,PostRequest,getRequest } from "../utils/services"; // Import baseUrl
// import PostRequest from "../utils/services"; // Import PostRequest
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
const AuthContext = createContext();






export const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
   const[prompt,setPrompt]=useState("");
   console.log("prompt",prompt)
   const[url,setUrl]=useState(null);
   console.log("url",url);




const Getimage = useCallback(async (e) => {
    e.preventDefault();
    navigate('/load');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Hold for 2 seconds
  try {
    const response = await fetch(`${baseUrl}/image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (response.ok && data.imageUrl) {
      setUrl(data.imageUrl);
      console.log("response", data);
    } else {
      setUrl(null);
      console.error("No imageUrl found in response:", data);
    }
  } catch (error) {
    setUrl(null);
    console.error("Error fetching image:", error);
  }
  navigate('/image')
}, [prompt]);


  return (
    <AuthContext.Provider
      value={{
        prompt,
        url,
        Getimage,
        setPrompt
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

    
export const useAuth = () => {
  return useContext(AuthContext);
};