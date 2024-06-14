import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { media } from "@wix/sdk";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const CartModal = () => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    const calculateSubTotal = () => {
      if (!cart?.lineItems) return 0;

      return cart.lineItems.reduce((acc, item) => {
        const price = item.price?.amount ?? 0;
        const quantity = item.quantity ?? 0;
        return acc + Number(price) * quantity;
      }, 0);
    };

    setSubTotal(calculateSubTotal());
  }, [cart?.lineItems]);

  console.log(cart, "<----dicartmodal");

  return (
    <>
      <div className="bg-n-7 backdrop-blur-md absolute top-14 -right-20 lg:-right-12 xl:-right-24 p-4 w-max rounded-md flex flex-col gap-6 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
        {!cart.lineItems ? (
          <div className="rounded-md font-sans text-n-2 text-sm whitespace-nowrap">Cart is Empty</div>
        ) : (
          <>
            <h2 className="font-sora text-xl text-n-1">Shopping Cart</h2>
            <div className="bg-n-8 p-2 rounded-md flex flex-col gap-8">
              {/* List Cart */}
              {cart.lineItems.map((item) => (
                <div key={item._id} className="flex gap-4  border-b border-n-1/10 p-1">
                  {item.image && <Image src={media.getScaledToFillImageUrl(item.image, 72, 96, {})} alt="Item" width={72} height={96} className="object-cover rounded-md" />}

                  <div className="flex flex-col justify-between w-full gap-2">
                    {/* Top */}
                    <div className="">
                      <div className="flex justify-between items-center gap-8">
                        <h3 className="font-sans text-n-1 font-semibold">{item.productName?.original}</h3>
                        <span className="p-1 bg-n-1 rounded-md text-n-8 flex items-center gap-2">
                          {item.quantity && item.quantity > 1 && <div className="text-[10px] text-green-500">{item.quantity} x</div>}${item.price?.amount}
                        </span>
                      </div>
                      <p className="text-n-3 text-sm font-sans">{item.availability?.status}</p>
                    </div>
                    {/* Bottom */}
                    <div className="flex justify-between text-sm">
                      <span className="text-n-3 font-sans">Qty {item.quantity}</span>
                      <AiFillDelete size={20} className="cursor-pointer" color="#F35C7A" onClick={() => removeItem(wixClient, item._id!)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom */}
            <div>
              <div className="flex items-center justify-between font-semibold">
                <span className="text-n-1 font-sans">Subtotal</span>
                <span className="text-n-1 font-sans">${subTotal}</span>
              </div>
              <p className="text-n-3 text-sm mt-2 mb-4"> Shipping and taxes calculated at checkout.</p>
              <div className="flex justify-between text-sm">
                <button className="bg-transparent py-3 px-4 rounded-md border-[2.5px] border-n-8 text-n-1">View Cart</button>
                <button className="bg-n-8 py-3 px-4 rounded-md border border-n-1/10 text-n-1 disabled:cursor-not-allowed disabled:opacity-75" disabled={isLoading}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
