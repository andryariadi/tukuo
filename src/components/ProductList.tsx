import { wixClientServer } from "@/libs/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import { MdShoppingCartCheckout } from "react-icons/md";
// import DOMPurify from "isomorphic-dompurify";

// type Props = {
//   categoryId: string;
//   limit?: number;
//   searchParams?: any;
// };

const ProductList = async ({ categoryId, limit, searchParams }: { categoryId: string; limit?: number; searchParams?: any }) => {
  const wixClient = await wixClientServer();

  const data = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  console.log(data.items[0], "<----diproductlist");
  return (
    <div className="flex justify-between flex-wrap gap-x-1 gap-y-5 md:gap-y-12 mt-12">
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
            {/* <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.additionalInfoSections?.find((section) => section.title === "shortDesc")?.description || "My Description") }} className="text-sm text-n-3"></p> */}
            <p className="text-sm text-n-3">{product.additionalInfoSections?.find((section) => section.title === "shortDesc")?.description || "My Description"}</p>

            <button className="group flex items-center justify-start w-11 h-11 bg-logo rounded-full cursor-pointer relative overflow-hidden transition-all duration-150 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
              <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                <MdShoppingCartCheckout size={20} className="text-n-2" />
              </div>
              <div className="absolute right-3 transform translate-x-full opacity-0 text-n-2 text-md font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">Checkout</div>
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
