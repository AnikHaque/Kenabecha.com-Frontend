import CategoryList from "./CategoryList";
import { useCategoryGetQuery } from "../../features/categories/categoryApi";

const Categories = () => {
  const { data } = useCategoryGetQuery();
  return (
    <div>
      <div className="grid grid-cols-2   sm:grid-cols-1 lg:grid-cols-6">
        {data?.data?.map((category) => (
          <CategoryList key={category._id} category={category}></CategoryList>
        ))}
      </div>
    </div>
  );
};

export default Categories;
