"use server";

import { wixClientServer } from "./wixClientServer";

interface Contact {
  firstName?: string;
  lastName?: string;
  phones?: string[];
}

interface Profile {
  nickname?: string;
}

export const updateUser = async (formData: FormData) => {
  const wixClient = await wixClientServer();

  const { id, username, firstName, lastName, email, phone } = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => [key, value as string]));

  try {
    const contact: Contact = {};
    if (firstName) contact["firstName"] = firstName;
    if (lastName) contact["lastName"] = lastName;
    if (phone) contact["phones"] = [phone];

    const profile: Profile = {};
    if (username) profile["nickname"] = username;

    const response = await wixClient.members.updateMember(id, {
      contact: contact,
      loginEmail: email || undefined,
      profile: profile,
    });

    console.log(response, "<----diactions");
  } catch (error) {
    console.log(error);
  }
};
