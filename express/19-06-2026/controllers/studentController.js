const createStudent = (req, res) => {
    res.status(201).json({
        "success": true,
        "data": {
            "name": req.body.name,
            "course": req.body.course,
            "city": req.body.city
        }
    });
};

module.exports = {
    createStudent
};
