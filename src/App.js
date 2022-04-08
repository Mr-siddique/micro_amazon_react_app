import React, { useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crousel from "./componenets/Carousel/Carousel";
import Header from "./componenets/Header/Header";
import Search from "./componenets/Search/Search";
import SingleProduct from "./componenets/ProductCards/SingleProduct";
import { searchActions } from "./store/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  
  const dispatch=useDispatch();
  const data=useSelector(state=>state.search.data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products`);
        dispatch(searchActions.setData(data));
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Header/>
      <main
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Crousel />} />
          <Route exact path="/search" element={<Search/>} />
          <Route exact path='search/:id' element={<SingleProduct/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
