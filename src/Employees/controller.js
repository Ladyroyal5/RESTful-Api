const pool = require("../../db");
const queries = require("./queries");

const getEmployees = (req,res) => {
	pool.query(queries.getEmployees, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const getEmployeeById = (req, res) => {
	const id = parseint(req.params.id);
	pool.query(queries.getEmployeeById, [id], (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const addEmployee = (req, res) => {
	const {name, email, age, dob } = req.body;

	//check if email exists
	pool.query(queries.checkEmailExists, [email], (error, results) => {
		if (results.rows.length) {
			res.send("Email already exists.");
		}
	});
};


module.exports = {
	getEmployees,
	getEmployeeById,
	addEmployee,
};
