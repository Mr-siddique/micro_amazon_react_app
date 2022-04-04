import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { searchActions } from "../../store/searchSlice";
const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currData = useSelector((state) => state.search.data);

  const Catogery = currData.reduce((acc, curr) => {
    if (acc.find((elem) => elem === curr.category)) return acc;
    return [...acc, curr.category];
  }, []);

  const handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    setInputValue("");
    navigate("/search");
    dispatch(searchActions.setSearchInput(inputValue));
  };

  const handleChange = (e) => {
    dispatch(
      searchActions.setSearchData(
        e.target.value === "All"
          ? currData
          : currData.filter((data) => data.category === e.target.value)
      )
    );
    navigate("/search");
  };
  return (
    <div
      className="search_bar"
      style={{
        width: "60%",
        height: "45px",
        borderRadius: "5px",
      }}
    >
      <select
        style={{
          width: "5%",
          height: "100%",
          backgroundColor: "#F3F3F3",
          color: "black",
          cursor: "ponter",
        }}
        onChange={handleChange}
      >
        <option>All</option>
        {Catogery?.map((elem) => (
          <option key={elem.id}>{elem}</option>
        ))}
      </select>
      <input
        type="search"
        style={{ width: "90%", height: "100%", color: "black", padding: "5px" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
        required
      />
      <Link to="/search">
        <button
          type="submit"
          style={{
            width: "5%",
            height: "100%",
            backgroundColor: "#FDBD69",
            color: "black",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#F3A848")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#FDBD69")}
          onClick={() => {
            setInputValue("");
            dispatch(searchActions.setSearchInput(inputValue));
            return;
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </Link>
    </div>
  );
};

export default SearchInput;
