import React, { useContext } from "react";
import { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";
import { AuthContext } from "../../context/AuthProvider";

function Header(props) {
  const [userData, setuserData] = useContext(AuthContext);
  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium text-white">
          Hello
          <br />{" "}
          <span className="text-3xl font-semibold">
            {props.data.firstName} 🤗👋
          </span>
        </h1>

        <button
          onClick={logOutUser}
          className="text-white font-medium text-lg rounded-sm border-2 bg-red-800 py-3 px-5 "
        >
          Log out
        </button>
      </div>
    </>
  );
}

export default Header;
