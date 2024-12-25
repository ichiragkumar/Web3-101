import crypto from "crypto";

//  Assignment #2
//  What if I ask you that the input string should start with 100xDevs ?
//  How would the code change?

const initValue = 0;
const prefixValue = "0000";
for (let i = initValue; i < 10000000; i++) {
  const inputValue = "100xDevs" + prefixValue + i;
  let hashForEachIncrementValue = crypto
    .createHash("sha256")
    .update(inputValue + i)
    .digest("hex");
  const isMatch = hashForEachIncrementValue.startsWith("0000");
  if (isMatch) {
    console.log(
      "Matched Found ",
      `for this value ${hashForEachIncrementValue}\n for this input ${
        inputValue + i
      }`
    );
    break;
  }
}

// Assignment #3
// What if I ask you to find a nonce for the following input

// FOR THIS DATA SET
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

const initValue2 = 0;
const prefixValue2 = "0000";
for (let i = initValue2; i < 10000000; i++) {
  const inputValue = "100xDevs" + prefixValue2 + i;
  let hashForEachIncrementValue = crypto
    .createHash("sha256")
    .update(initValue2 + i)
    .digest("hex");
  const isMatch = hashForEachIncrementValue.startsWith("0000");
  if (isMatch) {
    console.log(
      "Matched Found ",
      `for this value ${hashForEachIncrementValue}\n for this input ${
        inputValue + i
      }`
    );
    break;
  }
}
