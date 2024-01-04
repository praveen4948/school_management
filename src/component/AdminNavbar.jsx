import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../utils/sps1.png";

export const AdminNavbar = () => {
  const location = useLocation();
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };
  return (
    <div>
      <header>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4 text-left">
              <Link
                to="/admin"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  isActiveRoute("/admin") ? "active" : ""
                }`}
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>
              <Link
                to="/admin/fee_management"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  isActiveRoute("/admin/fee_management") ? "active" : ""
                }`}
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Fee Management</span>
              </Link>
              <Link
                to="/admin/student_list"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  isActiveRoute("/admin/student_list") ? "active" : ""
                }`}
              >
                <i className="fas fa-duotone fa-indian-rupee-sign fa-fw me-3"></i>
                <span>Studnet List</span>
              </Link>
              <Link
                to="/admin/attandenace_management"
                className={`list-group-item list-group-item-action py-2 ripple ${
                  isActiveRoute("/admin/attandenace_management") ? "active" : ""
                }`}
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Att. Management</span>
              </Link>
            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <Link className="navbar-brand" href="#">
              <img
                src={logo}
                height="25"
                width="300"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>

            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item dropdown hidden-arrow d-flex align-items-center">
                {/* Hi {location.state.first_name} */}
                Hi first name
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="22"
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item active">
                <div className="nav-link">
                  <Link to="/logout">
                    Logout <span className="sr-only">(current)</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main style={{ "margin-top": "58px" }}>
        <div className="container pt-4"></div>
      </main>
    </div>
  );
};
