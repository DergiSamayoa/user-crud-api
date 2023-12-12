import { useEffect, useState } from "react"
import axios from "axios"
import CardUser from "./CardUser"
import { AnimatePresence } from "framer-motion"

const ListUser = ({updateUsers, setUpdateUsers, editMode}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then(users => setUsers(users.data))
      .catch(err => {
        console.log(err)
      })
    setUpdateUsers(false)
  }, [updateUsers])

  return (
    <article className="w-full mt-8 justify-items-center grid grid-cols-3 gap-12 max-xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-6">
        <AnimatePresence>
        {users?.map(user => (
          <CardUser key={user.id+user.email} currentUser={user} setUpdateUsers={setUpdateUsers} editMode={editMode}/>
        ))}
        </AnimatePresence>
    </article>
  )
}

export default ListUser