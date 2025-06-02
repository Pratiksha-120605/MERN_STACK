import React from "react";

function AcceptTask({ data }) {
  return (
    <div>
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 font-semibold text-2xl">{data.taskTitle}</h2>
        <p className="text-sm mt-3">{data.taskDescription}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 py-1 px-2 text-sm rounded-md">
            Mark as Completed
          </button>
          <button className="bg-red-500 py-1 px-2 text-sm rounded-md">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcceptTask;
