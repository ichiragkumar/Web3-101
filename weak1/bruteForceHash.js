import crypto from "crypto";

const inputUserPassword = "ichiagkumargithnub$twitter.com";
const hashValueOFPassword = crypto
  .createHash("sha256")
  .update(inputUserPassword)
  .digest("hex");

const preHashStartValue = "0000";

for (let i = 0; i <= hashValueOFPassword.length; i++) {
  const matchfistFour = hashValueOFPassword.substring(0, 4);
  console.log(matchfistFour);
  if (matchfistFour === preHashStartValue) {
    console.log("match found", matchfistFour);
    break;
  }
}
