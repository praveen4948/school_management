import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Login } from "./component/Login";
import { Signup } from "./component/Signup";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { Dashboard } from "./component/forntend/Dashboard";
import { Attandence } from "./component/forntend/Attandence";
import { Fee } from "./component/forntend/Fee";
import { Result } from "./component/forntend/Result";
import { Navbar2 } from "./component/Navbar2";
import { ClassResult } from "./component/forntend/ClassResult";
import { AdminDashboard } from "./component/admin/AdminDashboard";
import { AttandenceManagement } from "./component/admin/AttandenceManagement";
import { FeeManagement } from "./component/admin/FeeManagement";
import { StudentList } from "./component/admin/StudentList";
import { AttandenceManagementClass } from "./component/admin/AttandenceManagementClass";
import { AttandenceResponse } from "./component/admin/AttandenceResponse";
import { AddStudent } from "./component/admin/AddStudent";
import { StudentDetails } from "./component/admin/StudentDetails";
import { Logout } from "./component/Logout";
import { useEffect } from "react";
import { EditStudent } from "./component/admin/EditStudent";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const storedUserData = sessionStorage.getItem('userData');

  useEffect(() => {
    if(!storedUserData){
      navigate("/login");
    }
  }, [])

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/attandence" element={<Attandence />} />
        <Route path="/fee" element={<Fee />} />
        <Route path="/result" element={<Result />} />
        <Route path="/result/:id" element={<ClassResult />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/fee_management" element={<FeeManagement />} />
        <Route path="/admin/student_list" element={<StudentList />} />
        <Route
          path="/admin/attandenace_management"
          element={<AttandenceManagement />}
        />
        <Route
          path="/admin/attandenace_management/:id"
          element={<AttandenceManagementClass />}
        />
        <Route
          path="/admin/attandenace_management/check_response/:id"
          element={<AttandenceResponse />}
        />
        <Route
          path="/admin/add_student"
          element={<AddStudent />}
        />
        <Route
          path="/admin/student_list/:id"
          element={<StudentDetails />}
        />
        <Route
          path="/admin/edit_student/:id"
          element={<EditStudent />}
        />
      </Routes>
    </div>
  );
}
export default App;
