const express = require('express');
const { note } = require('./Develop/db/notes.json')

const app = express ();

app.get('/api/notes', (req, res) => {
    res.json()
});
app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
});