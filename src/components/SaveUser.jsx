import axios from "axios";

const SaveUser = (mode, currentUser) => {
  // const newUser = {
  //   first_name: "Pedro",
  //   last_name: "Almodovar",
  //   birthday: "1969-01-01",
  //   email: "almodovar@myweb.com",
  //   password: "mypassword",
  //   image_url: null,
  // };

  if (mode === "update") {
    currentUser.first_name = "Plutarco";
    currentUser.birthday = "1990-12-01";
    console.log(JSON.stringify(currentUser));
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
        alert("User updated");
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  if (mode === "delete") {
    console.log(JSON.stringify(currentUser));
    axios
      .delete(`https://users-crud.academlo.tech/users/${currentUser.id}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("User deleted");
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  if (mode === "create") {
    // currentUser = newUser;
    console.log(JSON.stringify(currentUser));
    axios
      .post("https://users-crud.academlo.tech/users/", currentUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("User created");
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  return (
    <section>
      <div>Save User data</div>
    </section>
  );
};

export default SaveUser;
