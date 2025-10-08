import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col  w-[200px] h-screen">
      <button
        className="bg-green-900 px-2  rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>
      {isOpen && (
        <div className="flex flex-col space-y-8 pt-4 items-center w-full h-full  bg-amber-800 list-none">
          <div className="flex gap-1 items-center cursor-pointer">
            <li>Sort</li>
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <li>Filter</li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
