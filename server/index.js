const express = require("express");
const app = express();
const PORT = 5000;
app.get('/', (req, res) => {
    res.send("Hello from CI/CD Demo!");
});

app.listen(PORT, () => {
    console.log(`Application is running on Port ${PORT}`);
});