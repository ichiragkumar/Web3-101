import crypto from "crypto";

const initValue = 0;
const prefixValue = "0000";
for (let i = initValue; i < 10000000; i++) {
  let hashForEachIncrementValue = crypto
    .createHash("sha256")
    .update(prefixValue + i)
    .digest("hex");
  const isMatch = hashForEachIncrementValue.startsWith("0000");
  if (isMatch) {
    console.log(
      "Matched Found ",
      `for this value ${hashForEachIncrementValue}\n for this input ${
        prefixValue + i
      }`
    );
    break;
  }
}
