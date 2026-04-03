import React from "react";
import { ToastContainer } from "react-toastify";
import MainLayout from "./components/templates/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <MainLayout>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <ToastContainer />
      <HomePage />
    </MainLayout>
  );
};

export default App;
