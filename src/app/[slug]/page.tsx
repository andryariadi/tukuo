import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="bg-sy-500 px-4 pt-[4.75rem] md:pt-[8rem] md:px-8 lg:px-16 xl:px-32 flex flex-col lg:flex-row gap-16">
      {/* Left Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* Right Container */}
      <div className="bg-n-7 backdrop-blur-md w-full lg:w-1/2 flex flex-col gap-6 font-sans p-2 rounded-md border border-n-5">
        <h1 className="text-4xl  font-medium">Product Name</h1>
        <p className="text-n-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
        </p>
        <div className="bg-roe-500 flex items-center gap-4 py-5 border-y-2 border-n-1/10">
          <h3 className="text-xl text-n-3 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <CustomizeProduct />
        <Add />
        {/* Review */}
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
        <div className="font-sans border-t-2 border-n-1/10 py-2">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-n-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, nulla quo eum magni inventore nesciunt adipisci modi voluptates expedita distinctio numquam totam aliquid corporis placeat mollitia ipsum, fugit dolorum porro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
