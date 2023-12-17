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
    setRestaurantList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilterRes(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
  };

  return [restaurantList, filterRes, setFilterRes];
};

export default useFetchApi;
