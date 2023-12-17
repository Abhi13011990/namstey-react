import { MENU_API } from "./contents";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId.restId);
    const json = await data.json();
    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
