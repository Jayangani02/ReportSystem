// app/api/employees/route.js
// import { pool } from "./lib/db";
import { pool } from "@/lib/db";

// GET all employees
export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT e.*, b.name AS branch_name
      FROM employees e
      LEFT JOIN branches b ON b.id = e.branch_id
      ORDER BY e.id DESC
      LIMIT 100
    `);

    return Response.json(rows);
  } catch (error) {
    console.error("GET /api/employees error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST create new employee
export async function POST(req) {
  try {
    const body = await req.json();
    const {
      full_name,
      calling_name,
      branch_id,
      emp_status,
      email,
      basic_salary,
    } = body;

    if (!full_name || !branch_id) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [result] = await pool.query(
      `INSERT INTO employees (full_name, calling_name, branch_id, emp_status, email, basic_salary)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [full_name, calling_name, branch_id, emp_status || 1, email || "", basic_salary || 0]
    );

    return Response.json({ message: "Employee created", id: result.insertId });
  } catch (error) {
    console.error("POST /api/employees error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
