import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryList = ({ category: { categoryName, categoryImg, _id } }) => {
  return (
    <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20 ">
      <Link to={`/by-category/${_id}`}>
        <div className="text-center hover:bg-gray-200 p-4">
          <div className="flex items-center justify-center  mx-auto mb-4 rounded-md bg-indigo-50 w-32 h-32">
            <img className="" src={categoryImg} alt={categoryName} />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            {categoryName}
          </h6>
        </div>
      </Link>
    </div>
  );
};

CategoryList.propTypes = {
  category: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    categoryImg: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryList;
