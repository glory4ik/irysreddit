import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="App min-h-screen bg-white">
      <BrowserRouter>
        <Header 
          isWalletConnected={isWalletConnected}
          setIsWalletConnected={setIsWalletConnected}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;