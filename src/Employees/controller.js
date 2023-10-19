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

		//add employee to db
		pool.query(
			queries.addEmployee,
			[name, email, age, dob],
			(error, results) => {
				if (error) throw error;
				res.status(201).send("Employee Created Successful!");
			}
		);
	});
};


const removeEmployee = (req, res) => {
	const id = parseInt(req.params.id);

	pool.query(queries.removeEmployee, [id], (error, results) => {
		const noEmployeeFound = !results.rows.length;
		if (noEmployeeFound) {
			res.send("Employee does not exist.");
		}

		pool.query(queries.removeEmployee, [id], (error, results) => {
			if (error) throw error;
			res.status(200).send("Employee removed successfully.");
		});
	});
};

const updateEmployee = (req, res) => {
	const id = parseInt(req.params.id);
	const { name } = req.body;

	pool.query(queries.getEmployeeById, [id], (error, results) => {
		const noEmployeeFound = !results.rows.length;
		if (noEmployeeFound) {
			res.send("Employee does not exist");
		}


		pool.query(queries.updateEmployee, [name, id], (error, results) => {
			if (error) throw error;
			res.status(200).send("Employee updated successfully");
		});
	});
};


module.exports = {
	getEmployees,
	getEmployeeById,
	addEmployee,
	removeEmployee,
	updateEmployee,
};
