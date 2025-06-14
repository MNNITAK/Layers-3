import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./authcontext/contextapi"; // Ensure AuthProvider is imported



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Wrap the App component with AuthProvNOM ider to provide authentication context */}
      <AuthProvider>
        <App/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);





