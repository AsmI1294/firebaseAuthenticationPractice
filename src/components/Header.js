import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/order"}>
          Order
        </Link>

        <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>
          Register
        </Link>

        {user?.email ? (
          <span>
            <Link
              onClick={handleLogOut}
              className="btn btn-ghost normal-case text-xl"
            >
              Logout
            </Link>
            <div className="text-xl ">Welcome, {user.email}</div>
          </span>
        ) : (
          <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
