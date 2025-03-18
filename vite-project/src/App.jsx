// vite-project/src/App.jsx
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductDetails from "./components/pages/ProductDetails";
import ComparePage from "./components/pages/ComparePage";
function App() {
  const [comparedProducts, setComparedProducts] = useState([]);

  const handleCompare = (product) => {
    if (!comparedProducts.includes(product) && comparedProducts.length < 4) {
      setComparedProducts([...comparedProducts, product]);
    }
  };

  const handleRemove = (product) => {
    setComparedProducts(comparedProducts.filter((p) => p !== product));
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="ml-64 flex-1">
          <Routes>
            <Route
              path="/"
              element={<ProductDetails onCompare={handleCompare} />}
            />
            <Route
              path="/compare"
              element={
                <ComparePage
                  comparedProducts={comparedProducts}
                  onRemove={handleRemove}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
