const {
  validateEmail,
  validateUsername,
  validatePassword,
  login
} = require("../src/login");

describe("Login Validation", () => {
  it("should validate a correct email", () => {
    expect(validateEmail("user@example.com")).toBeTrue();
  });

  it("should reject invalid email", () => {
    expect(validateEmail("bad-email")).toBeFalse();
  });

  it("should accept valid username", () => {
    expect(validateUsername("Ahmed")).toBeTrue();
  });

  it("should reject short username", () => {
    expect(validateUsername("ab")).toBeFalse();
  });

  it("should accept valid password", () => {
    expect(validatePassword("abcdef123")).toBeTrue();
  });

  it("should reject short password", () => {
    expect(validatePassword("123")).toBeFalse();
  });

  it("should return success for valid credentials", () => {
    const result = login("user@example.com", "Ahmed", "password12345");
    expect(result).toBe("Login successful");
  });

  it("should return error for invalid email", () => {
    const result = login("wrongemail", "Ahmed", "password12345");
    expect(result).toBe("Invalid email");
  });
});
