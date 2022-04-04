import React from "react";

const Catogery = () => {
  const handleMouseOver = (e) => {
    const tagName = e.target.tagName;
    if (tagName !== "LI") return;
    e.target.style.border = "1px solid Gray";
  };
  return (
    <section
      className="catogery"
      style={{
        backgroundColor: "#232F3E",
        fontSize: "15px",
        color: "#fff",
        height: "40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ul
        style={ulStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={(e) => (e.target.style.border = "none")}
      >
        <li>
          <a href="#">Best Seller</a>
        </li>
        <li>
          <a href="#">Mobiles</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">Clearence Store</a>
        </li>
        <li>
          <a href="#">Today's Deals</a>
        </li>
        <li>
          <a href="#">Fashion</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
        <li>
          <a href="#">Prime</a>
        </li>
        <li>
          <a href="#">New Releases</a>
        </li>
        <li>
          <a href="#">Home & kitchen</a>
        </li>
        <li>
          <a href="#">Amazon Pay</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">Computers</a>
        </li>
        <li>
          <a href="#">Toy & Games</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
        <li>
          <a href="#">Gift Card</a>
        </li>
        <li>
          <a href="#">Grocery & Gourment Foods</a>
        </li>
      </ul>
    </section>
  );
};

export default Catogery;

const ulStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
};
