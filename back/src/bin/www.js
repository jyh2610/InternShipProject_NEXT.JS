"use strict";

const app = require("../../app");
const PORT = process.env.PORT || 3000;

//3000포트
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});