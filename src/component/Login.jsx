import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handle_login(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          sessionStorage.setItem('userData', JSON.stringify(res.data));
          if (res.data === 'invalid credential') {
            setError("Invalid Credential.");
          } else if(res.data.user_type === 'student'){
            console.log(res.data);
            alert('student')
            navigate("/", { state: res.data });
          } else if(res.data.user_type === 'admin') {
            alert('admin')
            navigate("/admin", { state: res.data });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <Navbar />

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h2>
          <u>Login Form</u>
        </h2>

        <h4 className="text-danger">{error}</h4>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" onClick={handle_login}>
          Log in
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="/signup">Register</a>
          </p>
          <p>or sign in with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </>
  );
};
