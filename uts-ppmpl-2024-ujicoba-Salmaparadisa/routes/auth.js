const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validasi email dan password
  if (!email.includes("@") || !email.endsWith(".com")) {
    return res.status(400).json({ message: "Email is not valid" });
  }

  if (password.length <= 5) {
    return res
      .status(400)
      .json({ message: "Password must be longer than 5 characters" });
  }

  // Login berhasil
  res.status(200).json({ message: "Login successful" });
});

module.exports = router;
