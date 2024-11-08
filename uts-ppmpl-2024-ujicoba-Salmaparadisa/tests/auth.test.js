const request = require("supertest");
const app = require("../app"); // Pastikan path ini sesuai dengan struktur folder Anda

describe("POST /login", () => {
  test("should respond with success message on valid input", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "test@example.com", password: "123456" });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Login successful");
  });

  test("should respond with error on invalid email", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "invalidEmail", password: "123456" });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Email is not valid"); // Sesuaikan pesan dengan yang ada di kode
  });

  test("should respond with error on invalid password", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "test@example.com", password: "123" });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Password must be longer than 5 characters"
    ); // Sesuaikan pesan dengan yang ada di kode
  });
});
