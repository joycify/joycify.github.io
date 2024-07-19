const express = require('express');
const path = require('path');

const app = express();
const PORT = 5173;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:5173`);
    const open = await import('open');
    open.default(`http://localhost:5173`);
});
