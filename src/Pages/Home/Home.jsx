import Brands from "../../Components/Brands/Brands";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import { decodeToken } from "../../Utility/Token";

export const Home = () => {
  // Decode token to retrieve user information
  const userInfo = decodeToken();

  // Extract role from user information
  const role = userInfo ? userInfo.role : null;

  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-full px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://e0.pxfuel.com/wallpapers/204/284/desktop-wallpaper-electronics-shopping-store-buy-home-kitchen-appliances-online-james-co.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full md:px-0 lg:px-20 lg:max-w-full px-8">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-left">
              <span className="text-blue-500">Everything</span> you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                {role}
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <Categories />
      <Products />
      <Brands />
    </div>
  );
};
