const express = require('express');
const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Hello from EJS!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
