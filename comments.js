// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use static files
app.use(express.static('public'));

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use EJS
app.set('views', './views');
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/comments', (req, res) => {
    res.render('comments', { comments: comments });
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.redirect('/comments');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Data
const comments = [
    { username: 'Tam', comment: 'Hello' },
    { username: 'Tien', comment: 'Hi' }
];
