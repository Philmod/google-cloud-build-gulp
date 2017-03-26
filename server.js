const express = require('express');
const path = require('path');

let app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, () => {
  console.log('http server listening on *:3000');
});
