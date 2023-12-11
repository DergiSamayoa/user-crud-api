import axios from "axios";
import { toast } from "react-toastify";


const notifyCreate = () => toast.success("Usuario creado!");
const notifyUpdate = () => toast.success("Usuario actualizado!");
const notifyDelete = () => toast.success("Usuario eliminado!");
const notifyError = () => toast.error("Hubo un error, intentalo de nuevo");


const SaveUser = (mode, currentUser) => {
  if (mode === "update") {
    currentUser.first_name = "Plutarco";
    currentUser.birthday = "1990-12-01";
    console.log("SaveUser: update :",currentUser);
    console.log(`https://users-crud.academlo.tech/users/${currentUser.id}/`);
    axios
      .put(
        `https://users-crud.academlo.tech/users/${currentUser.id}/`,
        currentUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        notifyUpdate();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        notifyError();
      });
  }

  if (mode === "delete") {
    console.log("SaveUser: delete :",currentUser);
    axios
      .delete(`https://users-crud.academlo.tech/users/${currentUser.id}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        notifyDelete();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        notifyError();
      });
  }

  if (mode === "create") {
    console.log("SaveUser: create :",currentUser);
    if(currentUser.birthday == ""){
      currentUser.birthday = null
    }
    if(currentUser.image_ul == ""){
      currentUser.image_ul = null
    }
    axios
      .post("https://users-crud.academlo.tech/users/", currentUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        notifyCreate();
      })
      .catch((err) => {
        console.log("ERROR:", err);
        notifyError();
      });
  }

  return (
    <section>
      <div>Save User data</div>
    </section>
  );
};

export default SaveUser;
