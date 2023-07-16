"use client";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { FC, useState } from "react";
import Filter from "./Filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
        <Dialog
          open={open}
          as="div"
          className={"z-40 lg:hidden relative"}
          onClose={onClose}>
          {/* Background */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          {/* Dialogue Position */}
          <div className="fixed inset-0 flex">
            <Dialog.Panel className="relative ml-auto bg-white w-full max-w-xs pb-6 py-2 overflow-y-hidden flex-col rounded-md shadow-xl">
              {/* Close Button */}
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={20} />} onClick={onClose} />
              </div>

              {/* Render the filter  */}
              <div className="flex flex-col gap-y-2 px-4">
                <Filter valueKey={"sizeId"} name="Sizes" data={sizes} />
                <Filter valueKey={"colorId"} name="Colors" data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Button>
    </>
  );
};

export default MobileFilter;
