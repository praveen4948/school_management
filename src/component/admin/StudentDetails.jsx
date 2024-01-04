import React, { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom'
import studentimage from "../../utils/student_logo.png";
import { AdminNavbar } from "../AdminNavbar";
import { Link, useParams } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";

export const StudentDetails = () => {
  const [student_data, setstudent_data] = useState();
  const { id } = useParams();
  useEffect(() => {
    const get_student_details = async () => {
      try {
        await axios
          .get(`http://localhost:8000/get_students/${id}`)
          .then((res) => {
            // console.log("ok");
            setstudent_data(res.data);
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (error) {
        console.log("Error:", error);
      }
    };
    get_student_details();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="dashboard fs-5" style={{ marginLeft: "13.1%" }}>
        <div className="heading fs-1">
          <u>Student Details</u>
        </div>
        <hr />
        <Link to="/admin/student_list">
          <MDBBtn style={{ display: "flex", marginBottom: "1%" }} outline>
            Back
          </MDBBtn>
        </Link>

        <div className="top">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body d-flex">
              <div className="image">
                <img
                  src={studentimage}
                  alt="studentimage"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="content ms-3" style={{ width: "100%" }}>
                <div className="upper d-flex justify-content-between">
                  <h1 className="name">
                    {student_data?.first_name} {student_data?.last_name}
                  </h1>
                  <h2 className="id">Id: {student_data?.id}</h2>
                </div>
                <hr
                  style={{
                    width: "100%",
                    borderTop: "2px solid #ccc",
                    margin: "0 0 10xp 0",
                  }}
                />
                <div className="lower d-flex justify-content-between">
                  <div className="text-left">
                    <div>Class</div>
                    <div className="bold">
                      {student_data?.class.toUpperCase()}{" "}
                    </div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Sec</div>
                    <div className="bold">
                      {student_data?.section}
                    </div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Attendance</div>
                    <div className="bold">85% (32 leave)</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Birth Date</div>
                    <div className="bold">{student_data?.dob}</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Best Score</div>
                    <div className="bold">Physics (91%)</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Class Teacher</div>
                    <div className="bold">Pooja Ji</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="bottom d-flex flex-wrap">
          <div className="card card1 col-md-3">
            <h5 className="card-header">Personal Information</h5>
            <div className="card-body">
              <div className="text-left">
                Gender
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; Age
              </div>
              <div className="bold text-left">
                {student_data?.gender}
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 15
              </div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Contact</div>
              <div className="bold text-left">{student_data?.contact}</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Address</div>
              <p className="bold text-left">{student_data?.address}</p>
            </div>
          </div>
          <div className="card card2 col-md-3">
            <h5 className="card-header">Parent Information</h5>
            <div className="card-body">
              <div className="text-left">Father name</div>
              <div className="bold text-left">{student_data?.father_name}</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Mother Name</div>
              <div className="bold text-left">{student_data?.mother_name}</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Father Occupation</div>
              <p className="bold text-left">{student_data?.father_occupation}</p>
            </div>
          </div>
          <div className="card card3 col-md-3">
            <h5 className="card-header">Academic Information</h5>
            <div className="card-body">
              <div className="text-left">Previous Term Grades</div>
              <div className="bold text-left">B+ / 70 percent</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Best Performed Subject</div>
              <div className="bold text-left">Mathematics</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Weak Subject</div>
              <div className="bold text-left">Geometry</div>
            </div>
          </div>
          <div className="card card3 col-md-3">
            <h5 className="card-header">Extra Curricular Activity</h5>
            <div className="card-body">
              <div className="text-left">Sports</div>
              <div className="bold text-left">Badminton</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Art</div>
              <div className="bold text-left">No Participation</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Music</div>
              <div className="bold text-left">Dholak</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
