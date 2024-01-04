import React from "react";
import { Navbar2 } from "../Navbar2";
import { Link, useParams } from "react-router-dom";

export const ClassResult = () => {
  let { id } = useParams();
  return (
    <div>
      <Navbar2 />
      <div
        style={{
          marginLeft: "13.1%",
        }}
      >
        <div
          className="fs-1 d-flex"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Link to="/result" className="back">
            <button
              type="button"
              className="btn btn-danger"
              data-mdb-ripple-init
            >
              <i className="fas fa-solid fa-arrow-left fs-5"></i>
            </button>
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <u>Class-{id}</u>
          </div>
        </div>
        <hr />

        <div className="result" style={{margin:'3% 4%'}}>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">FA1</th>
                <th scope="col">FA2</th>
                <th scope="col">Mid Term</th>
                <th scope="col">FA3</th>
                <th scope="col">FA4</th>
                <th scope="col">Last Term</th>
                <th scope="col">Total Marks</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Math</th>
                <td>23</td>
                <td>34</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>353</td>
                <td>A2</td>
              </tr>
              <tr>
                <th scope="row">Hindi</th>
                <td>23</td>
                <td>34</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>353</td>
                <td>A2</td>
              </tr>
              <tr>
                <th scope="row">English</th>
                <td>23</td>
                <td>34</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>24</td>
                <td>353</td>
                <td>A2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
