const getEmployees = "SELECT * FROM Employees";
const getEmployeesById = "SELECT * FROM Employees WHERE id = $1";
const checkEmailExists = "SELECT s FROM Employees s WHERE s.email = $1";
const addEmployee = "INSERT INTO Employees (name, email, department, position, age, dob, doe) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const removeEmployee = "DELETE FROM Employees WHERE id = $1";
const updateEmployee = "UPDATE Employees SET name = $1" WHERE id = $2";

module.exports = {
	getEmployees,
	getEmployeeById,
	checkEmailExists,
	addEmployee,
	removeEmployee,
	updateEmployee,
};

