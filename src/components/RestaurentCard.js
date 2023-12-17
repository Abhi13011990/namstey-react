import { REST_IMG } from "../uitis/contents";
import { useContext } from "react";
import UserContext from "../uitis/UserContext";

const RestaurentCard = ({
  cuisines,
  id,
  name,
  avgRating,
  deliveryTime,
  costForTwo,
  cloudinaryImageId,
}) => {

  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="hover:shadow-md p-4" id={id}>
      <div className="cardImg">
        <img
          className="w-full h-40 object-cover"
          alt="Res Image"
          src={REST_IMG + cloudinaryImageId}
        />
      </div>
      <h2 className="text-lg py-2 font-bold">{name}</h2>
      <h4 className="text-sm text-slate-500">{cuisines}</h4>
      <h4 className="text-md text-green-600 font-semibold">Rating: {avgRating}</h4>
      <div className="flex justify-between">
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
      </div>
      <h4>User : {loggedInUser} </h4>
    </div>
  );
};

 export const withRestaurantCard = (RestaurentCard) =>{
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurentCard {...props} />
    </div>
  }
}

export default RestaurentCard;
