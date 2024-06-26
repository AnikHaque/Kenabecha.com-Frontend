import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandsList = ({ brand: { brandName, brandImg, _id } }) => {
  return (
    <div className="px-4  sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-8 ">
      <Link to={`/by-category/${_id}`}>
        <div className="text-center hover:bg-gray-200 p-4">
          <div className="flex items-center justify-center  mx-auto mb-4 rounded-md  w-32 h-32">
            <img className="" src={brandImg} alt={brandName} />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            {brandName}
          </h6>
        </div>
      </Link>
    </div>
  );
};

BrandsList.propTypes = {
  brand: PropTypes.shape({
    brandName: PropTypes.string.isRequired,
    brandImg: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BrandsList;
