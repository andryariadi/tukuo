"use client";

import { useState } from "react";
import Loader from "./Loader";

const UpdateButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button className={`py-3 rounded-md bg-logo text-n-2 ${isLoading ? "bg-transparent border border-logo" : ""}`} disabled={isLoading}>
      {isLoading ? <Loader /> : "Update"}
    </button>
  );
};

export default UpdateButton;
