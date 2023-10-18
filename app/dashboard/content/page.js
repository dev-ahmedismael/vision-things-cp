"use client";
import Content from "@/components/dashboard/content/Content";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.manage_pages === true) {
    return <Content />;
  }
};

export default page;
