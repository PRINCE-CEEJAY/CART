import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CartProvider from "../provider/CartProvider.tsx";
import App from "./App.tsx";

import Sidebar from "./components/Sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex min-w-screen">
      <CartProvider>
        <Sidebar />
        <App />
      </CartProvider>
    </div>
  </StrictMode>
);
