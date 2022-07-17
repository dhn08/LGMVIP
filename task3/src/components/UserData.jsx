import userEvent from "@testing-library/user-event";
import React from "react";

const UserData = ({ data }) => {
  return (
    <>
      <div className="max-w-md bg-white rounded-lg border border-gray-200 transition duration-300 ease-in-out shadow-md hover:scale-105 cursor-pointer ">
        <div className="flex flex-col w-full items-center pt-5 pb-10 ">
          <img
            className="mb-3 w-20 h-20 rounded-full shadow-lg"
            src={data.photo}
            alt="UserImage"
          />
          <h5 className="mb-1 text-base font-medium text-gray-900 dark:text-white">
            {data.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Email : {data.email}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Phone: {data.phone}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            College:{data.college}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Skills: {data.skills.join(", ")}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserData;
