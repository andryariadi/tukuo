"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string | undefined;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center p-2 rounded-md flex-1 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-color-1">
      <input type="text" placeholder="Search.." name="name" className="w-full bg-transparent outline-none text-n-2" />
      <button className="cursor-pointer text-n-4">
        <IoSearchOutline size={24} />
      </button>
    </form>
    // <PlaceholdersAndVanishInput placeholders={["Search...", "Lagi..."]} onChange={() => {}} onSubmit={() => {}} />
  );
};

export default SearchBar;
