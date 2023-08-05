import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurentList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <div className="res-body">
      <button
        className="filter-btn"
        onClick={() => {
          const filterData = restaurentList.filter((res) => 
            res.info.avgRating > 4.3
          );
          setRestaurentList(filterData)
        }}
      >
        Top Restaurants
      </button>
      <div className="card-container">
        {restaurentList.map((restaurant) => (
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
        ))}
      </div>
    </div>
  );
};

export default Body;
