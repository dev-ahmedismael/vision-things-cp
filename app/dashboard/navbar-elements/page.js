"use client";
import NavbarElements from "@/components/dashboard/navbar-elements/NavbarElements";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user);
  if (user.manage_pages === true) {
    return <NavbarElements />;
  }
};

export default page;
