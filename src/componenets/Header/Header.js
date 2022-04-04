import React from "react";
import { useNavigate } from "react-router-dom";
import Catogery from "../CategoryBar/Catogery";
import SearchInput from "./SearchInput";
const Header = ({setSearchInput}) => {
  const navigate=useNavigate();
  return (
    <>
    <header className="header" style={headerStyle}>
      <img
        className="amazon_logo"
        alt="amazon"
        src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
        style={imgStyle}
        onClick={()=>navigate('/')}

      />
      <div className="addressSelector" style={addressSelector}>
        <i className="fa-solid fa-location-dot"></i>
        <p style={{ fontSize: "15px",marginLeft:'5px', }}>
          Hello
          <br />
          <strong>Select your address</strong>
        </p>
      </div>
      <SearchInput setSearchInput={setSearchInput}/>
      <div
        className="authenticate"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <button
          className="signIn"
          style={{
            backgroundColor: "#FDBD69",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#F3A848")}
          onMouseLeave={(e) => (e.target.backgroundColor = "#FDBD69")}
        >
          Sign in
        </button>
        <small>
          New customer? <a href="#">start here</a>
        </small>
      </div>
      <a
        href="#"
        style={{ fontSize: "15px", lineHeight: "1rem", cursor: "pointer" }}
      >
        <small>Returns</small>
        <br />
        <strong>& orders</strong>
      </a>
      <div className="cart">
      <i className="fa-solid fa-cart-arrow-down"></i>
      <strong>cart</strong>
      </div>
    </header>
    <Catogery/>
    </>
  );
};

export default Header;

const imgStyle = {
  width: "150px",
  height: "70%",
  objectFit:'contain',
  cursor:'pointer',
};
const headerStyle = {
  width: "100vw",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#131921",
  color: "#fff",
};

const addressSelector = {
  display: "flex",
  alignItems: "center",
  lineHeight: "1rem",
  cursor: "pointer",
};
