import propTypes from "prop-types";

const InfoCard = ({img, title, desc, style}) => {
  return (
    <div>
      <img src={img} className={`${style}`}/>
      <h6>
        {title}
      </h6>
      <small>
        {desc}
      </small>
    </div>
  )
}


InfoCard.propTypes = {
  img: propTypes.any,
  title: propTypes.string,
  desc: propTypes.string,
  style: propTypes.string,
};


export default InfoCard;