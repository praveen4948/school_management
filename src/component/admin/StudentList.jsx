import React, { useEffect, useState } from "react";
import { AdminNavbar } from "../AdminNavbar";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const StudentList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8000/get_students")
          .then((res) => {
            console.log(res.data);
            setList(res.data); // Assuming the data you want is in the response.data
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the asynchronous function
  }, []);

  const toggle_status = async (id, status) => {
    // alert(!status)
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, status: status } : item
    );
    try {
      await axios
        .post(`http://localhost:8000/edit_student/${id}`, { status: status })
        .then((res) => {
          if (res) {
            setList(updatedList);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="contant" style={{ marginLeft: "13.1%" }}>
        <div className="heading fs-1">
          <u>Student List</u>
        </div>
        <hr />
        <Link to="/admin/add_student">
          <MDBBtn className="btn btn-secondary" style={{ display: "flex", margin: "0 3% 1% auto" }}>
            Add student
          </MDBBtn>
        </Link>
        <div className="student_table">
          <div className="result">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Student ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Class</th>
                  <th scope="col">Section</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                  <th scope="col">type(not show on product)</th>
                </tr>
              </thead>
              <tbody>
                {list?.map((value, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value.id}</td>
                    <td>
                      {value.first_name} {value.last_name}
                    </td>
                    <td>{value.class}</td>
                    <td>{value.section}</td>
                    <td>{value.contact}</td>
                    <td>{value.email}</td>
                    <td className={value.status ? `text-success` : `text-danger`}>{value.status ? `Active` : `Inactive` }</td>
                    <td>
                      <Link to={`/admin/student_list/${value.id}`}>
                        <MDBBtn
                          className="mx-2"
                          tag="a"
                          color="info"
                          outline
                          floating
                        >
                          <MDBIcon fas icon="file" />
                        </MDBBtn>
                      </Link>
                      <Link to={`/admin/edit_student/${value.id}`}>
                        <MDBBtn
                          className="mx-2"
                          tag="a"
                          color="warning"
                          outline
                          floating
                        >
                          <MDBIcon fas icon="edit" />
                        </MDBBtn>
                      </Link>

                      <MDBBtn
                        className="mx-2"
                        tag="a"
                        color={value.status?`danger`:`success`}
                        outline
                        floating
                        onClick={() => toggle_status(value.id, !value.status)}
                      >
                        <MDBIcon fas icon={value.status ? `pause` : `play`} />
                      </MDBBtn>
                    </td>
                    <td>{value.user_type}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
