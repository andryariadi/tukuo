const CustomizeProduct = () => {
  return (
    <div className="bg-ambr-500 font-sans flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="relative w-8 h-8 rounded-full ring-1 ring-n-3 cursor-pointer bg-rose-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="relative w-8 h-8 rounded-full ring-1 ring-n-3 cursor-pointer bg-sky-500"></li>
        <li className="relative w-8 h-8 rounded-full ring-1 ring-n-3 cursor-pointer bg-green-500">
          <div className="absolute w-10 h-[2px] bg-rose-500 rotate-45 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-not-allowed" />
        </li>
      </ul>

      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="py-2 px-4 rounded-md ring-1 ring-logo text-logo text-sm cursor-pointer">Small</li>
        <li className="py-2 px-4 rounded-md ring-1 ring-logo text-n-2 bg-logo text-sm cursor-pointer">Medium</li>
        <li className="py-2 px-4 rounded-md ring-1 ring-amber-900 bg-amber-900 text-n-2 text-sm cursor-not-allowed">Large</li>
      </ul>
    </div>
  );
};

export default CustomizeProduct;
