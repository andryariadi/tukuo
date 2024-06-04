const Filter = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between gap-5 font-sans">
      <div className="flex gap-6 flex-wrap">
        {/* Left */}
        <select name="type" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
          <option value="" selected disabled>
            Type
          </option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input type="text" name="min" placeholder="Min Price" className="bg-n-7 backdrop-blur-md w-24 py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo" />

        <input type="text" name="max" placeholder="Max Price" className="bg-n-7 backdrop-blur-md w-24 py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo" />

        <select name="size" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
          <option value="" selected disabled>
            Size
          </option>
          <option value="">Size</option>
        </select>

        <select name="color" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
          <option value="" selected disabled>
            Color
          </option>
          <option value="">Color</option>
        </select>

        <select name="ribbon" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
          <option value="" selected disabled>
            Category
          </option>
          <option value="new arrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>

        <select name="" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
          <option value="" selected disabled>
            All Filters
          </option>
        </select>
      </div>
      {/* Right */}
      <div className="">
        <select name="" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
          <option value="" selected disabled>
            Sort By
          </option>
          <option value="">Price (low to hight)</option>
          <option value="">Price (hight to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
