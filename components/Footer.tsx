import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-black text-xs">
          &copy; {new Date().getFullYear()} InstaShop, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
