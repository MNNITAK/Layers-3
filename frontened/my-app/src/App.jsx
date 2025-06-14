import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "./authcontext/contextapi";
import Homepage from "./components/componentcss/Homepage.jsx";
import LoadingPage from "./components/componentcss/Loadingpage.jsx";
import ImageResultPage from "./components/componentcss/ImageResultPage.jsx";  






function App() {

  return (
        <Routes>
           <Route path="/" element={<Homepage/>} />
           <Route path="/image" element={<ImageResultPage/>} />
           <Route path="/load" element={<LoadingPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
  );
}


export default App;
