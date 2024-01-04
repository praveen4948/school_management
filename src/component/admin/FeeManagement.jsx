import React, { useEffect, useState } from "react";
import { AdminNavbar } from "../AdminNavbar";
import { MDBBtn, MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";

// userFeeDetail.feeData[`${feeKey}_fee`]

export const FeeManagement = () => {
  const [feeReciept, setFeeReciept] = useState([]);
  const currentMonth = new Date().getMonth() + 1 - 4;
  const [activeTab, setActiveTab] = useState("fee_submit");
  const [student_id, setStudent_id] = useState();
  const [showAfterStudentId, setShowAfterStudentId] = useState(false);

  const [error, setError] = useState("");
  const [fee, setFee] = useState({
    class: "",
    admission_fee: 0,
    re_admission_fee: 0,
    tution_fee: 0,
    exam_fee: 0,
  });
  const [feeDetails, setFeeDetails] = useState([]);
  const [userFeeDetail, setUserFeeDetail] = useState([]);
  const [submittedFee, setSubmittedFee] = useState();
  // const [currentFee, setCurrentFee] = useState();
  const intial_fee_data = {
    student_id: student_id,
    class: userFeeDetail?.userData?.class,
    admission_fee: 0,
    re_admission_fee: 0,
    pending_fee: 0,
    month_fee: [
      {
        month: "mar",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "apr",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "may",
        tution_fee: 0,
        pending_fee: 0,
        exam_fee: 0,
        van_fee: 0,
      },
      {
        month: "jun",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "jul",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "aug",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "sep",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "oct",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "nov",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },

      {
        month: "dec",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
      {
        month: "jan",
        tution_fee: 0,
        pending_fee: 0,
        exam_fee: 0,
        van_fee: 0,
      },
      {
        month: "fab",
        tution_fee: 0,
        exam_fee: 0,
        pending_fee: 0,
        van_fee: 0,
      },
    ],
  };

  const create_fee = async (event) => {
    event.preventDefault();
    if (
      !fee.class ||
      fee.class === "-1" ||
      !fee.admission_fee ||
      !fee.re_admission_fee ||
      !fee.tution_fee ||
      !fee.exam_fee
    ) {
      alert("Please fill form");
    } else {
      // save data in the class table and redirect to fee details table.
      try {
        await axios
          .post("http://localhost:8000/add_fee_detail", fee)
          .then((res) => {
            if (res) {
              setActiveTab("fee_list");

              get_fee_list();
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (error) {
        console.log(error);
      }
    }

    console.log(fee);
  };
  const get_fee_list = async () => {
    await axios.get("http://localhost:8000/fee_list").then((res) => {
      setFeeDetails(res.data);
    });
  };
  useEffect(() => {
    get_fee_list();
  }, []);

  const [ammount, setAmmount] = useState(0);

  const get_submitted_fee = async (student_class) => {
    try {
      await axios
        .get(
          `http://localhost:8000/get_submit_fee/${student_id}?class=${student_class}`
        )
        .then((res) => {
          if (res.data === "not_found") {
            setSubmittedFee(intial_fee_data);
          } else {
            setSubmittedFee(res.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // development

  const handle_next = async () => {
    await axios
      .get(`http://localhost:8000/fee_details_by_student_id/${student_id}`)
      .then((res) => {
        if (res.data.not_found) {
          setError(res.data.not_found);
          setShowAfterStudentId(false);
        } else {
          setError("");
          setShowAfterStudentId(true);
          setUserFeeDetail(res.data);
          intial_fee_data.class = res.data.userData.class;
          get_submitted_fee(res.data.userData.class);
        }
        console.log("fee details: ", res.data);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
      const tdElements = document.querySelectorAll('#checked-background');

      // Loop through each element and remove the 'id' attribute
      tdElements.forEach((tdElement) => {
        tdElement.removeAttribute('id');
      });
      setForceRerender(!forceRerender);
  };

  const [forceRerender, setForceRerender] = useState(false);

  const handle_pay = async () => {
    await axios
      .put(`http://localhost:8000/add_submit_fee/${student_id}`, submittedFee)
      .then((res) => {
        if (res.data.message) {
          //rerender the same page
          setForceRerender(!forceRerender);
        }
      });
      const tdElements = document.querySelectorAll('#checked-background');

      // Loop through each element and remove the 'id' attribute
      tdElements.forEach((tdElement) => {
        tdElement.removeAttribute('id');
      });
  };

  let currentFee = submittedFee;
  const updateFee = (month, feeType, newValue) => {
    // const updatedFeeData = { ...currentFee };

    const targetMonthIndex = submittedFee.month_fee.findIndex(
      (data) => data.month === month.toLowerCase()
    );

    if (targetMonthIndex !== -1) {
      submittedFee.month_fee[targetMonthIndex][feeType] = newValue;
    }
  };

  const updateFeeReciept = (month, feeType, fee) => {
    let updatedData = [...feeReciept];
    const targetIndex = updatedData.findIndex(
      (data) => data[feeType] !== undefined
    );

    if (fee === 0) {
      // If fee is 0, remove the month and fee object
      updatedData.forEach((data) => {
        if (data[feeType]) {
          delete data[feeType][month];
          if (Object.keys(data[feeType]).length === 0) {
            // If the feeType has no objects, remove the feeType
            delete data[feeType];
          }
        }
      });
    } else {
      if (targetIndex !== -1) {
        // If feeType is present, update the existing entry or create the month key
        updatedData[targetIndex][feeType][month] = fee;
      } else {
        // If feeType is not present, create a new entry
        const newEntry = { [feeType]: { [month]: fee } };
        updatedData.push(newEntry);
      }
    }

    return updatedData;
  };

  const handleCheckboxChange = (event, feeType, month, fee) => {
    const isChecked = event.target.checked;

    updateFee(month, feeType, isChecked ? fee : 0);
    setFeeReciept(updateFeeReciept(month, feeType, isChecked ? fee : 0));

    const tdElement = event.target.closest("td");

    console.log(tdElement);

    tdElement.setAttribute("id", "checked-background");
    // if (isChecked) {
    // } else {
    //   // tdElement.classList.remove('checked-background');
    //   // tdElement.classList.remove('absent');
    //   // tdElement.classList.remove('present');
    // }

    console.log(tdElement);

    // console.log(feeReciept);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const renderFeeRow = (feeType, feeKey, fee) => {
    return (
      <tr key={feeKey}>
        <th scope="row">{capitalizeFirstLetter(feeType)}</th>
        {submittedFee?.month_fee.map((data, index) => (
          <td
            key={index}
            className={
              data[`${feeKey}_fee`] <= 0
                ? index <= (currentMonth + 9) % 12
                  ? "absent"
                  : "na"
                : "present"
            }
          >
            {data[`${feeKey}_fee`] <= 0 ? (
              index <= (currentMonth + 9) % 12 ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <MDBCheckbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        `${feeKey}_fee`,
                        data.month,
                        fee
                      )
                    }
                  />
                  <span>Pending</span>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <MDBCheckbox
                    onChange={(event) =>
                      handleCheckboxChange(
                        event,
                        `${feeKey}_fee`,
                        data.month,
                        fee
                      )
                    }
                  />
                  <span>Waiting</span>
                </div>
              )
            ) : (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <MDBCheckbox
                  onChange={(event) =>
                    handleCheckboxChange(
                      event,
                      `${feeKey}_fee`,
                      data.month,
                      fee
                    )
                  }
                  defaultChecked
                />
                <span>{`Paid-${data[`${feeKey}_fee`]}`}</span>
              </div>
            )}
          </td>
        ))}
      </tr>
    );
  };

  const calculateTotalFee = (monthFeeObj) => {
    let totalFee = 0;
    Object.values(monthFeeObj).forEach((fee) => {
      totalFee += parseInt(fee, 10); // Assuming fee is a string, convert to integer
    });
    return totalFee;
  };

  const calculateGrandTotal = (feeReciept) => {
    let grandTotal = 0;

    feeReciept.forEach((feeTypeObj) => {
      Object.values(feeTypeObj).forEach((monthFeeObj) => {
        grandTotal += calculateTotalFee(monthFeeObj);
      });
    });

    return grandTotal;
  };

  return (
    <div>
      <div style={{ marginLeft: "13.1%" }}>
        <div
          className="contant"
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <AdminNavbar />
          <div className="fs-1">
            <u>Fee Management</u>
          </div>
          <hr />
          {/* Add tabs to switch between sections */}
          <div style={{ display: "flex", margin: "0 3% 1% auto" }}>
            <Button
              variant={activeTab === "fee_structure" ? "primary" : "secondary"}
              onClick={() => setActiveTab("fee_structure")}
            >
              Fee Structure
            </Button>
            <Button
              variant={activeTab === "fee_list" ? "primary" : "secondary"}
              onClick={() => setActiveTab("fee_list")}
            >
              Fee List
            </Button>
            <Button
              variant={activeTab === "fee_submit" ? "primary" : "secondary"}
              onClick={() => setActiveTab("fee_submit")}
            >
              Fee Submit
            </Button>
          </div>

          <div
            id="fee_structure"
            style={{
              display: activeTab === "fee_structure" ? "block" : "none",
            }}
          >
            <Form style={{ width: "99%" }}>
              <Row className="mb-4 ml-auto text-left">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Class</Form.Label>
                  <Form.Select
                    defaultValue="-1"
                    onChange={(e) => setFee({ ...fee, class: e.target.value })}
                  >
                    <option value="-1">Select Class...</option>
                    <option value="pg">PG</option>
                    <option value="nus">NUS</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">
                      1<sup>st</sup>
                    </option>
                    <option value="2">
                      2<sup>nd</sup>
                    </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Admission Fee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amount"
                    onChange={(e) =>
                      setFee({ ...fee, admission_fee: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Re-admission Fee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amount"
                    onChange={(e) =>
                      setFee({ ...fee, re_admission_fee: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Tution Fee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amount"
                    onChange={(e) =>
                      setFee({ ...fee, tution_fee: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Exam Fee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amount"
                    onChange={(e) =>
                      setFee({ ...fee, exam_fee: e.target.value })
                    }
                  />
                </Form.Group>
              </Row>
              <Button onClick={create_fee}>Create</Button>
            </Form>
          </div>
          <div
            id="fee_list"
            style={{
              width: "100%",
              display: activeTab === "fee_list" ? "block" : "none",
            }}
          >
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">Class</th>
                  <th scope="col">Addmission Fee</th>
                  <th scope="col">Readdmission Fee</th>
                  <th scope="col">Tution Fee</th>
                  <th scope="col">Exam Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeDetails.map((value, idx) => (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{value.class.toUpperCase()}</td>
                    <td>{value.admission_fee}</td>
                    <td>{value.re_admission_fee}</td>
                    <td>{value.tution_fee}</td>
                    <td>{value.exam_fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            id="fee_submit"
            style={{
              width: "100%",
              display: activeTab === "fee_submit" ? "block" : "none",
            }}
          >
            {/* form for student id  */}
            <div className="form">
              <MDBInput
                onChange={(e) => {
                  setStudent_id(e.target.value);
                }}
                id="student_id"
                wrapperClass="mb-4"
                label="Student ID"
              />
              <Link>
                <MDBBtn onClick={handle_next}>Next</MDBBtn>
              </Link>
            </div>
            <br />
            {/* end form for student id  */}
            <h3 className="text-danger">{error}</h3>
            {showAfterStudentId && (
              <div className="after_student_id" style={{ width: "100%" }}>
                <div className="attandence">
                  {/* student details  */}
                  <div className="status fs-5">
                    <div className="card" style={{ width: "100%" }}>
                      <div className="card-body d-flex">
                        <div className="content ms-3" style={{ width: "100%" }}>
                          <div className="lower d-flex justify-content-around">
                            <div className="text-left">
                              <div>Student Name</div>
                              <div className="bold">
                                {userFeeDetail.userData.first_name}{" "}
                                {userFeeDetail.userData.last_name}
                              </div>
                            </div>
                            <div className="with-border"></div>
                            <div className="text-left">
                              <div>Class</div>
                              <div className="bold">
                                {userFeeDetail.userData.class.toUpperCase()} -{" "}
                                {userFeeDetail.userData.section}
                              </div>
                            </div>
                            <div className="with-border"></div>
                            <div className="text-left">
                              <div>Father Name</div>
                              <div className="bold">
                                {userFeeDetail.userData.father_name}
                              </div>
                            </div>
                            <div className="with-border"></div>
                            <div className="text-left">
                              <div>Contact</div>
                              <div className="bold">
                                {userFeeDetail.userData.contact}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* fee structure */}
                  <div className="status fs-5">
                    <div className="card" style={{ width: "100%" }}>
                      <div className="card-body d-flex">
                        <div className="content ms-3" style={{ width: "100%" }}>
                          <div className="lower d-flex justify-content-around">
                            <div className="text-left">
                              <div>Admission Fee</div>
                              <div className="bold">
                                {userFeeDetail.feeData.admission_fee}/-
                              </div>
                            </div>
                            <div className="with-border"></div>
                            <div className="text-left">
                              <div>Readmission Fee</div>
                              <div className="bold">
                                {userFeeDetail.feeData.re_admission_fee}/-
                              </div>
                            </div>
                            <div className="with-border"></div>
                            <div className="text-left">
                              <div>Tution Fee</div>
                              <div className="bold">
                                {userFeeDetail.feeData.tution_fee}/-
                              </div>
                            </div>
                            <div className="with-border"></div>
                            <div className="text-left">
                              <div>Van Fee</div>
                              <div className="bold">
                                {userFeeDetail.feeData.van_fee
                                  ? userFeeDetail.feeData.van_fee
                                  : "not available"}
                                /-
                              </div>
                            </div>
                            <div className="with-border"></div>
                            <div className="text-left">
                              <div>Term Exam Fee</div>
                              <div className="bold">
                                {userFeeDetail.feeData.exam_fee}/-
                              </div>
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
                          {submittedFee?.month_fee.map((data, index) => (
                            <th key={index}>
                              {capitalizeFirstLetter(data.month)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {renderFeeRow(
                          "Tuition",
                          "tution",
                          userFeeDetail.feeData.tution_fee
                        )}
                        {renderFeeRow("Van", "van", 450)}
                        {renderFeeRow(
                          "Exam",
                          "exam",
                          userFeeDetail.feeData.exam_fee
                        )}
                        {/* {renderFeeRow("Pending", "pending")} */}
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <br />
                  {/* fee status  */}
                  <div
                    className="fee_status"
                    style={{ width: "100%", display: "flex" }}
                  >
                    <div
                      className="status_feesubmit"
                      style={{
                        height: "20%",
                        width: "40%",
                        marginLeft: "1%",
                        marginRight: "auto",
                      }}
                    >
                      <h3>Status and Fee submission</h3>
                      <table className="table table-striped table-hover text-left">
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
                      <h3>History</h3>
                      <table className="table table-striped table-hover">
                        <thead>
                          <th>Paid</th>
                          <th>Date</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1000/-</td>
                            <td>23-12-2023</td>
                          </tr>
                          <tr>
                            <td>200/-</td>
                            <td>23-12-2023</td>
                          </tr>
                          <tr>
                            <td>100/-</td>
                            <td>23-12-2023</td>
                          </tr>
                          <tr>
                            <td>200/-</td>
                            <td>23-12-2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="history"
                      style={{
                        width: "50%",
                        marginLeft: "1%",
                        marginRight: "auto",
                      }}
                    >
                      {/* fee submit */}
                      <h3>Calculating fee....</h3>
                      <table className="table table-hover text-left">
                        <thead>
                          <tr className="table-primary">
                            <th>Fee Type</th>
                            <td>Months</td>
                            <td>Fee</td>
                          </tr>
                        </thead>
                        <tbody>
                          {feeReciept.map((feeTypeObj, index) => (
                            <tr key={index}>
                              {Object.entries(feeTypeObj).map(
                                ([feeType, monthFeeObj]) => (
                                  <>
                                    <td>{capitalizeFirstLetter(feeType)}</td>
                                    <td>
                                      {Object.keys(monthFeeObj)
                                        .map((month) =>
                                          capitalizeFirstLetter(month)
                                        )
                                        .join(", ")}
                                    </td>
                                    <td>{calculateTotalFee(monthFeeObj)}</td>
                                  </>
                                )
                              )}
                            </tr>
                          ))}
                          <tr className="table-success">
                            <th>
                              <b>Total</b>
                            </th>
                            <td></td>
                            <td>
                              <b>
                                <b>{calculateGrandTotal(feeReciept)}</b>/-
                              </b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <div
                        className="form"
                        style={{ width: "100%", marginLeft: "1%" }}
                      >
                        <MDBInput
                          onChange={(e) => {
                            setAmmount(e.target.value);
                          }}
                          id="student_id"
                          wrapperClass="mb-4"
                          label="Ammount"
                        />
                        <Link>
                          <MDBBtn onClick={handle_pay}>Pay</MDBBtn>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
