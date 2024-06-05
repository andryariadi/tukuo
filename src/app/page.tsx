import CategoryList from "@/components/CategoryList";
import Loading from "@/components/Loading";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";

const HomePage = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res, "<----dihome");
  //   };

  //   getProduct();
  // }, [wixClient]);

  return (
    <div className="pt-[4.75rem] lg:pt-[5rem] overflow-hidden">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="text-2xl font-sans">Featured Product</h1>
        <Suspense fallback={<Loading />}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>
      <div className="mt-24 px-10">
        <h1 className="px-4 text-2xl font-sans">Categories</h1>
        <Suspense fallback={<Loading />}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
