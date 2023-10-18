"use client";
import Pages from "@/components/dashboard/pages/Pages";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.manage_pages === true) {
    return (
      <div>
        <Pages />
      </div>
    );
  }
};

export default page;
