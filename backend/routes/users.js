import express from "express";
import * as db from "../db/index.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const result = await db.query("SELECT * FROM users");
		res.send(result.rows);
	} catch (err) {
		console.error("Error fetching all users", err);
		res.status(500).json({
			error: "Failed to fetch all users",
			message: err.message,
		});
	}
});

router.get("/:users_id", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM users WHERE users_id = $1", [
			req.params.users_id,
		]);
		res.send(result.rows[0]);
	} catch (err) {
		console.error("Error fetching the user", err);
		res.status(500).json({
			error: "Failed to fetch the user",
			message: err.message,
		});
	}
});

router.patch("/:users_id", async (req, res) => {
	const { userName, userEmail, userAvatar, userPayment } = req.body;

	try {
		const updates = [];
		const values = [];
		let paramIndex = 1;

		if (userName !== undefined) {
			updates.push(`users_name = $${paramIndex}`);
			values.push(userName);
			paramIndex++;
		}
		if (userEmail !== undefined) {
			updates.push(`users_email = $${paramIndex}`);
			values.push(userEmail);
			paramIndex++;
		}
		if (userAvatar !== undefined) {
			updates.push(`users_avatar = $${paramIndex}`);
			values.push(userAvatar);
			paramIndex++;
		}
		if (userPayment !== undefined) {
			updates.push(`users_payment = $${paramIndex}`);
			values.push(userPayment);
			paramIndex++;
		}

		if (updates.length === 0) {
			return res
				.status(400)
				.json({ error: "No valid field provided for update" });
		}

		values.push(req.params.users_id);

		const query = `UPDATE users SET ${updates.join(
			", "
		)} WHERE users_id = $${paramIndex} RETURNING *`;

		const result = await db.query(query, values);
		res.status(200).json(result.rows[0]);
	} catch (err) {
		console.error("Error updating the user", err);
		res.status(500).json({
			error: "Failed to update the user",
			message: err.message,
		});
	}
});
router.delete("/:users_id", async (req, res) => {
	try {
		const result = await db.query("DELETE FROM users WHERE users_id = $1", [
			req.params.users_id,
		]);
		res.status(200).json({ message: "User deleted!" });
	} catch (err) {
		console.error("Error deleting the user: ", err);
	}
});

export default router;
