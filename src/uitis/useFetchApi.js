import { useEffect, useState } from "react";
import { MAIN_API } from "./contents";

const useFetchApi = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRes, setFilterRes] = useState([])

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(MAIN_API);
    const jsonData = await data.json();
    console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRes(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };

  return [restaurantList, filterRes, setFilterRes];
};

export default useFetchApi;
