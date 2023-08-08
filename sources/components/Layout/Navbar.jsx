import { logo } from "@/sources/assets/svg";
import { menu } from "@/sources/values";
import Image from "next/image";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLink = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`fixed top-16 right-5 ${
          open ? "max-h-[100%]" : "max-h-[0px]"
        } w-[150px] bg-[#00000016] duration-300 backdrop-blur-md z-50 rounded-xl overflow-hidden flex flex-col sm:hidden`}
      >
        {menu.map((elem) => {
          return (
            <div key={elem.id} className="p-1 m-1 hover:drop-shadow-sm hover:bg-white rounded-lg cursor-pointer" onClick={() => handleLink(elem.id)}>
              {elem.label}
            </div>
          )
        })}
      </div>

      <div className="fixed top-0 w-full backdrop-blur-md flex items-center justify-between gap-5 p-4 border-b border-solid border-0 z-40 shadow-lg">
        <Image
          src={logo}
          alt="Ridify"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => handleLink("front")}
        />

        <div
          className="sm:hidden w-[40px] h-[40px] cursor-pointer hover:bg-[#0000001d] p-1 rounded-full duration-300"
          onClick={() => setOpen(!open)}
        >
          <CgMenuRight className="w-full h-full" />
        </div>

        <div className="items-center gap-5 text-[15px] sm:flex hidden">
          {menu.map((elem) => {
            return (
              <div
                key={elem.id}
                className="cursor-pointer hover:text-emerald-700 duration-300"
                onClick={() => handleLink(elem.id)}
              >
                {elem.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
