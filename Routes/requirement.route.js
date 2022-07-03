const express = require("express");
const {
    getAllRequirement,
    createNewRequirement,
} = require("../controllers/requirement.controller");

const router = express.Router();

/* Post Requirement route
1. GET All Requirement 
2. POST new Requirement
*/

// 1. GET All Requirement
router.get("/", getAllRequirement);

router.post("/", createNewRequirement);
module.exports = router;
