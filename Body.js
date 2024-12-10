import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  //make async function with await
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.recipes);
    setFilteredRestaurant(json.recipes);
  };
  //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let filterRestaurant = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (res) => res.rating > 4
            );
            setListOfRestaurants(filterRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res, index) => (
          <RestaurantCard key={index} resObj={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
