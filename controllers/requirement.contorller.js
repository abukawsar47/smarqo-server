/* Post Requirement route
1. GET All Requirement 
2. POST new Requirement
*/

// 1. GET All Requirement

const getAllRequirement = (req, res) => {
    res.status(200).send({ message: "Here is all Requirement" });
};

// 2. POST new Requirement
const createNewRequirement = (req, res) => {
    res.status(201).send({
        message: "You post a new Requirement. And it is success",
    });
};

module.exports = { getAllRequirement, createNewRequirement };
