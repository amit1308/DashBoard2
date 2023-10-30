import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { cred } from "../cred";

function Login() {
  const history = useNavigate();

  const [formValues, setFormvalues] = useState({
    email: "",
    password: "",
  });
  //   const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  async function submit(e) {
    console.log({ formValues });
    e.preventDefault();
    console.log(cred);
    if (
      formValues?.email === cred?.email &&
      formValues?.password === cred?.password
    ) {
      window.localStorage.setItem("email", JSON.stringify(formValues?.email));
      window.localStorage.setItem(
        "password",
        JSON.stringify(formValues?.password)
      );
      history("/Landing", { state: { id: formValues?.email } });
    } else {
      alert("User have not sign up");
    }

    // try {
    //   await axios
    //     .post("http://localhost:8000/", {
    //       email: formValues?.email,
    //       password: formValues?.password,
    //     })
    //     .then((res) => {
    //       if (res.data == "exist") {
    //         window.localStorage.setItem(
    //           "email",
    //           JSON.stringify(formValues?.email)
    //         );
    //         window.localStorage.setItem(
    //           "password",
    //           JSON.stringify(formValues?.password)
    //         );
    //         history("/Landing", { state: { id: formValues?.email } });
    //       } else if (res.data == "notexist") {
    //         alert("User have not sign up");
    //       }
    //     })
    //     .catch((e) => {
    //       alert("wrong details");
    //       console.log(e);
    //     });
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return (
    <div class="wrapper">
      <form class="login" onSubmit={submit}>
        <p class="title">Log in</p>
        <input
          type="email"
          name="email"
          value={formValues?.email}
          onChange={handleChange}
          placeholder="Email ID"
          autofocus
        />
        <i class="fa fa-user"></i>
        <input
          type="password"
          name="password"
          value={formValues?.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <i class="fa fa-key"></i>
        <a href="#">Forgot your password?</a>
        <button>
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </button>
      </form>
      <footer>
        {/* <a target="blank" href="https://aaensa.com/">
          NexZen
        </a> */}
      </footer>
    </div>
  );
}

export default Login;
