"use client";

import { useState, useEffect } from "react";

import AboutAndCallToAction from "../components/AboutAndCallToAction";
import Product from "../components/Product";
export default function Home() {
  const [productIds, setProductIds] = useState([]);

  useEffect(() => {
    // load in the product Ids:
    async function fetchProductIdsFromBackend() {
      // send fetch request:
      const res = await fetch("/db/ids");
      const resJSON = await res.json();

      setProductIds(resJSON.ids);
    }

    fetchProductIdsFromBackend();
  }, []);

  return (
    <div className="container h-100vh">
      <AboutAndCallToAction />

      <div className="product-container">
        {productIds.map((id) => (
          <Product key={id} productId={id} />
        ))}
      </div>
    </div>
  );
}
