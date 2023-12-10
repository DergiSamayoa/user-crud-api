import axios from "axios";

const SaveUser = (mode) => {
  const user = {
    first_name: "Pedro",
    last_name: "Almodovar",
    birthday: "1969-01-01",
    email: "almodovar@myweb.com",
    password: "mypassword",
    image_url: null,
  };

  if(mode==="edit") {
    user.id = "60d3b41f8f8b7a0015d9d6e5";
    user.first_name = "Pedro";
    
    axios
      .put("https://users-crud.academlo.tech/users/", user, {
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
    user.id = "60d3b41f8f8b7a0015d9d6e5";
    
  }

  if(mode==="create") {
    axios
      .post("https://users-crud.academlo.tech/users/", user, {
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
