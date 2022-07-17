import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import UserData from "./components/UserData";

function App() {
  const [user, setuser] = useState([]);
  return (
    <>
      <Header />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-6">
        <Form setuser={setuser} user={user} />
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-3">
          {user && user.map((u, i) => <UserData key={i} data={u} />)}
        </div>
      </div>
    </>
  );
}

export default App;

// {
//   name: "Test1",
//   email: "abc@gmail.com",
//   phone: 94241424,
//   college: "Skit",
// },
