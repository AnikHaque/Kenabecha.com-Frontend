import { useCategoryGetQuery } from "../../features/categories/categoryApi";

const Categories = () => {
  const { data } = useCategoryGetQuery();
  console.log(data);
  return (
    <div>
      <div>
        {data?.data?.map((category) => (
          <div key={category._id}>
            <h1 className="text-black">{category.categoryName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
