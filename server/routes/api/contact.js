const express = require("express");
const router = express.Router();

const sendMail = require("../../services/sendEmail");

// Load Contact model
const Contact = require("../../models/Contact");

// @route GET api/contacts/test
// @description tests contacts route
// @access Public
router.get("/test", (req, res) => res.send("contacts route testing!"));

// @route POST api/contacts/save_contact
// @description add/save contact
// @access Public
router.post("/save_contact", (req, res) => {
  Contact.create(req.body)
    .then(() => {
      console.log("req.body :", req.body);
      const { email } = req.body;
      // send emai to the email specified in contact form
      const msg = {
        to: email,
        from: "vedant@alumni.usc.edu",
        subject: "SolidCad Technical assesment",
        html: "<strong>Sendgrid used to send the email</strong>",
      };
      return sendMail(msg);
    })
    .then((contact) => res.json({ msg: "Contact added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this contact" })
    );
});

module.exports = router;
