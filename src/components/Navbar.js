import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AddMarkInfo from "./TableDemo";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    Cookies.set("admin", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/admin");
  };

  return (
    <>
      <div className="navbar bg-zinc-200">
        <div className="flex-1">
          <Link to="/admin/adminHome">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
