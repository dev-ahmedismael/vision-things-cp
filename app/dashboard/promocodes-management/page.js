"use client";
import PromocodesManagement from "@/components/dashboard/promocodes-management/PromocodesManagement";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.manage_promocodes === true) {
    return <PromocodesManagement />;
  }
};

export default page;
