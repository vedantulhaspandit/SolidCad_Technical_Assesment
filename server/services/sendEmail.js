const sendgrid = require("@sendgrid/mail");

const SENDGRID_API_KEY =
  "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";

sendgrid.setApiKey(SENDGRID_API_KEY);

const sendMail = (msg) => {
  sendgrid
    .send(msg)
    .then((resp) => {
      console.log("Email sent\n", resp);
      return Promise.resolve(resp);
    })
    .catch((error) => {
      console.error("Email sent error\n", error);
      return Promise.reject(error);
    });
};

module.exports = sendMail;
