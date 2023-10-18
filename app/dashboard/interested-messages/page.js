"use client";
import InterestedMessages from "@/components/dashboard/interested-messages/InterestedMessages";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.view_mail === true) {
    return <InterestedMessages />;
  }
};

export default page;
