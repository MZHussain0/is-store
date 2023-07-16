import { Product } from "@/types";
import { FC } from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{data.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl ">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black"> Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black"> Color:</h3>
          <div
            className="w-6 h-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>

      <div className="flex items-center gap-x-3 mt-10">
        <Button className="flex items-center justify-center gap-x-2">
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
