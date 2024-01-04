import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () =>
      await fetch("/auth/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.users);
        });
    getUsers().catch(console.error);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div>{user.username}</div>
      ))}
    </div>
  );
}

export default Users;
