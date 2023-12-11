import { useEffect, useState } from "react"
import axios from "axios"
import SaveUser from "./SaveUser"


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
    <article className="w-full grid grid-cols-3 gap-12 max-xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-6">
        {users?.map(user => (
          <SaveUser currentUser={user} />
        ))}

    </article>
  )
}

export default ListUser