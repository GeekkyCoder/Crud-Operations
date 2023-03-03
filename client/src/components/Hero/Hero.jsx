import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";

const defaultFormData = {
  id: 1,
  fullName: "",
  email: "",
  contact: "",
  profession: "",
};

function Hero() {
  const [form, setForm] = useState(defaultFormData);
  const [users, setUsers] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://crud-operations-i2vk.vercel.app/users", {
        method: "post",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(`user not added ${err}`);
    }

    try {
      await getUsers();
    } catch (err) {
      console.log(`could not get Users`, err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const getUsers = async () => {
    try {
      const response = await fetch("https://crud-operations-i2vk.vercel.app/users");
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(`could not get users ${err}`);
    }
  };

  useEffect(() => {
    async function getAllUsers() {
      await getUsers();
    }
    getAllUsers();
  }, []);

  const deleteAUser = async (id) => {
    try {
      const response = await fetch(`https://crud-operations-i2vk.vercel.app/users/${id}`, {
        method: "delete",
      });
      const deletedUser = await response.json();
      setUsers((prevUsers) => {
        return prevUsers.filter((user) => {
          return user.userId !== deletedUser.userId;
        });
      });
    } catch (err) {
      console.log(`failed to delete ${err}`);
    }
  };

  return (
    <div className="flex justify-between items-baseline mx-auto w-[90%] mt-10 ">
      <Form
        form={form}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Table users={users} deleteUser={deleteAUser} />
    </div>
  );
}

export default Hero;
