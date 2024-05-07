const Products = () => {
  return (
    <div>
      <div className="section">
        <div className="container-fluid py-5 bg-gray-100">
          <div className="row">
            <h1 className="text-2xl font-bold text-center my-2">
              Our Products
            </h1>
            <span className="text-sm mb-3 text-center">
              Explore a World of Choices Across Our Most Popular
            </span>
            <div className="">
              <div>
                <ul
                  className="flex flex-wrap justify-center p-3 mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="mr-1">
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 rounded-full bg-blue-500 text-white"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-new"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      New
                    </button>
                  </li>
                  <li className="mr-1">
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 rounded-full bg-blue-500 text-white"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-trending"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Trending
                    </button>
                  </li>
                  <li className="mr-1">
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 rounded-full bg-blue-500 text-white"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-popular"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Popular
                    </button>
                  </li>
                  <li className="mr-1">
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 rounded-full bg-blue-500 text-white"
                      id="pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-top"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled"
                      aria-selected="false"
                    >
                      Top
                    </button>
                  </li>
                  <li className="mr-1">
                    <button
                      onClick={() => {}}
                      className="px-4 py-2 rounded-full bg-blue-500 text-white"
                      id="pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-special"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled"
                      aria-selected="false"
                    >
                      Special
                    </button>
                  </li>
                </ul>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 ml-12 mr-20">
                  <a href="#" className="group block overflow-hidden">
                    <div className="relative h-[350px] sm:h-[450px] ">
                      <img
                        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                      />

                      <img
                        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                      />
                    </div>

                    <div className="relative bg-white pt-3">
                      <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Limited Edition Sports Trainer
                      </h3>

                      <div className="mt-1.5 flex items-center justify-between text-gray-900">
                        <p className="tracking-wide">$189.99</p>

                        <p className="text-xs uppercase tracking-wide">
                          6 Colors
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
