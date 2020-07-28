const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;

app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});

app.get('/api/students', (req, res) => {
    const students = [
        {id: 1, firstName: 'Captain', lastName: 'fancy'},
        {id: 2, firstName: 'John', lastName: 'buttercup'},
        {id: 3, firstName: 'Dusty', lastName: 'Trail'},
    ];
    res.json(students);
});

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));