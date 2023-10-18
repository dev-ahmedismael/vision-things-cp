"use client";
import CreateContract from "@/components/dashboard/create-contract/CreateContract";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.create_contract === true) {
    return (
      <main>
        <CreateContract />
      </main>
    );
  }
};

export default page;
