import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/searchSlice";
import ProductCards from "../ProductCards/ProductCards";

const Search = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.search.searchInput);

  const searchData = useSelector((state) => state.search.searchData);

  const data = useSelector((state) => state.search.data);

  const filterObj = useSelector((state) => state.search.filter);

  const requiredBrands = useSelector((state) => state.search.requiredBrands);

  const requiredPrice = useSelector((state) => state.search.requiredPrice);

  const requiredCatogeries = useSelector(
    (state) => state.search.requiredCatogeries
  );

  const requiredDiscount = useSelector(
    (state) => state.search.requiredDiscount
  );

  const requiredOs = useSelector((state) => state.search.requiredOs);

  const requiredNetwork = useSelector((state) => state.search.requiredNetwork);

  const requiredRam = useSelector((state) => state.search.requiredRam);

  const requiredStorage = useSelector((state) => state.search.requiredStorage);

  const requiredPopularity = useSelector(
    (state) => state.search.requiredPopularity
  );

  const fetchData = () => {
    let requiredData = data?.filter((currData) => {
      return (
        lcs(currData?.category, inputValue) > 3 ||
        lcs(currData?.name, inputValue) > 3 ||
        lcs(currData?.title, inputValue) > 3 ||
        lcs(currData?.description, inputValue) === inputValue.length
      );
    });

    if (requiredBrands.length) {
      requiredData = requiredData.filter((data) =>
        requiredBrands.includes(data.brand)
      );
    }

    if (requiredCatogeries.length) {
      requiredData = requiredData.filter((data) =>
        requiredCatogeries.includes(data.category)
      );
    }
    if (requiredPrice !== 0) {
      requiredData = requiredData.filter((data) => data.price <= requiredPrice);
    }
    if (requiredDiscount !== 0) {
      requiredData = requiredData.filter(
        (data) => data.mrp - data.price >= requiredDiscount
      );
    }

    if (requiredOs.length) {
      requiredData = requiredData.filter((data) =>
        requiredOs.includes(data.os)
      );
    }

    if (requiredNetwork.length) {
      requiredData = requiredData.filter((data) =>
        requiredNetwork.includes(data.network)
      );
    }

    if (requiredRam.length) {
      requiredData = requiredData.filter((data) => {
        for (let index = 0; index < data.ram?.length; index++) {
          if (requiredRam.includes(data.ram[index])) return true;
        }
        return false;
      });
    }

    if (requiredStorage.length) {
      requiredData = requiredData.filter((data) => {
        for (let index = 0; index < data.storage?.length; index++) {
          if (requiredStorage.includes(data.storage[index])) return true;
        }
        return false;
      });
    }

    if (requiredPopularity.length) {
      requiredData = requiredData.filter((data) =>
        requiredPopularity.includes(data.rating?.rate)
      );
    }

    dispatch(searchActions.setSearchData(requiredData));

    const filter = data.reduce(
      (acc, curr) => {
        if (
          acc.category.find((category) => category === curr.category) ===
          undefined
        ) {
          acc?.category.push(curr.category);
        }
        if (
          curr.brand &&
          acc.brand.find((brand) => brand === curr.brand) === undefined
        ) {
          acc.brand.push(curr.brand);
        }
        if (
          curr.model &&
          acc.model.find((model) => model === curr.model) === undefined
        ) {
          acc.model.push(curr.model);
        }
        if (curr.ram) {
          let s = new Set();
          curr.ram.forEach((r) => s.add(r));
          acc.ram.forEach((r) => s.add(r));
          acc.ram = Array.from(s);
        }
        if (curr.storage) {
          let s = new Set();
          curr.storage.forEach((r) => s.add(r));
          acc.storage.forEach((r) => s.add(r));
          acc.storage = Array.from(s);
        }
        if (
          curr.rating &&
          curr.rating.rate &&
          acc.rating.find((rate) => rate === curr.rating.rate) === undefined
        ) {
          acc.rating.push(curr.rating.rate);
        }
        if (curr.os && acc.os.find((o) => o === curr.os) === undefined)
          acc.os.push(curr.os);
        return acc;
      },
      {
        category: [],
        brand: [],
        model: [],
        price: [500, 1000, 2000, 5000, 10000, 20000, 40000],
        discount: [500, 1000, 2000, 3000, 4000, 5000],
        os: [],
        network: ["3G", "4G", "5G"],
        ram: [],
        storage: [],
        rating: [],
      }
    );
    dispatch(searchActions.setFilter(filter));
  };

  const filterBrand = (e) => {
    const keyWord = e.target.innerText;
    if (requiredBrands.includes(keyWord)) {
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
      dispatch(searchActions.removeBrand(keyWord));
    } else {
      e.target.style.backgroundColor = " #b3ffe0";
      e.target.style.color = "black";
      dispatch(searchActions.addBrand(keyWord));
    }
  };

  const filterCategory = (e) => {
    const keyWord = e.target.innerText;
    if (requiredCatogeries.includes(keyWord)) {
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
      dispatch(searchActions.removeCatogeries(keyWord));
    } else {
      e.target.style.backgroundColor = " #b3ffe0";
      e.target.style.color = "black";
      dispatch(searchActions.addCatogeries(keyWord));
    }
  };
  const filterPrice = (e) => {
    const keyWord = e.target.innerText;
    if (requiredPrice === keyWord) {
      dispatch(searchActions.addPrice(0));
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
    } else {
      dispatch(searchActions.addPrice(keyWord));
      e.target.style.backgroundColor = "#b3ffe0";
      e.target.style.color = "black";
    }
  };

  const filterDiscount = (e) => {
    const keyWord = e.target.innerText;
    if (requiredDiscount === keyWord) {
      dispatch(searchActions.addDiscount(0));
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
    } else {
      dispatch(searchActions.addDiscount(keyWord));
      e.target.style.backgroundColor = "#b3ffe0";
      e.target.style.color = "black";
    }
  };

  const filterOs = (e) => {
    const keyWord = e.target.innerText;
    if (requiredOs.includes(keyWord)) {
      dispatch(searchActions.removeOs(keyWord));
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
    } else {
      dispatch(searchActions.addOs(keyWord));
      e.target.style.backgroundColor = "#b3ffe0";
      e.target.style.color = "black";
    }
  };

  const filterNetwork = (e) => {
    const keyWord = e.target.innerText;
    if (requiredNetwork.includes(keyWord)) {
      dispatch(searchActions.removeNetwork(keyWord));
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
    } else {
      dispatch(searchActions.addNetwork(keyWord));
      e.target.style.backgroundColor = "#b3ffe0";
      e.target.style.color = "black";
    }
  };

  const filterRam = (e) => {
    const keyWord = parseInt(e.target.innerText.replace(" GB", ""));
    if (requiredRam.includes(keyWord)) {
      dispatch(searchActions.removeRam(keyWord));
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
    } else {
      dispatch(searchActions.addRam(keyWord));
      e.target.style.backgroundColor = "#b3ffe0";
      e.target.style.color = "black";
    }
  };

  const filterStorage = (e) => {
    const keyWord = parseInt(e.target.innerText.replace(" GB", ""));
    if (requiredStorage.includes(keyWord)) {
      dispatch(searchActions.removeStorage(keyWord));
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
    } else {
      dispatch(searchActions.addStorage(keyWord));
      e.target.style.backgroundColor = "#b3ffe0";
      e.target.style.color = "black";
    }
  };

  const filterPopularity = (e) => {
    const keyWord = Number(e.target.innerText.replace("/5", ""));
    if (requiredPopularity.includes(keyWord)) {
      dispatch(searchActions.removePopularity(keyWord));
      e.target.style.backgroundColor = "beige";
      e.target.style.color = "gray";
    } else {
      dispatch(searchActions.addPopularity(keyWord));
      e.target.style.backgroundColor = "#b3ffe0";
      e.target.style.color = "black";
    }
  };

  useEffect(() => {
    if (!inputValue) return;
    fetchData();
  }, [
    inputValue,
    requiredBrands,
    requiredCatogeries,
    requiredPrice,
    requiredDiscount,
    requiredOs,
    requiredNetwork,
    requiredRam,
    requiredStorage,
    requiredPopularity,
  ]);

  return (
    <div style={{width:'100%',display:'flex'}}>
      {filterObj && (
        <div className="filter" style={{ width: "30%" }}>
          {filterObj.brand?.length > 0 && (
            <div className="brand" style={contStyle} onClick={filterBrand}>
              <h3>Brands: </h3>
              {filterObj.brand.map((brand) => (
                <button style={buttonStyle}>{brand}</button>
              ))}
            </div>
          )}
          {filterObj.category?.length > 0 && (
            <div
              className="category"
              style={contStyle}
              onClick={filterCategory}
            >
              <h3>Category:</h3>
              {filterObj.category.map((category) => (
                <button style={buttonStyle}>{category}</button>
              ))}
            </div>
          )}
          {filterObj.price?.length > 0 && (
            <div className="category" style={contStyle} onClick={filterPrice}>
              <h3>Price (Under) :</h3>
              {filterObj.price.map((price) => (
                <button style={buttonStyle}>{price}</button>
              ))}
            </div>
          )}
          {filterObj.discount?.length > 0 && (
            <div
              className="category"
              style={contStyle}
              onClick={filterDiscount}
            >
              <h3>Discount (above/upto):</h3>
              {filterObj.discount.map((discount) => (
                <button style={buttonStyle}>{discount}</button>
              ))}
            </div>
          )}
          {filterObj.os?.length > 0 && (
            <div className="category" style={contStyle} onClick={filterOs}>
              <h3>OS:</h3>
              {filterObj.os.map((os) => (
                <button style={buttonStyle}>{os}</button>
              ))}
            </div>
          )}
          {filterObj.network?.length > 0 && (
            <div className="category" style={contStyle} onClick={filterNetwork}>
              <h3>Network:</h3>
              {filterObj.network.map((network) => (
                <button style={buttonStyle}>{network}</button>
              ))}
            </div>
          )}
          {filterObj.ram?.length > 0 && (
            <div className="category" style={contStyle} onClick={filterRam}>
              <h3>RAM:</h3>
              {filterObj.ram.map((ram) => (
                <button style={buttonStyle}>{ram} GB</button>
              ))}
            </div>
          )}
          {filterObj.storage?.length > 0 && (
            <div className="category" style={contStyle} onClick={filterStorage}>
              <h3>Storage:</h3>
              {filterObj.storage.map((storage) => (
                <button style={buttonStyle}>{storage} GB</button>
              ))}
            </div>
          )}
          {filterObj.rating?.length > 0 && (
            <div
              className="category"
              style={contStyle}
              onClick={filterPopularity}
            >
              <h3>Popularity:</h3>
              {filterObj.rating.map((rating) => (
                <button style={buttonStyle}>{rating}/5</button>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="contents" style={contentsStyle}>
        {searchData?.map((data) => (
          <ProductCards data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
const contentsStyle = {
  width: "70%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const lcs = (first, second) => {
  if (!first || !second) return 0;
  let n = first.length;
  let m = second.length;
  first = first.toLowerCase();
  second = second.toLowerCase();
  let dp = new Array(n + 1);
  dp.fill(new Array(m + 1));
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else if (first[i - 1] == second[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
};

const buttonStyle = {
  fontSize: "12px",
  fontFamily: "inherit",
  fontWeight: "100",
  color: "gray",
  backgroundColor: "beige",
  margin: "5px",
  padding: "5px",
  borderRadius: "10px",
};
const contStyle = {
  marginTop: "10px",
  marginBottom: "10px",
};
