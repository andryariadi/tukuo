import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import Loading from "@/components/Loading";
import ProductImages from "@/components/ProductImages";
import Reviews from "@/components/Reviews";
import { wixClientServer } from "@/libs/wixClientServer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const data = await wixClient.products.queryProducts().eq("slug", params.slug).find();

  const product = data.items[0]; // karna isinya array of boject

  if (!product) return notFound();

  const reviewRes = await fetch(`https://api.fera.ai/v3/public/reviews?product.id=${product._id}&public_key=${process.env.NEXT_PUBLIC_REFA_ID}`);
  const reviews = await reviewRes.json();

  // console.log(product.productOptions, "<----disinglepage");
  console.log(product, reviews, "<----disinglepage");

  return (
    <div className="bg-sy-500 px-4 pt-[4.75rem] md:pt-[8rem] md:px-8 lg:px-16 xl:px-32 flex flex-col lg:flex-row gap-16">
      {/* Left Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>

      {/* Right Container */}
      <div className="bg-n-7 backdrop-blur-md w-full lg:w-1/2 flex flex-col gap-6 font-sans p-2 rounded-md border border-n-5">
        <h1 className="text-4xl  font-medium">{product.name}</h1>
        <p className="text-n-3">{product.description}</p>
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="text-2xl font-medium">${product.price?.price}</h2>
        ) : (
          <div className="bg-roe-500 flex items-center gap-4 py-5 border-y-2 border-n-1/10">
            <h3 className="text-xl text-n-3 line-through">${product.price?.price}</h3>
          </div>
        )}
        {product.variants && product.productOptions ? (
          <CustomizeProduct productId={product._id!} variants={product.variants} productOptions={product.productOptions} />
        ) : (
          <Add productId={product._id!} variantId="00000000-0000-0000-0000-000000000000" stockNumber={product.stock?.quantity || 0} />
        )}
        {/* Description */}
        {product.additionalInfoSections?.map((section: any) => (
          <div key={section.title} className="font-sans border-t-2 border-n-1/10 py-2">
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p className="text-n-3 text-sm">{section.description}</p>
          </div>
        ))}

        {/* Reviews */}
        <Suspense fallback={<Loading />}>
          <Reviews reviews={reviews} />
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;
