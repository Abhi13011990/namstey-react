import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../uitis/useRestaurantMenu";
import RestaurantCategoryItems from "./RestaurantCategoryItems";

const RestaurantMenu = () => {
  const resId = useParams();

  const  resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Simmer />;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    areaName,
    sla,
    totalRatingsString,
  } = resMenu?.cards[0]?.card?.card?.info;

  const categoryItem =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categoryItem);

  return (
    <div className="w-6/12 m-auto mt-4">
      <div className="flex justify-between border-b-2 border-gary-500 border-dashed py-5">
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <h4 className="text-sm text-gray-400">{cuisines.join(", ")}</h4>
          <small className="text-sm text-gray-400">
            {areaName} : {sla.lastMileTravelString}
          </small>
        </div>
        <div>
          <h3>{avgRating}</h3>
          <h3>{totalRatingsString}</h3>
        </div>
      </div>
      <p>RS:- {costForTwoMessage}</p>

      {categoryItem.map((item, index) => (
        <RestaurantCategoryItems
          key={index}
          restaurantCatItem={item.card.card.itemCards}
          catItemTitle = {item.card.card.title}
        />
      ))}

      {/* <h3>Recommended ({itmCards.length})</h3>
      <ul>
        {itmCards.map((resItem) => (
          <li key={resItem.card.info.id}>
            {resItem.card.info.name} :- Rs {resItem.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
