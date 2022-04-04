import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  let { id } = useParams();
  id = id.replace(":", "");
  const allProducts = useSelector((state) => state.search.data);
  const singleProduct = allProducts.find((product) => product.id == id);
  return (
    <div
      className="singleProduct"
      style={{
        marginTop: "5%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src={singleProduct?.image} style={{ width: "60%",height:'100vh' }} />
      <div className="description" style={{ width: "30%" }}>
        <h2>
          <strong>{singleProduct?.title}</strong>
        </h2>
        <p style={{ marginTop: "1rem", marginBottom: ".5rem" }}>
          <small>
            {singleProduct?.rating.rate}{" "}
            <span>{singleProduct?.rating.count} ratings</span>
          </small>
        </p>
        <p style={{ marginBottom: ".5rem" }}>
          <small>Price: </small>
          <strong style={{ color: "red" }}>₹ {singleProduct?.price}</strong>
        </p>
        <h2 style={{ marginBottom: ".3rem" }}>
          <strong>About this item</strong>
        </h2>
        <p>{singleProduct?.description}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#FFD949",
              marginBottom: ".5rem",
              height: "40px",
              borderRadius: "20px",
            }}
          >
            Add to Cart
          </button>
          <button
            style={{
              backgroundColor: "#FBA64B",
              height: "40px",
              borderRadius: "20px",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
