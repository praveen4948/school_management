const mongoose = require("mongoose");

const username = "praveenmauryabst";
const password = "7uk30corqYa3xuZr";
const dbName = "sps";
const obj = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = `mongodb+srv://${username}:${password}@cluster0.1hpqvhj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(url, obj)
  .then(() => {
    console.log("MongoDB connected successfully....");
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });

const user = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    // required: true
  },
  section: {
    type: String,
    // required: true
  },
  dob: {
    type: String,
    // required: true
  },
  gender: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contact: {
    type: String,
    // required: true
  },
  father_name: {
    type: String,
    // required: true
  },
  mother_name: {
    type: String,
    // required: true
  },
  father_contact: {
    type: String,
    // required: true
  },
  father_occupation: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  user_type: {
    type: String,
    required: true,
  },

  status: {
    type: Boolean,
  },
});

const fee = new mongoose.Schema({
  class: {
    type: String,
    require: true,
    unique: true,
  },
  admission_fee: {
    type: String,
  },
  re_admission_fee: {
    type: String,
  },
  tution_fee: {
    type: String,
  },
  exam_fee: {
    type: String,
  },
});

const submitted_fee = new mongoose.Schema({
  student_id: {
    type: Number,
  },
  class: {
    type: String,
  },
  admission_fee: {
    type: Number,
  },
  re_admission_fee: {
    type: Number,
  },
  month_fee: {
    type: Array
  }
});

const users = mongoose.model("user ", user);
const fees = mongoose.model("fees", fee);
const submitted_fees = mongoose.model("submitted_fee", submitted_fee);

module.exports = { users, fees, submitted_fees };
