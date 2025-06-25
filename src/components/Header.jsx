import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

import searchIcon from "../assets/icons/searchIcon.png";
import coffeeIcon from "../assets/icons/coffee-machine.png";
import teaIcon from "../assets/icons/cup-four.png";
import cakeIcon from "../assets/icons/cake-four.png";
import breadIcon from "../assets/icons/bread.png";
import { useState } from "react";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section>
      <article className="flex justify-between w-[450px] p-3 lg:w-[650px] xl:w-[800px] lg:p-4 xl:p-6">
        <article className="w-[150px]">
          <h2 className="font-bold text-base lg:text-lg xl:text-xl">
            Clarence Panto
          </h2>
          <p className="text-[12px] text-gray-400 lg:text-[13px] xl:text-sm">
            Sunday, June 21 2021
          </p>
        </article>
        <article className="flex w-[280px] h-[49px] lg:w-[350px] xl:w-[400px]">
          <div className="relative left-6 top-4">
            <img src={searchIcon} alt="searchIcon" />
          </div>
          <input
            type="text"
            placeholder="search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white w-full pl-9 rounded-lg text-sm lg:text-base "
          />
        </article>
      </article>
      <article className=" flex justify-between p-3">
        <NavLink
          to="coffee"
          className={({ isActive }) =>
            clsx(
              "rounded-lg",
              isActive ? "bg-[#FA9564] text-white" : "bg-white"
            )
          }
        >
          <div className="flex items-center justify-center w-[100px] h-[40px] rounded-lg lg:w-[120px] lg:h-[45px] xl:w-[140px] xl:h-[50px]">
            <div className="pr-2">
              <img
                src={coffeeIcon}
                alt="coffeemachineicon"
                className="w-4 lg:w-5 xl:w-6"
              />
            </div>
            <h3 className="text-sm lg:text-base xl:text-lg">Coffee</h3>
          </div>
        </NavLink>

        <NavLink
          to="tea"
          className={({ isActive }) =>
            clsx(
              "rounded-lg",
              isActive ? "bg-[#FA9564] text-white" : "bg-white"
            )
          }
        >
          <div className="flex items-center justify-center w-[100px] h-[40px] rounded-lg lg:w-[120px] lg:h-[45px] xl:w-[140px] xl:h-[50px]">
            <div className="pr-2">
              <img src={teaIcon} alt="teaicon" className="w-4 lg:w-5 xl:w-6" />
            </div>
            <h3 className="text-sm lg:text-base xl:text-lg">Tea</h3>
          </div>
        </NavLink>

        <NavLink
          to="pastries"
          className={({ isActive }) =>
            clsx(
              "rounded-lg",
              isActive ? "bg-[#FA9564] text-white" : "bg-white"
            )
          }
        >
          <div className="flex items-center justify-center w-[100px] h-[40px] rounded-lg lg:w-[120px] lg:h-[45px] xl:w-[140px] xl:h-[50px]">
            <div className="pr-2">
              <img
                src={cakeIcon}
                alt="cakeicon"
                className="w-4 lg:w-5 xl:w-6"
              />
            </div>
            <h3 className="text-sm lg:text-base xl:text-lg">Pastry</h3>
          </div>
        </NavLink>

        <NavLink
          to="bread"
          className={({ isActive }) =>
            clsx(
              "rounded-lg",
              isActive ? "bg-[#FA9564] text-white" : "bg-white"
            )
          }
        >
          <div className="flex items-center justify-center w-[100px] h-[40px] rounded-lg lg:w-[120px] lg:h-[45px] xl:w-[140px] xl:h-[50px]">
            <div className="pr-2">
              <img
                src={breadIcon}
                alt="breadicon"
                className="w-4 lg:w-5 xl:w-6"
              />
            </div>
            <h3 className="text-sm lg:text-base xl:text-lg">Bread</h3>
          </div>
        </NavLink>
      </article>
      <article className=" max-h-[730px] p-3 overflow-y-scroll lg:p-4 xl:p-6">
        <Outlet context={{ searchTerm }} />
      </article>
    </section>
  );
}

export default Header;
