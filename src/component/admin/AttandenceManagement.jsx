import React from "react";
import { AdminNavbar } from "../AdminNavbar";
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export const AttandenceManagement = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="attandance_management" style={{ marginLeft: "13.1%" }}>
        <div className="heading fs-1">
          <u>Attandance Management</u>
        </div>
        <br />
        <MDBDropdown>
          <MDBDropdownMenu alwaysOpen>
            <MDBDropdownItem
              childTag="span"
              className="dropdown-item-text"
            >
              Select Class
            </MDBDropdownItem>
            <Link to = '/admin/attandenace_management/nus'><MDBDropdownItem className="dropdown-item-text">Nus</MDBDropdownItem></Link>
            <Link to = '/admin/attandenace_management/lkg'><MDBDropdownItem className="dropdown-item-text">LKG</MDBDropdownItem></Link>
            <Link to = '/admin/attandenace_management/ukg'><MDBDropdownItem className="dropdown-item-text">UKG</MDBDropdownItem></Link>
            <Link to = '/admin/attandenace_management/1'><MDBDropdownItem className="dropdown-item-text">1<sup>st</sup></MDBDropdownItem></Link>
            <Link to = '/admin/attandenace_management/2'><MDBDropdownItem className="dropdown-item-text">2<sup>nd</sup></MDBDropdownItem></Link>
            <Link to = '/admin/attandenace_management/3'><MDBDropdownItem className="dropdown-item-text">3<sup>rd</sup></MDBDropdownItem></Link>
            <Link to = '/admin/attandenace_management/4'><MDBDropdownItem className="dropdown-item-text">4<sup>th</sup></MDBDropdownItem></Link>
            <Link to = '/admin/attandenace_management/5'><MDBDropdownItem className="dropdown-item-text">5<sup>th</sup></MDBDropdownItem></Link>
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
    </div>
  );
};
