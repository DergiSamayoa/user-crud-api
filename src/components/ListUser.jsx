import { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "./CardUser";
import SaveUser from "./SaveUser"


const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((users) => setUsers(users.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="grid grid-cols-4">
      {users?.map((user) => (
        <CardUser key={user.id + user.email} currentUser={user} />
      ))}
    </section>
  );
};

export default ListUser;
