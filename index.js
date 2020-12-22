const crypt = require("./functions/crypt");
const decrypt = require("./functions/decrypt");
const crypto = require("crypto");

const inputString = "ODNAMROFSNART KNABAITOCS";
const key = "abcdefghijklmnopqrstuvwxyz123456";

const cryptedString = crypt(key, inputString);
const decryptedString = crypt(key, cryptedString);
console.log("crypted: " + cryptedString);
console.log("decrypted: " + decryptedString);
