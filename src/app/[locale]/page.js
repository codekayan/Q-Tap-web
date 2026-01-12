"use client";
import React, { useEffect } from "react";
import { HomePage } from "./HomePage/HomePage";
import { useGetAuthUser } from "@/hooks/useGetAuthUser";

const Page = () => {
  const { data } = useGetAuthUser();

  return (
    <div style={{ overflowX: "hidden !important" }}>
      <HomePage />
    </div>
  );
};

export default Page;
