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
      <article className="flex justify-between  w-[450px] p-3 ">
        <article className="w-[150px]">
          <h2 className="font-bold">Clarence Panto</h2>
          <p className="text-[12px] text-gray-400">Sunday, June 21 2021</p>
        </article>
        <article className="flex w-[280px] h-[49px]">
          <div className="relative left-6 top-4">
            <img src={searchIcon} alt="searchIcon" />
          </div>
          <input
            type="text"
            placeholder="search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white w-full pl-9 rounded-lg "
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
          <div className="flex items-center justify-center w-[100px] h-[40px]  rounded-lg">
            <div className="pr-2">
              <img src={coffeeIcon} alt="coffeemachineicon" />
            </div>
            <h3>Coffee</h3>
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
          <div className="flex items-center justify-center w-[100px] h-[40px] rounded-lg">
            <div className="pr-2">
              <img src={teaIcon} alt="teaicon" />
            </div>
            <h3>Tea</h3>
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
          <div className="flex items-center justify-center w-[100px] h-[40px] rounded-lg">
            <div className="pr-2">
              <img src={cakeIcon} alt="cakeicon" />
            </div>
            <h3>Pastry</h3>
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
          <div className="flex items-center justify-center w-[100px] h-[40px] rounded-lg">
            <div className="pr-2">
              <img src={breadIcon} alt="breadicon" />
            </div>
            <h3>Bread</h3>
          </div>
        </NavLink>
      </article>
      <article className=" max-h-[730px] p-3 overflow-y-scroll">
        <Outlet context={{ searchTerm }} />
      </article>
    </section>
  );
}

export default Header;
