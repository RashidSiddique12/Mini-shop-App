import React, { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

//   console.log(products);
//   console.log("ppp")
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        //   width: "80vh",
          margin: "auto",
        }}
      >
        {
            products && products.map((product)=>(
                <ProductTile key={product.key} product={product}/>
            ))
        }
      </div>
    </div>
  );
}

export default Home;
