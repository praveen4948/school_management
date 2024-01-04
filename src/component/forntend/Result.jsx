import React from "react";
import { Navbar2 } from "../Navbar2";
import { Link } from "react-router-dom";

export const Result = () => {
  return (
    <div>
      <Navbar2 />
      <div className="fs-1">
        <u>Progress</u>
      </div>
      <br />
      <div className="result card" style={{ marginLeft: "13.1%" }}>
        <table class="table table-hover text-left">
          <thead>
            <tr className="table-secondary">
              <th scope="col">Class</th>
              <th scope="col">Percentage</th>
              <th scope="col">Ranks</th>
              <th scope="col">Status</th>
              <th scope="col">Session</th>
              <th scope="col">Class Teacher</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <th scope="row">4</th>
              <td>50 %</td>
              <td>4<sup>th</sup></td>
              <td>Pass</td>
              <td>2023-24</td>
              <td>Pooja</td>
              <td>
                <Link to = "/result/4">
                <button type="button" class="btn btn-info" data-mdb-ripple-init>
                  Info
                </button>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>23 %</td>
              <td>4<sup>th</sup></td>

              <td>Fall</td>
              <td>2022-23</td>
              <td>Shivangi</td>
              <td>
                <Link to={{ pathname: "/result", search: "?id=4" }} >
                <button type="button" class="btn btn-info" data-mdb-ripple-init>
                  Info
                </button>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>80 %</td>
              <td>3<sup>rd</sup></td>

              <td>Pass</td>
              <td>2021-22</td>
              <td>Pooja</td>
              <td>
                <Link to = "/result/4">
                <button type="button" class="btn btn-info" data-mdb-ripple-init>
                  Info
                </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
