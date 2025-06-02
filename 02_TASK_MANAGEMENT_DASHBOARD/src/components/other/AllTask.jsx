import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const [userData, setuserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5  ">
      <div className="bg-red-400 mb-2  py-2 px-4 flex justify-between rounded ">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed Task</h5>
      </div>

      <div className=" ">
        {userData.map((e, idx) => {
          return (
            <div
              key={idx}
              className=" mb-2  py-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium w-1/5 text-white">
                {e.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-900 ">
                {e.taskCount.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-600 ">
                {e.taskCount.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white ">
                {e.taskCount.completedTask}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600 ">
                {e.taskCount.failedTask}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
