// import UpdateButton from "@/components/UpdateButton";
// import { updateUser } from "@/libs/actions";
// import { wixClientServer } from "@/libs/wixClientServer";
// import { members } from "@wix/members";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { CiMail, CiUser } from "react-icons/ci";
// import { PiPhoneThin } from "react-icons/pi";
// import { RiUserReceivedLine, RiUserSharedLine } from "react-icons/ri";

const ProfilePage = async () => {
  // const wixClient = await wixClientServer();

  // const user = await wixClient.members.getCurrentMember({
  //   fieldsets: [members.Set.FULL],
  // });

  // if (!user || !user.member || !user.member.contactId) {
  //   console.error("User data is missing or incomplete", user);
  //   redirect("/");
  // }

  // const orderRes = await wixClient.orders.searchOrders({
  //   search: {
  //     filter: { "buyerInfo.contactId": { $eq: user.member.contactId } },
  //   },
  // });

  // console.log(user, orderRes, "<----diprofilepage");

  return (
    <div className="bg-ros-500 px-4 pt-[4.75rem] md:pt-[8rem] md:px-8 lg:px-16 xl:px-32 mt-10 flex flex-col lg:flex-row gap-20 font-sans text-n-3">
      {/* User Information */}
      <p className="text-2xl text-n-3">Soon</p>
    </div>
  );
};

export default ProfilePage;
