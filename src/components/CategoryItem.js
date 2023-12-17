import { REST_IMG } from "../uitis/contents";

const CategoryItem = ({ restaurantCatItem, className }) => {
  console.log(restaurantCatItem);
  return (
    <div className={className}>
        {/* // <h1>{item.card.info.name}</h1> */}
        <div className="flex justify-between p-4 border-b-2 border-white">
          <div className="w-10/12">
            <h1 className="font-semibold text-xs">{restaurantCatItem.card.info.name}</h1>
            <h1 className="text-gray-600">
              Rs: {restaurantCatItem.card.info.price / 100}
            </h1>
            <p className="text-xs text-gray-500">
              {restaurantCatItem.card.info.description}
            </p>
          </div>
          <div className="w-2/12 flex justify-center">
            <img src={REST_IMG + restaurantCatItem.card.info.imageId} alt="Item Image" className="w-20" />
          </div>
        </div>
    </div>
  );
};

export default CategoryItem;
