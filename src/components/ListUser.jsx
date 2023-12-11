import { useEffect, useState } from "react"
import axios from "axios"
import SaveUser from "./SaveUser"
import CardUser from "./CardUser"

const ListUser = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then(users => setUsers(users.data))
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <article className="w-full grid grid-cols-3 gap-12">
        {users?.map(user => (
          <CardUser currentUser={user} />
        ))}
    </article>
  )
}

export default ListUser