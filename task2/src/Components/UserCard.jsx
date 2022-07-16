import React from "react";

const UserCard = ({ userData }) => {
  return (
    <>
      <div className="max-w-md bg-white rounded-lg border border-gray-200 transition duration-300 ease-in-out shadow-md hover:scale-105 cursor-pointer ">
        <div className="flex flex-col w-full items-center pt-5 pb-10 ">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={userData.avatar}
            alt="UserImage"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {`${userData.first_name} ${userData.last_name}`}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {userData.email}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserCard;
