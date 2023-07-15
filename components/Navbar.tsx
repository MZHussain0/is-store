import { FC } from "react";
import Container from "./ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/GetCategories";
import NavbarActions from "./NavbarActions";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="text-xl font-bold ">INSTASHOP</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
