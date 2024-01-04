import React from "react";
import { AdminNavbar } from "../AdminNavbar";
import studentimage from "../../utils/student_logo.png";

export const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />

      <div className="dashboard fs-5" style={{ marginLeft: "13.1%" }}>
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
                <div className="upper d-flex justify-content-start">
                  <h1 className="name">Praveen Maurya</h1>
                </div>
                <hr
                  style={{
                    width: "100%",
                    borderTop: "2px solid #ccc",
                    margin: "0 0 10xp 0",
                  }}
                />
                <div className="lower d-flex justify-content-around">
                  <div className="text-left">
                    <div>Class Teacher's</div>
                    <div className="bold">9 A</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Attendance</div>
                    <div className="bold">85% (32 leave)</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Birth Date</div>
                    <div className="bold">28th July</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Date of joining</div>
                    <div className="bold">28th July 2019</div>
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
                Mail
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 15
              </div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Contact</div>
              <div className="bold text-left">+91 234567890</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Address</div>
              <p className="bold text-left">Pebble street, Los Angeles</p>
            </div>
          </div>
          <div className="card card2 col-md-3">
            <h5 className="card-header">Parent Information</h5>
            <div className="card-body">
              <div className="text-left">Father name</div>
              <div className="bold text-left">Mr. Rajendra Prasad Maurya</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Mother Name</div>
              <div className="bold text-left">Mrs. Chandrawati Maurya</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Contact</div>
              <div className="bold text-left">+91 234567890</div>
              <hr style={{ width: "100%", borderTop: "2px dashed #ccc" }} />
              <div className="text-left">Father Occupation</div>
              <p className="bold text-left">Farmer</p>
            </div>
          </div>
          <div className="card card3 col-md-3">
            <h5 className="card-header">Academic Information</h5>
            <div className="card-body">
              <div className="text-left">Highest Qualification</div>
              <div className="bold text-left">B. A.</div>
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
