"use client";

import { FC, useEffect, useState } from "react";
import Button from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

interface NavbarActionsProps {}

const NavbarActions: FC<NavbarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag className="" size={24} color="#fff" />
        <span className="ml-2 font-medium text-sm">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
