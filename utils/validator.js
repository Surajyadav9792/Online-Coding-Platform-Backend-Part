const validator = require("validator");

const validate = (data) => {
    if (!data.firstName || data.firstName.trim() === "") {
        throw new Error("First name is required");
    }

    if (data.firstName.trim().length < 3 || data.firstName.trim().length > 21) {
        throw new Error("Name length should be between 3 and 21");
    }

    if (!data.emailId || data.emailId.trim() === "") {
        throw new Error("Email is required");
    }

    if (!validator.isEmail(data.emailId)) {
        throw new Error("Invalid Email");
    }

    if (!data.password || data.password === "") {
        throw new Error("Password is required");
    }

    if (data.password.length < 8) {
        throw new Error("Password must be at least 8 characters");
    }

    if (!validator.isStrongPassword(data.password)) {
        throw new Error("Password must contain uppercase, lowercase, number, and symbol");
    }
}

module.exports = validate;

