import React from "react";
import { AdminNavbar } from "../AdminNavbar";
import { Link, useParams } from "react-router-dom";

export const AttandenceResponse = () => {
  const { id } = useParams();
  return (
    <div>
      <AdminNavbar />
      <div style={{ marginLeft: "13.1%" }}>
        <div className="fs-1">
          <u>AttandenceResponse {id}</u>
        </div>
        <div className="operation text-left">
          <Link to={`/admin/attandenace_management/${id}`}>
            <button type="button" class="btn" data-mdb-ripple-init>
              Back
            </button>
          </Link>
          <select className="btn" type="button">
            <option>Select Month</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
        </div>
        <br />
        <div className="tracker">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Player Name/Date</th>
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
                <th scope="row">Ram</th>
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
                <th scope="row">Shayam</th>
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
                <th scope="row">Praveen</th>
                <td className="present">P</td>
                <td className="present">P</td>
                <td className="absent">A</td>
                <td className="present">P</td>
                <td className="present">P</td>
                <td className="absent">A</td>
                <td className="absent">A</td>
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
                <th scope="row">Satya</th>
                <td className="present">P</td>
                <td className="absent">A</td>
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
                <td className="absent">A</td>
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
                <th scope="row">Rudra</th>
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
                <td className="absent">A</td>
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
                <th scope="row">Raja Ram</th>
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
                <td className="absent">A</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
