import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <div class="nav-link">
                <Link to="/login">
                  Login <span class="sr-only">(current)</span>
                </Link>
              </div>
            </li>
            <li class="nav-item active">
              <div class="nav-link">
                <Link to="/signup">
                  Signup <span class="sr-only">(current)</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
