import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/libs/actions";
import { wixClientServer } from "@/libs/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CiMail, CiUser } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { RiUserReceivedLine, RiUserSharedLine } from "react-icons/ri";

const ProfilePage = async () => {
  const wixClient = await wixClientServer();

  const user = await wixClient.members.getCurrentMember({
    fieldsets: [members.Set.FULL],
  });

  if (!user || !user.member || !user.member.contactId) {
    console.error("User data is missing or incomplete", user);
    redirect("/");
  }

  const orderRes = await wixClient.orders.searchOrders({
    search: {
      filter: { "buyerInfo.contactId": { $eq: user.member.contactId } },
    },
  });

  console.log(user, orderRes, "<----diprofilepage");

  return (
    <div className="bg-ros-500 px-4 pt-[4.75rem] md:pt-[8rem] md:px-8 lg:px-16 xl:px-32 mt-10 flex flex-col lg:flex-row gap-20 font-sans text-n-3">
      {/* User Information */}
      <div className="bg-violt-500 w-full lg:w-1/2">
        <h1 className="text-3xl font-semibold">Profile</h1>
        <form action={updateUser} className="bg-ambr-500 w-full mt-10 grid md:grid-cols-2 gap-5 border border-n-1/10 p-5 rounded-md">
          {user.member?.contactId && <input type="text" name="id" value={user.member.contactId} hidden />}

          <div className="w-full lg:max-w-[300px] flex flex-col gap-2 col-span-2 md:col-auto">
            <label className="text-sm">Username</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input type="text" name="username" placeholder={user.member.profile?.nickname || "Username"} className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs" />
              <CiUser size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="w-full lg:max-w-[300px] flex flex-col gap-2 col-span-2 md:col-auto">
            <label className="text-sm">Phone</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input
                type="text"
                name="phone"
                placeholder={(user.member.contact?.phones && user.member.contact?.phones[0]) || "Phone Number"}
                className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs"
              />
              <PiPhoneThin size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="w-full lg:max-w-[300px] flex flex-col gap-2 col-span-2 md:col-auto">
            <label className="text-sm">First Name</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input type="text" name="firstName" placeholder={user.member.contact?.firstName || "Firstname"} className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs" />
              <RiUserReceivedLine size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="w-full lg:max-w-[300px] flex flex-col gap-2 col-span-2 md:col-auto">
            <label className="text-sm">Last Name</label>
            <div className="flex items-center justify-between rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
              <input type="text" name="lastName" placeholder={user.member.contact?.lastName || "Lastname"} className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs" />
              <RiUserSharedLine size={33} className="pe-3 text-n-4/60 bg-tea-600" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 col-span-2">
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
      <div className="bg-tal-600 w-full lg:w-1/2">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <div className="bg-sy-600 mt-10 bg-n-7 border border-n-1/10 px-3 md:px-5 py-6 rounded-md flex flex-col gap-5 overflow-y-auto h-[380px] order-scroll text-xs md:text-sm">
          {orderRes.orders && orderRes.orders.length > 0 ? (
            orderRes.orders.map((order) => (
              <Link href={`/orders/${order._id}`} key={order._id}>
                {order._id}
              </Link>
            ))
          ) : (
            <>
              <div className="flex justify-between px-2 py-5 rounded-sm border-b border-b-n-1/10 hover:border-logo even:bg-n-8 transition-all duration-300 cursor-pointer hover:text-logo">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-5 rounded-sm border-b border-b-n-1/10 hover:border-logo even:bg-n-8 transition-all duration-300 cursor-pointer hover:text-logo">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-5 rounded-sm border-b border-b-n-1/10 hover:border-logo even:bg-n-8 transition-all duration-300 cursor-pointer hover:text-logo">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-5 rounded-sm border-b border-b-n-1/10 hover:border-logo even:bg-n-8 transition-all duration-300 cursor-pointer hover:text-logo">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-5 rounded-sm border-b border-b-n-1/10 hover:border-logo even:bg-n-8 transition-all duration-300 cursor-pointer hover:text-logo">
                <span>223webrj3b53j4b</span>
                <span>$0.00</span>
                <span>1 hour ago</span>
                <span>Approved</span>
              </div>
              <div className="flex justify-between px-2 py-5 rounded-sm border-b border-b-n-1/10 hover:border-logo even:bg-n-8 transition-all duration-300 cursor-pointer hover:text-logo">
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
