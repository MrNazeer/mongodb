const { ObjectID } = require("bson");
const studentModel = require("../models/student_model");

// GET

const getStudents = async (req, res) => {
  try {
    const data = await studentModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ONE Student

const getOneStudent = async (req, res) => {
    console.log("called..................");
  try {
    const data = await studentModel.findById(ObjectID(req.params.id));
    res.json(data)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST

const addStudent = async (req, res) => {
  console.log(req.body);
  const student = new studentModel(req.body);

  try {
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.addStudent = addStudent;
module.exports.getStudents = getStudents;
module.exports.getOneStudent = getOneStudent;

