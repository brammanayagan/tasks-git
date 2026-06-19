const getUser = (req, res) => {
    res.status(200).json({
        "success": true,
        "id": Number(req.params.id),
        "message": "User Found"
    });
};

const searchUser = (req, res) => {
    res.status(200).json({
        "success": true,
        "search": req.query.name,
        "message": "Search Completed"
    });
};

module.exports = {
    getUser,
    searchUser
};
