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
    <section>
      <div>List User</div>
      <table className="m-auto">
        <thead>
          <tr>
            <th className="p-2">Id</th>
            <th className="p-2">Name</th>
            <th className="p-2">Lastname</th>
            <th className="p-2">Birthday</th>
            <th className="p-2">Email</th>
            <th className="p-2">Password</th>
            <th className="p-2">image_url</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.id+user.email}>
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.first_name}</td>
              <td className="p-2">{user.last_name}</td>
              <td className="p-2">{user.birthday}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.password}</td>
              <td className="p-2">{user.image_url}</td>
              <td className="p-2">
                <button className="p-2 border-2 bg-blue-500 text-black rounded-2xl">
                  Edit
                </button>
                <button onClick={() => SaveUser("delete", user)} className="p-2 border-2 bg-red-500 text-black rounded-2xl ml-4">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ListUser