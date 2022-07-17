import React, { useState } from "react";

const Form = ({ setuser, user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [college, setcollege] = useState("");
  const [photo, setphoto] = useState("");
  const [java, setJava] = useState(false);
  const [cplus, setCplus] = useState(false);
  const [python, setPython] = useState(false);
  const [javascript, setJavascript] = useState(false);

  //Converter function
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  //function to get image in Base64 format
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    setphoto(base64);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let skills = [];
    if (java) {
      skills.push("Java");
      setJava(false);
    }
    if (python) {
      skills.push("Python");
      setPython(false);
    }
    if (cplus) {
      skills.push("C++");
      setCplus(false);
    }
    if (javascript) {
      skills.push("Javascript");
      setJavascript(false);
    }

    const newUser = {
      name,
      email,
      phone,
      college,
      photo,
      skills,
    };

    setuser([newUser, ...user]);

    setName("");
    setEmail("");
    setcollege("");
    setphone("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col  space-y-2  p-3">
        <h1 className="text-lg md:text-2xl font-bold"> Registration form</h1>
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="base-input"
            className="bg-gray-50 shadow-md border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-2/3 p-2.5 "
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="base-input1"
            className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="base-input1"
            className="bg-gray-50 shadow-md border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="base-input2"
            className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
          >
            Phone
          </label>
          <input
            type="tel"
            id="base-input2"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            className="bg-gray-50 shadow-md border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="base-input3"
            className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
          >
            College
          </label>
          <input
            type="text"
            id="base-input3"
            value={college}
            onChange={(e) => setcollege(e.target.value)}
            className="bg-gray-50 shadow-md border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="base-input4"
            className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="base-input4"
            accept="image/*"
            onChange={handleImageUpload}
            className="bg-gray-50 shadow-md border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
            required
          />
        </div>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Skills
        </h3>
        <ul className="items-center w-3/4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="Python-checkbox-list"
                type="checkbox"
                value=""
                onChange={() => {
                  setPython(!python);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                checked={python}
              />
              <label
                htmlFor="Python-checkbox-list"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Python
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="java-checkbox-list"
                type="checkbox"
                value=""
                onChange={() => setJava(!java)}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                checked={java}
              />
              <label
                htmlFor="java-checkbox-list"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Java
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="javascript-checkbox-list"
                type="checkbox"
                value=""
                onChange={() => setJavascript(!javascript)}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                checked={javascript}
              />
              <label
                htmlFor="javascript-checkbox-list"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Javascript
              </label>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="C++-checkbox-list"
                type="checkbox"
                value=""
                onChange={() => setCplus(!cplus)}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                checked={cplus}
              />
              <label
                htmlFor="C++-checkbox-list"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                C++
              </label>
            </div>
          </li>
        </ul>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 md:w-1/3  px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
