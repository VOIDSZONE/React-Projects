import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const formHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  console.log(formData);

  return (
    <form className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md">
      {/* First Name */}

      <div>
        <label htmlFor="firstName" className="text-sm font-medium">
          First Name
        </label>

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={formHandler}
          placeholder="Himani"
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* Last Name */}

      <div>
        <label htmlFor="lastName" className="text-sm font-medium">
          Last Name
        </label>

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={formHandler}
          placeholder="Kalraj"
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        />
      </div>

      {/* Email */}

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={formHandler}
          placeholder="abc@gmail.com"
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
          required
        />
      </div>
    </form>
  );
};

export default Form;
