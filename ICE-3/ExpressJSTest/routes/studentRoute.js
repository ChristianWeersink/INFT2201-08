const express = require("express");// mandatory imports
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router(); //important to call this constant router
const {getStudents, createStudent, updateStudent, deleteStudent, getStudent} = require("../controllers/studentsController");


router.route("/").get(getStudents).post(createStudent);

router.use(validateToken);
router.route("/:id").put(updateStudent).delete(deleteStudent).get(getStudent);

//router.route("/:id").delete(deleteStudent);

//router.route("/:id").get(getStudent);

module.exports = router;