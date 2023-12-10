import axios from "axios";

const SaveUser = (mode, currentUser) => {
  const newUser = {
    first_name: "Pedro",
    last_name: "Almodovar",
    birthday: "1969-01-01",
    email: "almodovar@myweb.com",
    password: "mypassword",
    image_url: null,
  };

  if(mode==="update") {
    currentUser.first_name = "Plutarco";
    currentUser.birthday = "1990-12-01";
    
    axios
      .put(`https://users-crud.academlo.tech/users/${currentUser.id}/`, currentUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("User updated");
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  if(mode==="delete") {
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

  if(mode==="create") {
    axios
      .post("https://users-crud.academlo.tech/users/", newUser, {
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
