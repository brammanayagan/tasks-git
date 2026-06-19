const register = (req, res) => {
    if (req.body.name === "Ravi") {
        res.status(200).json({
            "success": true,
            "message": "Registration Successful"
        });
    } else {
        res.status(400).json({
            "success": false,
            "message": "Invalid User"
        });
    }
};

const login = (req, res) => {
    if (req.body.email === "admin@gmail.com" && req.body.password === "12345") {
        res.status(200).json({
            "success": true,
            "message": "Login Successful"
        });
    } else {
        res.status(401).json({
            "success": false,
            "message": "Invalid Credentials"
        });
    }
};

module.exports = {
    register,
    login
};
