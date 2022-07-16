import axios from "axios";
import React, { useState } from "react";
import Logo from "../images/logo.png";
const Header = ({ userData, setuserDate, setLoading }) => {
  const [buttenText, setbuttenText] = useState("Get user");
  const getUsers = async () => {
    if (userData) {
      setuserDate(null);
      setbuttenText("Get User");
      return;
    }
    setLoading(true);
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    setuserDate(data.data);
    setLoading(false);
    setbuttenText("Clear");
  };
  return (
    <nav className="flex items-center justify-around space-x-5 bg-teal-500 p-6">
      <div className="flex items-center   text-white mr-6">
        <img
          className=" h-8 w-8 mr-2"
          width="54"
          height="54"
          src={Logo}
          alt="logo"
        ></img>
        <span className="font-semibold text-xl tracking-tight">
          UserInfo.com
        </span>
      </div>

      <div className=" lg:flex lg:items-center lg:w-auto">
        <button
          onClick={getUsers}
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          {buttenText}
        </button>
      </div>
    </nav>
  );
};

export default Header;
