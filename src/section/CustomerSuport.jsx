import { useState } from "react";

const CustomerSuport = () => {
  const [quary, setQuary] = useState("");
  return (
    <div className="fixed bottom-3 right-3 border  rounded-md ">
      <div className="bg-gray-200 w-80 h-48 ">hello</div>
      <input
        type="text"
        placeholder="ask_here"
        className=" p-4 border  rounded-md  focus:outline-none   w-full"
      />
    </div>
  );
};

export default CustomerSuport;
