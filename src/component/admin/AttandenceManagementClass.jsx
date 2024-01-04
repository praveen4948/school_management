import React from "react";
import { AdminNavbar } from "../AdminNavbar";
import { Link, useParams } from "react-router-dom";

export const AttandenceManagementClass = () => {
  let { id } = useParams();
  return (
    <div>
      <div className="contant" style={{ marginLeft: "13.1%" }}>
        <AdminNavbar />
        <div className="fs-1">
          <u>AttandenceManagementClass-{id}</u>
        </div>
        <div
          className="operation"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/admin/attandenace_management">
            <button type="button" class="btn" data-mdb-ripple-init>
              Back
            </button>
          </Link>
          <Link to={`/admin/attandenace_management/check_response/${id}`}>
            <button type="button" class="btn" data-mdb-ripple-init>
              Check Response
            </button>
          </Link>
        </div>
        <br />
        <div className="result card">
          <table class="table table-hover">
            <thead>
              <tr className="table-secondary">
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <th scope="row">1</th>
                <th scope="row">Praveen Maurya</th>
                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Link to="#">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-mdb-ripple-init
                    >
                      Present
                    </button>
                  </Link>
                  <Link to="#">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-mdb-ripple-init
                    >
                      Absent
                    </button>
                  </Link>
                </td>
                <td className="text-success">Present</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th scope="row">Pooja</th>
                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Link to="#">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-mdb-ripple-init
                    >
                      Present
                    </button>
                  </Link>
                  <Link to="#">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-mdb-ripple-init
                    >
                      Absent
                    </button>
                  </Link>
                </td>
                <td className="text-danger">Absent</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <th scope="row">Satya</th>
                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Link to="#">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-mdb-ripple-init
                    >
                      Present
                    </button>
                  </Link>
                  <Link to="#">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-mdb-ripple-init
                    >
                      Absent
                    </button>
                  </Link>
                </td>
                <td>Waiting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
