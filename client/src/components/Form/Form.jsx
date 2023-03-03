import React from "react";

function Form({ form, handleChange,handleFormSubmit }) {
  const { fullName, email, profession, contact } = form;

  return (
    <div className="w-[50%] font-serif h-[430px] ">
      <form onSubmit={handleFormSubmit} className="flex flex-col w-[60%] h-[100%] justify-between bg-white text-black shadow-md p-4">
        <div className="flex flex-col my-2">
          <label htmlFor="fullName">Name:</label>
          <input
            type="text"
            placeholder="your name"
            name="fullName"
            id="fullName"
            className=" font-mono  border-2 border-gray-500 w-[100%]  p-2"
            onChange={handleChange}
            value={fullName}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="your email"
            name="email"
            id="email"
            className="font-mono border-2 border-gray-500 w-[100%] p-2"
            onChange={handleChange}
            value={email}
          />
        </div>

        <div className="flex flex-col my-2">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            placeholder="your contact"
            name="contact"
            id="contact"
            className=" font-mono border-2 border-gray-500 w-[100%] p-2"
            onChange={handleChange}
            value={contact}
          />
        </div>

        <div className="flex flex-col my-2">
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            placeholder="your profession"
            name="profession"
            id="profession"
            className="font-mono  border-2 border-gray-500 w-[100%] p-2"
            onChange={handleChange}
            value={profession}
          />
        </div>

        <button className=" w-[70%] block mx-auto p-2 border-2 border-black text-center font-mono uppercase font-bold mt-4 bg-green-400 text-white hover:scale-[1.1]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
