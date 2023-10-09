const getEmployees = "SELECT * FROM Employees";
const getEmployeesById = "SELECT * FROM Employees WHERE id = $1";
const checkEmailExists = "SELECT s FROM Employees s WHERE s.email = $1";

module.exports = {
	getEmployees,
	getEmployeeById,
	checkEmailExists,
};

