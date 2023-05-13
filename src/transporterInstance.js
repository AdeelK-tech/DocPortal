const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adeel98981@gmail.com",
    pass: "Adeel123",
  },
});
module.exports(transporter);
