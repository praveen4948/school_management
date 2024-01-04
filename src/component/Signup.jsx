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
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export const Signup = () => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [user_type, setUser_type] = useState("student");

  async function handle_login(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
          first_name,
          last_name,
          contact,
          user_type
        })
        .then((res) => {
          if (res.data === "exit") {
            setError("User already exit");
          } else {
            navigate("/", { state: res.data });
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
          <u>Signup Form</u>
        </h2>
        <h4 className="text-danger">{error}</h4>

        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

        <MDBInput
          wrapperClass="mb-4"
          label="First Name"
          id="form1"
          type="email"
          onChange={(e) => {
            setFirst_name(e.target.value);
          }}
        />

        <MDBInput
          wrapperClass="mb-4"
          label="Last Name"
          id="form2"
          type="email"
          onChange={(e) => {
            setLast_name(e.target.value);
          }}
        />

        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form3"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <MDBInput
          wrapperClass="mb-4"
          label="Contact Number"
          id="form4"
          type="email"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form5"
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
          Sign up
        </MDBBtn>

        <div className="text-center">
          <p>
            Already member? <a href="/">Login</a>
          </p>
          <p>or sign up with:</p>

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
