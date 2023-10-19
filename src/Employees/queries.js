const getEmployees = "SELECT * FROM Employees";
const getEmployeesById = "SELECT * FROM Employees WHERE id = $1";
const checkEmailExists = "SELECT s FROM Employees s WHERE s.email = $1";
const addEmployee = "INSERT INTO Employees (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeEmployee = "DELETE FROM Employees WHERE id = $1";
const updateEmployee = "UPDATE Employees SET name = $1 WHERE id = $2";

module.exports = {
	getEmployees,
	getEmployeesById,
	checkEmailExists,
	addEmployee,
	removeEmployee,
	updateEmployee,
};

