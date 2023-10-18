"use client";
import ContractsManagement from "@/components/dashboard/contracts-management/ContractsManagement";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.manage_contracts === true) {
    return (
      <main>
        <ContractsManagement />
      </main>
    );
  }
};

export default page;
