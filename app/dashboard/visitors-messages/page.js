"use client";
import VisitorMessages from "@/components/dashboard/visitors-messages/VisitorsMessages";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.view_mail === true) {
    return (
      <main>
        <VisitorMessages />
      </main>
    );
  }
};

export default page;
