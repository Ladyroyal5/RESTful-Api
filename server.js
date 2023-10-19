const express = require("express");
const EmployeesRoutes = require("./src/Employees/routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("ALX PORTFOLIO PROJECT");
});


app.use("/api/v1/Employees", EmployeesRoutes);

app.listen(port, () => console.log('app listening on port ${port}'));
