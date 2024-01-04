import React from "react";
import { Navbar2 } from "../Navbar2";

export const Attandence = () => {
  return (
    <div>
      <Navbar2 />

      <div className="fs-1">
        <u>Attandance</u>
      </div>
      <div className="attandence" style={{ marginLeft: "13.1%" }}>
        <div className="status fs-5">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body d-flex">
              <div className="content ms-3" style={{ width: "100%" }}>
                {/* <hr style={{ width: "100%", borderTop: "2px solid #ccc", margin: "0 0 10xp 0" }} /> */}
                <div className="lower d-flex justify-content-around">
                  <div className="text-left">
                    <div>Total Classes</div>
                    <div className="bold">132</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Attend</div>
                    <div className="bold">100</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Leave</div>
                    <div className="bold">20</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Holidays</div>
                    <div className="bold">12</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Percentage</div>
                    <div className="bold">91%</div>
                  </div>
                  <div className="with-border"></div>
                  <div className="text-left">
                    <div>Ranked</div>
                    <div className="bold">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="tracker">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Month/Date</th>
                <th scope="col">01</th>
                <th scope="col">02</th>
                <th scope="col">03</th>
                <th scope="col">04</th>
                <th scope="col">05</th>
                <th scope="col">06</th>
                <th scope="col">07</th>
                <th scope="col">08</th>
                <th scope="col">09</th>
                <th scope="col">10</th>
                <th scope="col">13</th>
                <th scope="col">14</th>
                <th scope="col">15</th>
                <th scope="col">16</th>
                <th scope="col">17</th>
                <th scope="col">18</th>
                <th scope="col">19</th>
                <th scope="col">20</th>
                <th scope="col">21</th>
                <th scope="col">22</th>
                <th scope="col">23</th>
                <th scope="col">24</th>
                <th scope="col">25</th>
                <th scope="col">26</th>
                <th scope="col">27</th>
                <th scope="col">28</th>
                <th scope="col">29</th>
                <th scope="col">30</th>
                <th scope="col">31</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Mar</th>
                <td className="present">P</td>
                <td className="present">P</td>
                <td className="absent">A</td>
                <td className="present">P</td>
                <td className="present">P</td>
                <td className="absent">A</td>
                <td className="present">P</td>
                <td className="present">P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Apr</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">May</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Jun</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Jul</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Aug</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Sep</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Oct</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Nov</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Dec</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Jan</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Feb</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Mar</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
