import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/searchSlice";
import ProductCards from "../ProductCards/ProductCards";

const Search = () => {
  const inputValue = useSelector((state) => state.search.searchInput);
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products`);
        const searchData = data.filter(
          (currData) =>
            currData.title.includes(inputValue) ||
            currData.description.includes(inputValue)
        );
        dispatch(searchActions.setSearchData(searchData));
      } catch (err) {
        console.log(err.message);
      }
    };
    if (!inputValue) return;
    fetchData();
  }, [inputValue]);
  return (
    <div className="contents" style={contentsStyle}>
      {searchData?.map((data) => (
        <ProductCards data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Search;
const contentsStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};
