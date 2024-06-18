import { wixClientServer } from "@/libs/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";

const ProfilePage = async () => {
  const wixClient = await wixClientServer();

  const user = await wixClient.members.getCurrentMember({
    fieldsets: [members.Set.FULL],
  });

  if (!user.member?.contactId) return <div>Not logged in!</div>;

  const orderRes = await wixClient.orders.searchOrders({
    search: {
      filter: { "buyerInfo.contactId": { $eq: user.member.contactId } },
    },
  });

  console.log(user, orderRes, "<----diprofilepage");

  return (
    <div className="bg-rose-500 px-4 pt-[4.75rem] md:pt-[8rem] md:px-8 lg:px-16 xl:px-32 flex">
      {/* User Information */}
      <div className="bg-violet-500 w-full md:w-1/2">User</div>
      {/* Orders Information */}
      <div className="bg-teal-600 w-full md:w-1/2">
        <h1>Orders</h1>
        <div className="bg-sky-600 mt-12">
          {orderRes.orders && orderRes.orders.length > 0 ? (
            orderRes.orders.map((order) => (
              <Link href={`/orders/${order._id}`} key={order._id}>
                {order._id}
              </Link>
            ))
          ) : (
            <div className="even:bg-slate-400">
              <div className="flex justify-between px-2 py-6 rounded-md hover:bg-green-100 transition-all duration-300 cursor-pointer">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-6 rounded-md hover:bg-green-100 transition-all duration-300 cursor-pointer">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-6 rounded-md hover:bg-green-100 transition-all duration-300 cursor-pointer">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
