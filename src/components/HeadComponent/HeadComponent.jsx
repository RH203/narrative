import { Helmet } from "react-helmet";
import propTypes from "prop-types";

const HeadComponent = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Narrative`}</title>
    </Helmet>
  );
};

HeadComponent.propTypes = {
  title: propTypes.string,
};
export default HeadComponent;
