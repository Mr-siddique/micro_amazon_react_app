import React ,{useState}from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [src,setSrc]=useState('');
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
      {
        singleProduct.image?(
          <img src={singleProduct.image} style={{ width: "60%",height:'100vh' }} />):(
            <div style={{display:'flex',flexDirection:'column'}}>
              <img src={!src?singleProduct.images[0]:src} style={{ width: "60%",minHeight:'auto' }}/>
              <div style={{width:'100%',display:'flex', justifyContent:'space-evenly'}}>
                {
                  singleProduct.images.map(singleImage=><img src={singleImage} style={{width:'120px',height:'120px',cursor:'pointer'}} onClick={(e)=>setSrc(singleImage)}/>)
                }
              </div>
            </div>
          )
      }
      <div className="description" style={{ width: "30%" }}>
        <h2>
          <strong>{singleProduct?.title}</strong>
        </h2>
        {
          singleProduct.rating?(
        <p style={{ marginTop: "1rem", marginBottom: ".5rem" }}>
          <small>
            {singleProduct?.rating.rate}
            <span>{singleProduct?.rating.count} ratings</span>
          </small>
        </p>
          ):(
            <p>
            <strong>MRP :₹ {singleProduct.mrp}</strong>
            <br/>
            <strong>Discount :₹ {singleProduct.mrp-singleProduct.price}</strong>
          </p>
          )
        }
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
