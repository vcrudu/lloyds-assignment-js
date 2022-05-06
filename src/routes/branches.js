const express = require("express");
const Joi = require("joi");
const constants = require("../common/constants");
const OpenBanking =  require("../usecases/OpenBanking");

const router = express.Router();
router.get("/", (req, res, next) => {
    const schema = Joi.string().required()
    const { error } = schema.validate(req.header(constants.LOCATION_HEADER));
    if (error) {
        res.send({ error: 'Invalid location! Please specify the location in the lbg-txn-branch-location header.' });
        return;
    }
    next()
});

router.get("/", async (req, res) => {
    const location = req.header(constants.LOCATION_HEADER).toLowerCase();
    const branches = await OpenBanking.getBranches(constants.BRAND_NAME, location);
    res.json(branches);
});

module.exports = router;