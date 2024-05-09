import { useBrandsGetQuery } from "../../features/brands/brandsApi";
import BrandsList from "./BrandsList";

const Brands = () => {
  const { data } = useBrandsGetQuery();
  return (
    <div>
      <div className="grid grid-cols-2   sm:grid-cols-1 lg:grid-cols-6">
        {data?.data?.map((brand) => (
          <BrandsList key={brand._id} brand={brand}></BrandsList>
        ))}
      </div>
    </div>
  );
};

export default Brands;
