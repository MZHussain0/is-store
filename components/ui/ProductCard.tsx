"use client";
import { Product } from "@/types";
import Image from "next/image";
import { FC } from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";

interface ProductCardProps {
  data: Product;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  return (
    <div
      className="bg-white cursor-pointer group rounded-xl border p-3 space-y-4
    ">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0].url}
          alt={data.name}
          fill
          className="aspect-square object-cover rounded-md"
        />

        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute w-full h-full bg-black/60">
          <div className="flex items-center justify-centre gap-x-6 absolute bottom-5 right-20">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price  */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
