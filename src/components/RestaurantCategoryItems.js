import CategoryItem from "./CategoryItem";
import { useState } from "react";

const RestaurantCategoryItems = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { catItemTitle, restaurantCatItem } = props;
  //   console.log(restaurantCatItem);

  const handleCategory = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className="shadow-sm my-2 px-2 py-2 bg-gray-200"
      onClick={()=>handleCategory()}
    >
      <h2 className="font-bold text-xs">
        {catItemTitle} ({restaurantCatItem.length})
      </h2>
      {restaurantCatItem.map((items) => (
        <CategoryItem
          className={isOpen ? "hidden" : "block"}
          restaurantCatItem={items}
        />
      ))}
    </div>
  );
};
export default RestaurantCategoryItems;
