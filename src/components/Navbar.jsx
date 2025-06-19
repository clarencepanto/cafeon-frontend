import cafeonLogo from "../assets/icons/cafeon.png";
import dashboardIcon from "../assets/icons/Icons.png";
import monitorIcon from "../assets/icons/monitor-one.png";
import groupIcon from "../assets/icons/peoples-two.png";
import logoutIcon from "../assets/icons/Logout.png";
import { NavLink } from "react-router-dom";

// good for toggling classes dynamically
import clsx from "clsx";

function Navbar() {
  return (
    <nav className=" w-[104px] bg-white h-screen flex flex-col items-center relative">
      <div>
        <img
          src={cafeonLogo}
          alt="cafeonLogo"
          className="w-[103px] h-[103px]"
        />
      </div>
      <section className="mt-8 flex flex-col">
        <ul className="flex flex-col gap-5 text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(isActive ? "bg-[#FA9564]" : "bg-white")
            }
          >
            <li className="items-center justify-center flex w-[56px] h-[56px] hover:bg-[#FA9564] cursor-pointer rounded-md ">
              <img src={monitorIcon} alt="monitorIcon" />
            </li>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              clsx(isActive ? "bg-[#FA9564]" : "bg-white")
            }
          >
            <li className=" items-center justify-center flex w-[56px] h-[56px] hover:bg-[#FA9564] cursor-pointer rounded-md">
              <img src={dashboardIcon} alt="dashboardIcon" />
            </li>
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              clsx(isActive ? "bg-[#FA9564]" : "bg-white")
            }
          >
            <li className="items-center justify-center flex w-[56px] h-[56px] hover:bg-[#FA9564] cursor-pointer rounded-md">
              <img src={groupIcon} alt="groupIcon" />
            </li>
          </NavLink>
        </ul>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            clsx(isActive ? "bg-[#FA9564]" : "bg-white")
          }
        >
          <div className="w-[56px] h-[56px] items-center justify-center flex absolute bottom-15 hover:bg-[#FA9564] cursor-pointer rounded-md">
            <img src={logoutIcon} alt="logoutIcon" className=" scale-110 " />
          </div>
        </NavLink>
      </section>
    </nav>
  );
}

export default Navbar;
