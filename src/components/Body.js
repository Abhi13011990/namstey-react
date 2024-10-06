import { useEffect, useState, useContext } from "react";
import RestaurentCard, { withRestaurantCard } from "./RestaurentCard";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import useFetchApi from "../uitis/useFetchApi";
import useInternet from "../uitis/useInternet";
import UserContext from "../uitis/UserContext";


const Body = () => {
  const [restaurentList, filterRes, setFilterRes] = useFetchApi();

  const [searchValue, setSearchValue] = useState("");

  const {loggedInUser, setUserName} = useContext(UserContext)

  const RestaurantCardPromoted = withRestaurantCard(RestaurentCard);

  // console.log(restaurentList)
  // search restaurant
  useEffect(() => {
    searchVal();
  }, [searchValue]);

  const searchVal = () => {
    const filteredRestaurantList = restaurentList.filter((searchItem) =>
      searchItem.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilterRes(filteredRestaurantList);
  };

  // Chacking Internet Connection
  const isInternet = useInternet();
  if (isInternet === false) {
    return <h1>Please Check Your Internet Connection</h1>;
  }
  console.log(restaurentList)

  return restaurentList.length === 0 ? (
    <Simmer />
  ) : (
    <div className="w-5/6 m-auto mt-5">
      <div className="flex justify-between my-5">
        <div>
          <input
          className="px-3 py-2 border-slate-300 border bg-white shadow-sm focus:outline-none"
            type="search"
            placeholder="Search Restaurant"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>

        <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />

        <button
          className="rounded-none bg-teal-400 py-2 px-4 hover:bg-teal-600 hover:shadow-md text-white"
          onClick={() => {
            const topRes = restaurentList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilterRes(topRes);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="flex grid grid-cols-4 gap-4">
        {filterRes.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted
                key={restaurant.info.id}
                id={restaurant.info.id}
                cuisines={restaurant.info.cuisines.join(", ")}
                name={restaurant.info.name}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                avgRating={restaurant.info.avgRating}
                costForTwo={restaurant.info.costForTwo}
                deliveryTime={restaurant.info.sla.deliveryTime}
              />
            ) : (
              <RestaurentCard
                key={restaurant.info.id}
                id={restaurant.info.id}
                cuisines={restaurant.info.cuisines.join(", ")}
                name={restaurant.info.name}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                avgRating={restaurant.info.avgRating}
                costForTwo={restaurant.info.costForTwo}
                deliveryTime={restaurant.info.sla.deliveryTime}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
