"use client";
import VisitsReport from "@/components/dashboard/visits-report/VisitsReport";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.view_reports === true) {
    return (
      <main>
        <VisitsReport />
      </main>
    );
  }
};

export default page;
