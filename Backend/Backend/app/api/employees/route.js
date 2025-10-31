import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const sql = `
      SELECT 
        emp_id,
        full_name,
        intial_name,
        nic,
        reg_date,
        div_id,
        designation_id,
        department_id,
        position_id,
        branch_id,
        emp_status,
        resign_status
      FROM 
        hr_employee
      WHERE 
        delete_status = 0
      ORDER BY 
        emp_id
    `;
    
    const employees = await query(sql);
    
    return NextResponse.json({
      success: true,
      data: employees,
      count: employees.length
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch employees',
        message: error.message 
      },
      { status: 500 }
    );
  }
}