import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User Logged Out Successfully"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li className="text-lg font-semibold mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-semibold mr-2">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="text-lg font-semibold mr-2">
        <NavLink to="/orders">Orders</NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink to="/register">Register</NavLink>
      </li>
      {user && (
        <>
          <li className="text-lg font-semibold mr-2">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="text-lg font-semibold mr-2">
            <NavLink to="/Cart">Cart</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn font-bold btn-ghost normal-case text-2xl">
          Private Route
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user.email}</span>
            <a
              onClick={handleLogOut}
              className="btn btn-sm btn-outline text-lg font-semibold"
            >
              Sign Out
            </a>
          </>
        ) : (
          <Link tp="/login">
            <button className="btn btn-sm btn-outline text-lg font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
