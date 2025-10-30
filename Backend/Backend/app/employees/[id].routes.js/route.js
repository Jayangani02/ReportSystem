// app/api/employees/[id]/route.js
import { pool } from "./lib/db";

// GET single employee
export async function GET(req, { params }) {
  try {
    const [rows] = await pool.query(
      `SELECT e.*, b.name AS branch_name
       FROM employees e
       LEFT JOIN branches b ON b.id = e.branch_id
       WHERE e.id = ?`,
      [params.id]
    );

    if (!rows.length) {
      return Response.json({ error: "Employee not found" }, { status: 404 });
    }

    return Response.json(rows[0]);
  } catch (error) {
    console.error("GET /api/employees/[id] error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT update employee
export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const { full_name, calling_name, branch_id, emp_status, basic_salary } = body;

    const [result] = await pool.query(
      `UPDATE employees
       SET full_name=?, calling_name=?, branch_id=?, emp_status=?, basic_salary=?
       WHERE id=?`,
      [full_name, calling_name, branch_id, emp_status, basic_salary, params.id]
    );

    if (result.affectedRows === 0) {
      return Response.json({ error: "Employee not found" }, { status: 404 });
    }

    return Response.json({ message: "Employee updated" });
  } catch (error) {
    console.error("PUT /api/employees/[id] error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE employee
export async function DELETE(req, { params }) {
  try {
    const [result] = await pool.query(`DELETE FROM employees WHERE id=?`, [params.id]);
    if (result.affectedRows === 0) {
      return Response.json({ error: "Employee not found" }, { status: 404 });
    }
    return Response.json({ message: "Employee deleted" });
  } catch (error) {
    console.error("DELETE /api/employees/[id] error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
