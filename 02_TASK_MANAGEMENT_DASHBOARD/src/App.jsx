import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/other/Header";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setuserData] = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // });

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? (
        <AdminDashboard changeUser={setuser} data={userData} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setuser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
