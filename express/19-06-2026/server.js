const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());

app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', studentRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
