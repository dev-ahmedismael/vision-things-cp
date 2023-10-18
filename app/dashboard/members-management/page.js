"use client";
import MembersManagement from "@/components/dashboard/members-management/MembersManagement";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.manage_members === true) {
    return (
      <main>
        <MembersManagement />
      </main>
    );
  }
};

export default page;
