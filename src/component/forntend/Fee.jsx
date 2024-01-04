import React from "react";
import { Navbar2 } from "../Navbar2";

export const Fee = () => {
  return (
    <div>
      <Navbar2 />

      <div className="fs-1">
        <u>Fee</u>
      </div>
      <br></br>
      <div className="attandence" style={{ marginLeft: "13.1%" }}>
        {/* fee structure */}
        <div className="status fs-5">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body d-flex">
              <div className="content ms-3" style={{ width: "100%" }}>
                {/* <hr style={{ width: "100%", borderTop: "2px solid #ccc", margin: "0 0 10xp 0" }} /> */}
                <div className="lower d-flex justify-content-around">
                  <div className="text-left">
                    <div>Admission Fee</div>
                    <div className="bold">1500/-</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Tution Fee</div>
                    <div className="bold">500/-</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Van Fee</div>
                    <div className="bold">400/-</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Term Exam Fee</div>
                    <div className="bold">100/-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* fee tracker  */}
        <div className="tracker">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Fee\Month</th>
                <th scope="col">Jan</th>
                <th scope="col">Feb</th>
                <th scope="col">Mar</th>
                <th scope="col">Apr</th>
                <th scope="col">May</th>
                <th scope="col">Jun</th>
                <th scope="col">Juk</th>
                <th scope="col">Aug</th>
                <th scope="col">Sep</th>
                <th scope="col">Oct</th>
                <th scope="col">Nov</th>
                <th scope="col">Dec</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Tution</th>
                <td className="present">Paid</td>
                <td className="present">Paid</td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
              </tr>
              <tr>
                <th scope="row">Van</th>
                <td className="present">Paid</td>
                <td className="absent">Pending</td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
              </tr>
              <tr>
                <th scope="row">Exam</th>
                <td className="">N/A</td>
                <td className="absent">Pending</td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
                <td className=""></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        {/* fee status  */}
        <div className="fee_status" style={{ width: "100%" }}>
          <table
            className="table table-striped table-hover text-left"
            style={{ width: "30%", marginLeft: "auto", marginRight: "10%" }}
          >
            <tbody>
              <tr>
                <th>Total Fee</th>
                <td>13023/-</td>
              </tr>
              <tr>
                <th>Total Paid Fee</th>
                <td>1323/-</td>
              </tr>
              <tr>
                <th>Total Pending Fee</th>
                <td>
                  <b>123/-</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
