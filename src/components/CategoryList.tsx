import { wixClientServer } from "@/libs/wixClientServer";
import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const data = await wixClient.collections.queryCollections().find();

  console.log(data, "<----dicategorylist");

  return (
    <div className="carousel mt-12 px-4 overflow-x-scroll">
      <div className="flex gap-4 md:gap-8 mb-2">
        {data.items.map((category: collections.Collection) => (
          <Link
            key={category._id}
            href={`/list?cat=${category.slug}`}
            className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo overflow-hidden"
          >
            <div className="bg-sky-600 relative w-full h-96">
              <Image src={category.media?.mainMedia?.image?.url || "/category.png"} alt={category.name || "Category"} fill sizes="20vw" className="object-cover hover:scale-110 transition-all duration-500" />
            </div>
            <h1 className="mt-5 font-sans font-light text-clip tracking-wide">{category.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
