import UpdateButton from "@/components/UpdateButton";
import { wixClientServer } from "@/libs/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";
import { CiMail, CiUser } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { RiUserReceivedLine, RiUserSharedLine } from "react-icons/ri";

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
    <div className="bg-rose-500 px-4 pt-[4.75rem] md:pt-[8rem] md:px-8 lg:px-16 xl:px-32 flex font-sans">
      {/* User Information */}
      <div className="bg-violet-500 w-full md:w-1/2">
        <h1>Profile</h1>
        <form action="" className="bg-amber-500 w-full mt-12 grid lg:grid-cols-2">
          <div className="max-w-[300px] flex flex-col gap-2">
            <label className="text-sm">Username</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input type="text" name="username" placeholder={user.member.profile?.nickname || "Username"} className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs" />
              <CiUser size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="max-w-[300px] flex flex-col gap-2">
            <label className="text-sm">First Name</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input type="text" name="firstName" placeholder={user.member.contact?.firstName || "Firstname"} className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs" />
              <RiUserReceivedLine size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="max-w-[300px] flex flex-col gap-2">
            <label className="text-sm">Last Name</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input type="text" name="username" placeholder={user.member.contact?.lastName || "Lastname"} className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs" />
              <RiUserSharedLine size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="max-w-[300px] flex flex-col gap-2">
            <label className="text-sm">Phone</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input
                type="text"
                name="phoneNumber"
                placeholder={(user.member.contact?.phones && user.member.contact?.phones[0]) || "Phone Number"}
                className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs"
              />
              <PiPhoneThin size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-sm">E-mail</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input type="email" name="email" placeholder={user.member.loginEmail || "****@gmail.com"} className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs autofill:bg-n-7" />
              <CiMail size={35} className="pe-3 text-n-4/60" />
            </div>
          </div>

          <UpdateButton />
        </form>
      </div>

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
            <>
              <div className="flex justify-between px-2 py-6 rounded-md hover:bg-green-300 transition-all duration-300 cursor-pointer even:bg-slate-400">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-6 rounded-md hover:bg-green-300 transition-all duration-300 cursor-pointer even:bg-slate-400">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-6 rounded-md hover:bg-green-300 transition-all duration-300 cursor-pointer even:bg-slate-400">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-6 rounded-md hover:bg-green-300 transition-all duration-300 cursor-pointer even:bg-slate-400">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
