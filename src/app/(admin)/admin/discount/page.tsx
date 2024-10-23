"use client";

import {
  DiscountHeader,
  DiscountTable,
  UpdateModal,
} from "@/app/components/Discount";
import React, { useState } from "react";

const DiscountHome = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <DiscountHeader
        onAdd={() => {
          setShow(true);
        }}
      />
      <DiscountTable setShow={setShow} />
      <UpdateModal isOpen={show} setIsOpen={setShow} />
    </>
  );
};

export default DiscountHome;
