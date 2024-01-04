import React, { useState } from "react";
import { Navbar2 } from "../Navbar2";
import axios from "axios";
import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { AdminNavbar } from "../AdminNavbar";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useStaticPicker } from "@mui/x-date-pickers/internals";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const AddStudent = () => {
  const generateRandomId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const [data, setData] = useState({
    id: generateRandomId(),
    first_name: "",
    last_name: "",
    section: "",
    class: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    contact: "",
    father_name: "",
    mother_name: "",
    father_contact: "",
    father_occupation: "",
    user_type: "student",
    status: "Active",
  });
  const [error, setError] = useState('')
  const handelSubmit = async (e) => {
    e.preventDefault();
    // save data and redirect to student list
    try {
      await axios
        .post("http://localhost:8000/signup", data)
        .then((res) => {
          if (res.data.message) {
            setError(res.data.message);
          } else {
            setError('');
            navigate("/admin/student_list");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const handleDateChange = (date) => {
    // Extract only the date part (YYYY-MM-DD) from the selected date
    const formattedDate = date.toISOString().split("T")[0];

    setData({ ...data, dob: formattedDate });
  };
  console.log(data);
  return (
    <div>
      <AdminNavbar />
      <div style={{ marginLeft: "13.1%" }}>
        <div className="fs-1">
          <u>Add Student</u>
        </div>
        <hr />
        <Link to="/admin/student_list">
          <MDBBtn style={{ display: "flex", marginBottom: "1%" }} outline>Back</MDBBtn>
        </Link>

        <h3 className="text-danger">{error}</h3>

        <div
          className="form"
          style={{
            display: "flex",
            justifyContent: "space-around",
            // marginLeft: "13.1%",
          }}
        >
          <div className="genral_info card p-3" style={{ width: "49%" }}>
            <h3>Genral Information</h3>
            <br />
            <form>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    id="form6Example1"
                    label="First name"
                    onChange={(e) =>
                      setData({ ...data, first_name: e.target.value })
                    }
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    id="form6Example2"
                    label="Last name"
                    onChange={(e) =>
                      setData({ ...data, last_name: e.target.value })
                    }
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="mb-4">
                <MDBCol>
                  <Form.Select
                    defaultValue="-1"
                    onChange={(e) =>
                      setData({ ...data, class: e.target.value })
                    }
                  >
                    <option value="-1">Select Class...</option>
                    <option value="pg">PG</option>
                    <option value="nus">NUS</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Form.Select>
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    id="form6Example1"
                    label="Section"
                    onChange={(e) =>
                      setData({ ...data, section: e.target.value })
                    }
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="mb-4">
                <MDBCol>
                  <DatePicker
                    selected={data.dob ? new Date(data.dob) : null}
                    onChange={handleDateChange}
                    customInput={
                      <MDBInput
                        id="form6Example1"
                        label="Date of birth"
                        readOnly // Ensure the input is read-only to prevent direct input
                      />
                    }
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    id="form6Example2"
                    label="Gender"
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    type="email"
                    id="form6Example5"
                    label="Email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    type="tel"
                    id="form6Example6"
                    label="Phone"
                    onChange={(e) =>
                      setData({ ...data, contact: e.target.value })
                    }
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                id="form6Example4"
                label="Address"
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </form>
          </div>
          <div className="genral_info card p-3" style={{ width: "49%" }}>
            <h3>Parent Information</h3>
            <br />
            <form>
              <MDBInput
                wrapperClass="mb-4"
                id="form6Example3"
                label="Father Name"
                onChange={(e) =>
                  setData({ ...data, father_name: e.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                id="form6Example4"
                label="Mother Name"
                onChange={(e) =>
                  setData({ ...data, mother_name: e.target.value })
                }
              />

              <MDBInput
                wrapperClass="mb-4"
                type="tel"
                id="form6Example6"
                label="Phone"
                onChange={(e) =>
                  setData({ ...data, father_contact: e.target.value })
                }
              />

              <MDBInput
                wrapperClass="mb-4"
                textarea
                id="form6Example7"
                rows={4}
                label="Father Occupation"
                onChange={(e) =>
                  setData({ ...data, father_occupation: e.target.value })
                }
              />
            </form>
          </div>
        </div>

        <MDBBtn
          className="m-5"
          onClick={handelSubmit}
          block
          style={{ width: "20%" }}
        >
          Submit
        </MDBBtn>
      </div>
    </div>
  );
};
