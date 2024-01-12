import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () =>
      await fetch("http://localhost:3001/users", {
        method: "GET",
      }).then(async (res) => {
        if (res.redirected) {
          return navigate("/error");
        }
        const data = await res.json();
        setUsers(data.users);
      });
    getUsers().catch(console.error);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div>{user.email}</div>
      ))}
    </div>
  );
}

export default Users;
