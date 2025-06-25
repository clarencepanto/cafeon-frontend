import cafeonLogo from "../assets/icons/cafeon.png";
import dashboardIcon from "../assets/icons/Icons.png";
import monitorIcon from "../assets/icons/monitor-one.png";
import groupIcon from "../assets/icons/peoples-two.png";
import logoutIcon from "../assets/icons/Logout.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function Navbar() {
  return (
    <nav className="w-[70px] bg-white h-screen flex flex-col items-center relative">
      <div className="md:h-[70px] md:w-[70px] md:mt-2">
        <img src={cafeonLogo} alt="cafeonLogo" className="w-[70px] h-[70px]" />
      </div>
      <section className="mt-8 flex flex-col">
        <ul className="flex flex-col gap-5 text-center">
          <NavLink to="/" end>
            {({ isActive }) => (
              <li
                className={clsx(
                  "flex items-center justify-center w-[56px] h-[56px] rounded-md cursor-pointer transition-colors duration-200",
                  isActive
                    ? "bg-[#FA9564] text-white"
                    : "bg-white text-gray-700",
                  "hover:bg-[#FA9564] hover:text-white"
                )}
              >
                <img src={monitorIcon} alt="monitorIcon" className="w-5 h-5" />
              </li>
            )}
          </NavLink>

          <NavLink to="/dashboard">
            {({ isActive }) => (
              <li
                className={clsx(
                  "flex items-center justify-center w-[56px] h-[56px] rounded-md cursor-pointer transition-colors duration-200",
                  isActive
                    ? "bg-[#FA9564] text-white"
                    : "bg-white text-gray-700",
                  "hover:bg-[#FA9564] hover:text-white"
                )}
              >
                <img
                  src={dashboardIcon}
                  alt="dashboardIcon"
                  className="w-5 h-5"
                />
              </li>
            )}
          </NavLink>

          <NavLink to="/customers">
            {({ isActive }) => (
              <li
                className={clsx(
                  "flex items-center justify-center w-[56px] h-[56px] rounded-md cursor-pointer transition-colors duration-200",
                  isActive
                    ? "bg-[#FA9564] text-white"
                    : "bg-white text-gray-700",
                  "hover:bg-[#FA9564] hover:text-white"
                )}
              >
                <img src={groupIcon} alt="groupIcon" className="w-5 h-5" />
              </li>
            )}
          </NavLink>
        </ul>

        <NavLink to="/logout">
          {({ isActive }) => (
            <div
              className={clsx(
                "w-[56px] h-[56px] flex items-center justify-center absolute bottom-15 rounded-md cursor-pointer transition-colors duration-200",
                isActive ? "bg-[#FA9564]" : "bg-white",
                "hover:bg-[#FA9564]"
              )}
            >
              <img src={logoutIcon} alt="logoutIcon" className="scale-110" />
            </div>
          )}
        </NavLink>
      </section>
    </nav>
  );
}

export default Navbar;
