"use client";

import { useFormStatus } from "react-dom";
import Loader from "./Loader";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={`col-span-2 w-full py-3 rounded-md bg-logo text-n-2 ${pending ? "bg-transparent border border-logo" : ""}`} disabled={pending}>
      {pending ? <Loader /> : "Update"}
    </button>
  );
};

export default UpdateButton;
