"use client";

import { useEffect, useState } from "react";
import EmployeeReportTable from "@/components/EmployeeReportTable";
import "@/styles/Report.module.css";

export default function ReportPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/employees");
      const data = await res.json();
      setEmployees(data);
    }
    fetchData();
  }, []);

  return (
    <main className="report-container">
      <h1>Employee Report</h1>
      <EmployeeReportTable data={employees} />
    </main>
  );
}
