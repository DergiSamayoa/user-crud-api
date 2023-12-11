import { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "./CardUser";
import SaveUser from "./SaveUser"
import CardUser from "./CardUser"
import { AnimatePresence } from "framer-motion"

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
    <article className="w-full grid grid-cols-3 gap-12 max-xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-6">
        <AnimatePresence>
        {users?.map(user => (
          <CardUser currentUser={user} />
        ))}
        </AnimatePresence>
    </article>
  )
}

export default ListUser;
