import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import ProductDashboard from "./components/ProductDashboard";
import FigmaDesign from "./components/FigmaDesign";

function App() {
  return (
    <div className="=w-screen">
      <ProductDashboard />
      {/* <Router>
        <div className="min-h-screen">
          <div className="fixed top-1/2 left-0 p-4 border transform -translate-y-1/2 z-50 flex flex-col gap-3 bg-white">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${isActive ? "bg-blue text-white shadow-md" : "text-blue hover:bg-blue"
                }`
              }
            >
              Task 1
            </NavLink>
            <NavLink
              to="/figma"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${isActive ? "bg-green-500 text-white shadow-md" : "text-green-500 hover:bg-green-100"
                }`
              }
            >
              Task 2
            </NavLink>
          </div>

            <Routes>
              <Route path="/" element={<ProductDashboard />} />
              <Route path="/figma" element={<FigmaDesign />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
