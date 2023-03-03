import React, { useMemo } from "react";

function Table({ users,deleteUser }) {

  const table = useMemo(() => {
    return  users.map((user) => {
      return (
        <tbody key={user.userId} className="mt-2">
          <tr className="flex justify-between items-baseline">
            <td className="font-mono">{user.userId}</td>
            <td className="font-mono">{user.fullName}</td>
            <td className="font-mono">{user.contact}</td>
            <td className="font-mono">{user.email}</td>
            <td className="font-mono">{user.profession}</td>
            <td><button onClick={() => deleteUser(user.userId)} className="bg-black p-2 rounded font-mono text-center text-white">remove</button></td>
          </tr>
        </tbody>
      );
    });
  }, [users]);

  return (
    <div className="w-[70%]">
      <table className="w-[100%] flex flex-col justify-evenly">
        <thead className="w-[90%]">
          <tr className="flex justify-between items-baseline">
            <th className="uppercase font-serif">id</th>
            <th className="uppercase font-serif">user</th>
            <th className="uppercase font-serif">contact</th>
            <th className="uppercase font-serif">email</th>
            <th className="uppercase font-serif">profession</th>
          </tr>
        </thead>
        {table}
      </table>
    </div>
  );
}

export default Table;
