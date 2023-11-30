import { useLoaderData, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import ClothCard from "../../Shared/ClothCard";

const Women = () => {
  const data = useLoaderData();
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Set searchResult to the entire data when the component mounts
  useEffect(() => {
    setSearchResult(data);
  }, [data]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Filter the data based on the selected category
    const filteredCloths =
      category === "all"
        ? data
        : data.filter(
            (cloth) => cloth.clothSize.toLowerCase() === category.toLowerCase()
          );

    // Set the search result state
    setSearchResult(filteredCloths);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Read the input value directly
    const searchQuery = event.target.elements.searchInput.value.trim();

    // Filter the data based on the search query
    const filteredCloths = data.filter((cloth) =>
      cloth.productTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Set the search result state
    setSearchResult(filteredCloths);
  };

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <>
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            className="rounded-full h-28 w-28"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">SWAP WOMEN&rsquo;S</h1>

      <div>
        <div className="mt-6 md:flex md:items-center md:justify-between px-6 space-y-4 md:space-y-0">
          <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
            <button
              className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm ${
                selectedCategory === "all" ? "bg-gray-100" : ""
              } dark:bg-gray-800 dark:text-gray-300`}
              onClick={() => handleCategoryChange("all")}
            >
              View all
            </button>

            <button
              className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm ${
                selectedCategory === "S" ? "bg-gray-100" : ""
              } dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100`}
              onClick={() => handleCategoryChange("S")}
            >
              Size: S
            </button>

            <button
              className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm ${
                selectedCategory === "XS" ? "bg-gray-100" : ""
              } dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100`}
              onClick={() => handleCategoryChange("XS")}
            >
              Size: xl
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                name="searchInput"
                className="block w-full md:w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Your Dress"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {searchResult?.map((item, idx) => (
            <ClothCard item={item} key={idx}></ClothCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Women;
