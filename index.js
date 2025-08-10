const express = require("express");
const app = express();

app.use(express.json());
app.use("/" , require("./Sync/SyncRoutes"));

app.listen(3000);