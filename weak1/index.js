import crypto from "crypto";

const inputUserPassword = "ichiagkumargithnub$twitter.com";

const hashValue = crypto
  .createHash("sha256")
  .update(inputUserPassword)
  .digest("hex");

console.log(hashValue);
