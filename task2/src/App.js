import { useState } from "react";
import Header from "./Components/Header";
import UserCard from "./Components/UserCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from "react-loader-spinner";
function App() {
  const [userData, setuserData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header
        userData={userData}
        setuserDate={setuserData}
        setLoading={setLoading}
      />
      {loading && (
        <div className="flex w-full items-center justify-center  mt-5">
          <Circles height="100" width="100" color="teal" ariaLabel="loading" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ml-5">
        {userData &&
          userData.map((user) => <UserCard key={user.id} userData={user} />)}
      </div>
    </>
  );
}

export default App;
