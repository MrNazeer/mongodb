const express = require("express");
const router = express.Router();
const {
  addStudent,
  getStudents,
  getOneStudent
} = require("../controllers/students_controllers");



router.get("/get_students", getStudents);

router.get("/get_student/:id", getOneStudent);

router.post("/add_student", addStudent);

module.exports = router;
