import { wixClientServer } from "@/libs/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import { MdShoppingCartCheckout } from "react-icons/md";
import Pagination from "./Pagination";

type ProductListProps = {
  categoryId: string;
  limit?: number;
  searchParams?: any;
};

const PRODUCT_PER_PAGE = 1;

const ProductList = async ({ categoryId, limit, searchParams }: ProductListProps) => {
  const wixClient = await wixClientServer();

  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome("productType", searchParams?.type ? [searchParams.type] : ["physical", "digital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE) : 0);

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      // productQuery.ascending(sortBy); //tidak bisa dgn cara ini
      productQuery = productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      // productQuery.descending(sortBy); //tidak bisa dgn cara ini
      productQuery = productQuery.descending(sortBy);
    }
  }

  const data = await productQuery.find();

  console.log(data, "<----productlist");

  return (
    <div className="flex flex-col justify-center flex-wrap gap-x-4 gap-y-5 md:gap-y-12 mt-12">
      {data.items.map((product: products.Product) => (
        <Link key={product._id} href={`/${product.slug}`} className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[24%] p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hovr:border-logo">
          {/* Top */}
          <div className="relative w-full h-[19rem] rounded-t-md">
            <Image src={product.media?.mainMedia?.image?.url || "/product.png"} alt={product.name || "Product"} fill sizes="25vw" className="absolute object-cover rounded-t-md z-10 hover:opacity-0 transition-all duration-300" />
            {product.media?.items && <Image src={product.media?.items[1]?.image?.url || "/product.png"} alt={product.name || "Product"} fill sizes="25vw" className="absolute object-cover rounded-t-md" />}
          </div>

          {/* Bottom */}
          <div className="bg-tel-500 h-[10rem] flex flex-col items-start justify-between p-1">
            <div className="w-full flex justify-between font-sans">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price?.price}</span>
            </div>

            <div className="text-sm text-n-3" dangerouslySetInnerHTML={{ __html: product.additionalInfoSections?.find((section) => section.title === "shortDesc")?.description || "My Description" }} />

            <button className="group flex items-center justify-start w-11 h-11 bg-logo rounded-full cursor-pointer relative overflow-hidden transition-all duration-150 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
              <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                <MdShoppingCartCheckout size={20} className="text-n-2" />
              </div>
              <div className="absolute right-3 transform translate-x-full opacity-0 text-n-2 text-sm font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">Checkout</div>
            </button>
          </div>
        </Link>
      ))}

      <Pagination currentPage={data.currentPage || 0} hasPrev={data.hasPrev()} hasNext={data.hasNext()} />
    </div>
  );
};

export default ProductList;
