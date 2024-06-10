"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    replace(`${pathName}?${params}`);

    console.log(name, value, params, "<----difilter1");
  };

  console.log(pathName, searchParams, replace, "<----difilter2");

  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between gap-5 font-sans">
      <div className="flex gap-6 flex-wrap">
        {/* Left */}
        <select name="type" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo" onChange={handleFilterChange}>
          <option value="" selected disabled>
            Type
          </option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input
          type="text"
          name="min"
          placeholder="Min Price"
          className="bg-n-7 backdrop-blur-md w-24 py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo"
          onChange={handleFilterChange}
        />

        <input
          type="text"
          name="max"
          placeholder="Max Price"
          className="bg-n-7 backdrop-blur-md w-24 py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo"
          onChange={handleFilterChange}
        />

        <select name="cat" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo" onChange={handleFilterChange}>
          <option value="" selected disabled>
            Category
          </option>
          <option value="new arrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>

        <select name="" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo" onChange={handleFilterChange}>
          <option value="" selected disabled>
            All Filters
          </option>
        </select>
      </div>
      {/* Right */}
      <div className="">
        <select name="sort" id="" className="bg-n-7 backdrop-blur-md py-2 px-4 rounded-2xl font-medium text-xs text-n-3 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo" onChange={handleFilterChange}>
          <option>Sort By</option>
          <option value="asc price">Price (low to hight)</option>
          <option value="desc price">Price (hight to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
