const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
