import { REST_IMG } from "../uitis/contents";

const RestaurentCard = ({
  cuisines,
  id,
  name,
  avgRating,
  deliveryTime,
  costForTwo,
  cloudinaryImageId,
}) => {
  return (
    <div className="res-card" id={id}>
      <div className="cardImg">
        <img
          className="res-img"
          alt="Res Image"
          src={REST_IMG + cloudinaryImageId}
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurentCard;
