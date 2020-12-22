const crypto = require("crypto");

module.exports = (key, data) => {
  try {
    if (typeof data !== "string")
      throw "La cadena que se requiere encriptar no debe ser nula";

    const decipher = crypto.createDecipheriv(
      "aes-256-ecb",
      key,
      Buffer.alloc(0)
    );
    const result =
      decipher.update(data, "base64", "utf8") + decipher.final("utf8");
    return result;
  } catch (err) {
    return err;
  }
};
