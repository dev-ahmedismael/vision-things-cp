"use client";
import SalesReport from "@/components/dashboard/sales-report/SalesReport";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.view_reports === true) {
    return (
      <main>
        <SalesReport />
      </main>
    );
  }
};

export default page;
