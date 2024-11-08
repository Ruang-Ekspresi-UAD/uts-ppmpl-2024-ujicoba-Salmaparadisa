// controllers/authController.js
function isEmailValid(email) {
    return email.includes('@') && email.endsWith('.com');
}

function isPasswordValid(password) {
    return password.length > 5;
}

function login(req, res) {
    const { email, password } = req.body;

    if (!isEmailValid(email)) {
        return res.status(400).json({ message: 'Email is not valid' });
    }

    if (!isPasswordValid(password)) {
        return res.status(400).json({ message: 'Password must be longer than 5 characters' });
    }

    res.status(200).json({ message: 'Login successful' });
}

module.exports = {
    isEmailValid,
    isPasswordValid,
    login
};