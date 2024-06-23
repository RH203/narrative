import propTypes from "prop-types";

const InfoCard = ({ img, title, desc }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 border border-gray-300 py-3 group cursor-pointer hover:bg-red-500 transition duration-500">
      <div className="group-hover:bg-slate-200 rounded-full px-2 py-3 transition duration-500">
        {img}
      </div>
      <h6 className="font-bold group-hover:text-white transition duration-500">
        {title}
      </h6>
      <small className="group-hover:text-white transition duration-500">
        {desc}
      </small>
    </div>
  );
};

InfoCard.propTypes = {
  img: propTypes.any,
  title: propTypes.string,
  desc: propTypes.string,
};

export default InfoCard;
