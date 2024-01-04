const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { users, fees, submitted_fees } = require("./mongo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/get_students", cors(), async (req, res) => {
  try {
    const data = await users.find({});
    res.json(data);
  } catch (e) {
    console.log("Error: ", e);
  }
});
app.get("/get_students/:id", cors(), async (req, res) => {
  const student_id = req.params.id;
  console.log(student_id);
  try {
    const data = await users.findOne({ id: student_id });
    res.json(data);
  } catch (e) {
    console.log("Error: ", e);
  }
});
app.post("/edit_student/:id", async (req, res) => {
  const student_id = req.params.id;
  const data = req.body;
  try {
    const result = await users.updateOne(
      { id: student_id },
      { $set: data },
      { upsert: true }
    );
    if (result) {
      res.json(result[0]);
    }
  } catch (e) {
    console.log(e);
  }
});

// api for login
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await users.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json(check);
    } else {
      res.json("invalid credential");
    }
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/signup", async (req, res) => {
  const { email, first_name, last_name, contact } = req.body;
  if (!email || !first_name || !last_name || !contact) {
    res.send("email, first_name, last_name, contact is required.");
  }
  const data = {
    ...req.body,
    status: 1, // You can set any default value for the "status" field.
    password:req.body.email
  };

  try {
    // const check = await users.findOne({ email: email });

    // if (check) {
    //   res.json("exit");
    // } else {
    const check = await users.findOne({email: email});
    if(check){
      res.json({message:'Email already exit'})
    }
    const response = await users.insertMany([data]);
    res.json(response[0]);
    // }
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.post("/add_fee_detail", async (req, res) => {
  const { admission_fee, re_admission_fee, tution_fee, exam_fee } = req.body;
  const clas = req.body.class;
  const data = req.body;
  if (
    !clas ||
    !admission_fee ||
    !re_admission_fee ||
    !tution_fee ||
    !exam_fee
  ) {
    res.end(
      "Class, admission fee, readmission fee, tution fee, exam fee must be required."
    );
  }
  try {
    const result = await fees.updateOne(
      { class: data.class },
      { $set: data },
      { upsert: true }
    );
    if (result) {
      res.json(result[0]);
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/fee_list", async (req, res) => {
  try {
    const data = await fees.find({});
    if (data) {
      res.json(data);
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/fee_details_by_student_id/:student_id", async (req, res) => {
  const student_id = req.params.student_id;
  try {
    const userData = await users.findOne({ id: student_id });

    if (!userData) {
      console.log("User not found");
      res.json({ not_found: "Studnet does not found." });
    }

    const userClass = userData.class;

    const feeData = await fees.findOne(
      { class: userClass },
      "admission_fee re_admission_fee tution_fee exam_fee"
    );

    if (!feeData) {
      res.json({ not_found: "Fee structure not found for the user class." });
    }

    const combinedData = {
      userData,
      feeData,
    };

    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});


app.get("/get_submit_fee/:student_id", async (req, res) => {
  const student_id = req.params.student_id;
  const student_class = req.query.class;
  try {
    const response = await submitted_fees.findOne(
      { student_id: student_id, class: student_class}
    );

    if (response) {
      res.json(response);
    } else {
      res.json("not_found");
    }
  } catch (error) {
    console.log("Error in fetching: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.put("/add_submit_fee/:student_id", async (req, res) => {
  const student_id = req.params.student_id;
  const clas = req.body.class;
  try {
    const updatedData = await submitted_fees.findOneAndUpdate(
      { student_id: student_id, class: clas },
      { $set: req.body },
      { new: true, upsert: true }
    );

    if (updatedData) {
      res.json({message:true,data:updatedData});
    } else {
      res.json("error in insertion");
    }
  } catch (error) {
    console.log("Error in insertion: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8000, () => {
  console.log("port running on 8000....");
});
