import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const CartModal = () => {
  const cartItem = true;

  return (
    <>
      <div className="bg-n-7 backdrop-blur-md absolute top-14 -right-20 lg:-right-12 xl:-right-24 p-4 w-max rounded-md flex flex-col gap-6 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
        {!cartItem ? (
          <div className="rounded-md font-sans text-n-2 text-sm whitespace-nowrap">Cart is Empty</div>
        ) : (
          <>
            <h2 className="font-sora text-xl text-n-1">Shopping Cart</h2>
            <div className="bg-n-8 p-2 rounded-md flex flex-col gap-8">
              {/* List Cart */}
              <div className="flex gap-4">
                <Image src="https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Item" width={72} height={96} className="object-cover rounded-md" />

                <div className="flex flex-col justify-between w-full gap-2">
                  {/* Top */}
                  <div className="">
                    <div className="flex justify-between items-center gap-8">
                      <h3 className="font-sans text-n-1 font-semibold">Product Name</h3>
                      <span className="p-1 bg-n-1 rounded-md text-n-8">$49</span>
                    </div>
                    <p className="text-n-3 text-sm font-sans">Avaliable</p>
                  </div>
                  {/* Bottom */}
                  <div className="flex justify-between text-sm">
                    <span className="text-n-3 font-sans">Qty 2</span>
                    <AiFillDelete size={20} className="cursor-pointer" color="#F35C7A" />
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div>
              <div className="flex items-center justify-between font-semibold">
                <span className="text-n-1 font-sans">Subtotal</span>
                <span className="text-n-1 font-sans">$49</span>
              </div>
              <p className="text-n-3 text-sm mt-2 mb-4"> Shipping and taxes calculated at checkout.</p>
              <div className="flex justify-between text-sm">
                <button className="bg-transparent py-3 px-4 rounded-md border-[2.5px] border-n-8 text-n-1">View Cart</button>
                <button className="bg-n-8 py-3 px-4 rounded-md border border-n-1/10 text-n-1">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
