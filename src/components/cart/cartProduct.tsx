"use client";

import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import Image from "next/image";
import { MdClose } from "react-icons/md";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  return (
    <div className="w-full">
      {cart?.map((item) => (
        <div key={item?.id} className="grid grid-cols-6 place-items-center">
          <Image
            src={item?.images[0]}
            alt="productImage"
            className="w-20"
            width={200}
            height={200}
          />
          <p className=" col-span-2">{item?.title}</p>
          <p>${item?.price}</p>
          <p>Quantity add</p>
          <button className="flex items-center gap-x-1 text-gray-500 hover:text-red-500">
            <MdClose className="text-lg mt-1" />
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
