const crypto = require("crypto");

module.exports = (key, data) => {
  try {
    if (typeof data !== "string")
      throw "La cadena que se requiere encriptar no debe ser nula";

    const cipher = crypto.createCipheriv("aes-256-ecb", key, Buffer.alloc(0));

    const result =
      cipher.update(data, "utf8", "base64") + cipher.final("base64");
    return result;
  } catch (err) {
    return err;
  }
};
