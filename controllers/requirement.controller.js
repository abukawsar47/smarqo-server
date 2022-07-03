/* Post Requirement route
1. GET All Requirement 
2. POST new Requirement
*/
const Requirements = require('../models/requirement.model');
const mongoose = require('mongoose');


// 1. GET All Requirement

const getAllRequirement = (req, res) => {
    res.status(200).send({ message: "Here is all Requirement" });
};

// 2. POST new Requirement
const createNewRequirement = async (req, res) => {
    try {
        const NewRequirement = new Requirements({
            title: req.body.title,
            location: req.body.location,
            requirements: req.body.requirements,
            deliveryDate: Date(req.body.deliveryDate),
            industryTag: req.body.industryTag,
            contact: req.body.contact,
        })
        await NewRequirement.save();
        res.status(201).send({
            message: "You post a new Requirement. And it is success",
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllRequirement, createNewRequirement };
