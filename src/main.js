const express = require("express");
const branches = require("./routes/branches");

let app = express();

app.use(`/`, branches);

app.listen(8080, () => {
    console.log(`listening on port 8080`);
});