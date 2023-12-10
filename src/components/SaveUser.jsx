import axios from "axios";

const SaveUser = () => {
  const user = {
    first_name: "Dergi",
    last_name: "Samayoa",
    birthday: "1973-01-01",
    email: "dergio@myweb.com",
    password: "mypassword",
  };

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

  return (
    <section>
      <div>Save User data</div>
    </section>
  );
};

export default SaveUser;
