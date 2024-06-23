import { MdFavoriteBorder } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { narrative } from "../../constant/constants";
import NavigateButton from "../NavigateButton/NavigateButton";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 font-poppins">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavigateButton title={"Browse"} link={""} style={""} />
            </li>
            <li>
              <NavigateButton title={"Create"} link={""} style={""} />
            </li>
            <li>
              <NavigateButton title={"About us"} link={"about"} style={""} />
            </li>
            <li>
              <a>Rankings</a>
              <ul className="p-2">
                <li>
                  <NavigateButton
                    title={"Novels Rankings"}
                    link={""}
                    style={""}
                  />
                </li>
                <li>
                  <NavigateButton
                    title={"Comic Rankings"}
                    link={""}
                    style={""}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">{narrative}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavigateButton title={"Browse"} link={""} style={""} />
          </li>
          <li>
            <NavigateButton title={"Create"} link={""} style={""} />
          </li>
          <li>
            <NavigateButton title={"About us"} link={"about"} style={""} />
          </li>
          <li>
            <details>
              <summary>Rankings</summary>
              <ul className="p-2 ">
                <li>
                  <NavigateButton
                    title={"Novels Rankings"}
                    link={""}
                    style={""}
                  />
                </li>
                <li>
                  <NavigateButton
                    title={"Comic Rankings"}
                    link={""}
                    style={""}
                  />
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Search Start */}
        <div className="">
          <button className="hover:bg-gray-300 p-3 hover:rounded-full rounded-full transition-transform transform-gpu active:scale-90">
            <IoMdSearch size={25} />
          </button>
        </div>
        {/* Search End */}

        {/* Favorite Start */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <MdFavoriteBorder size={25} />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Favorite End */}
      </div>
    </div>
  );
};

export default Navbar;
