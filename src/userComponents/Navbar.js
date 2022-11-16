import Cookies from "js-cookie";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function UserNavbar({ search, setSearch }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    Cookies.set("admin", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };

  return (
    <div className="navbar  bg-zinc-200">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </Link>
      </div>
      <div className="flex-none">
        <div className="form-control pr-5">
          <input
            type="text"
            placeholder="Enrolled Number"
            className="input input-bordered"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="dropdown dropdown-end"></div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.picture} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Enroll-Num
                <span className="badge">{user?.enrollNum}</span>
              </a>
            </li>
            <li>
              <a>{user?.email}</a>
            </li>
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
  );
}
