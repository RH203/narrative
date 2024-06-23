import propTypes from "prop-types";

const WeeklyItemCard = ({ image, title, category }) => {
  return (
    <div className="w-full flex gap-1 cursor-pointer group bg-gray-100 rounded-lg overflow-hidden">
      <div className="w-1/2 h-full overflow-hidden">
        <img
          src={image}
          alt="not found"
          className="w-full h-full group-hover:scale-110 transition duration-500 transform object-cover"
        />
      </div>
      <div className="p-2">
        <p className="font-bold sm:text-sm xs:text-sm">{title}</p>
        <p className="font-normal kg:text-sm sm:text-sm xs:text-sm">{category}</p>
      </div>
    </div>
  );
};

WeeklyItemCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
};

export default WeeklyItemCard;
