// app/api/reports/employee-summary/route.js
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT 
        b.id AS branch_id,
        b.name AS branch_name,
        SUM(CASE WHEN e.emp_status = 1 THEN 1 ELSE 0 END) AS active_count,
        SUM(CASE WHEN e.emp_status = 0 THEN 1 ELSE 0 END) AS inactive_count,
        COUNT(e.id) AS total_count
      FROM branches b
      LEFT JOIN employees e ON e.branch_id = b.id
      GROUP BY b.id, b.name
      ORDER BY b.name
    `);

    return Response.json(rows);
  } catch (error) {
    console.error("GET /api/reports/employee-summary error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
