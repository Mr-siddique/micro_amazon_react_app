import React from "react";
import { Link } from "react-router-dom";

const ProductCards = ({ data }) => {
  return (
    <div
      class="content"
      style={{
        width: "300px",
        height: "500px",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <Link to={`/search/:${data.id}`} style={{ cursor: "pointer" }}>
        <img
          src={data.image ? data.image : data.images[0]}
          alt="image"
          style={{ height: "300px", margin: "auto" }}
        />
        <p
          onMouseEnter={(e) => (e.target.style.color = "#F3A848")}
          onMouseLeave={(e) => (e.target.style.color = "black")}
        >
          {data.title ? data.title : data.name}
        </p>
        {data.rating ? (
          <p>
            <small>Rating: </small>
            <strong>{data?.rating?.rate} </strong>
            <small
              onMouseEnter={(e) => (e.target.style.color = "#F3A848")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              {" "}
              {data?.rating?.count}
            </small>
          </p>
        ):(
          <p>
            <strong>MRP :₹ {data.mrp}</strong>
            <br/>
            <strong>Discount :₹ {data.mrp-data.price}</strong>
          </p>
        )}
        <h3>
          <small>₹</small> {data.price}
        </h3>
      </Link>
    </div>
  );
};
export default ProductCards;
