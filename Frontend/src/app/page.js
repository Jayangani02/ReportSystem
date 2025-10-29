// "use client";
// import Header from "./components/layout/Header";
// import FilterBar from "./components/filters/FilterBar";
// import SummaryCards from "./components/reports/SummaryCards";
// import EmployeeBarChart from "./components/charts/EmployeeBarChart";
// import ChartLegend from "./components/charts/ChartLegend";
// import useFilters from "../hooks/useFilters";
// import useEmployeeData from "../hooks/useEmployeeData";
// import ReportHeader from "./components/reports/ReportHeader";
// import './lib/data/mockData'

// export default function Home() {
//   const {
//     selectedBranch,
//     selectedDepartment,
//     startDate,
//     endDate,
//     setSelectedBranch, 
//     setSelectedDepartment,
//     setStartDate,
//     setEndDate,
//   } = useFilters();

//   const { filteredEmployees, stats, grouped } = useEmployeeData({
//     selectedBranch,
//     selectedDepartment,
//     startDate,
//     endDate,
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <Header />
//       <main className="max-w-7xl mx-auto px-6 py-8">
//         <FilterBar
//           selectedBranch={selectedBranch}
//           selectedDepartment={selectedDepartment}
//           startDate={startDate}
//           endDate={endDate}
//           onBranchChange={setSelectedBranch}
//           onDepartmentChange={setSelectedDepartment}
//           onStartDateChange={setStartDate}
//           onEndDateChange={setEndDate}
//         />
//         <SummaryCards stats={stats} />
//         <EmployeeBarChart data={grouped} />
//         <ChartLegend />
//         <ReportHeader title="Employee Report" />
//       </main>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import FilterBar from "../components/filters/FilterBar";

// const ReportsPage = () => {
//   const [selectedBranch, setSelectedBranch] = useState("");
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   return (
//     <div className="p-6">
//       <FilterBar
//         selectedBranch={selectedBranch}
//         onBranchChange={setSelectedBranch}
//         selectedDepartment={selectedDepartment}
//         onDepartmentChange={setSelectedDepartment}
//         startDate={startDate}
//         onStartDateChange={setStartDate}
//         endDate={endDate}
//         onEndDateChange={setEndDate}
//       />
//     </div>
//   );
// };

// export default ReportsPage;
"use client";
import React, { useState, useMemo } from "react";
import Header from "./components/layout/Header";
import FilterBar from "./components/filters/FilterBar";
import SummaryCards from "./components/reports/SummaryCards";
import EmployeeBarChart from "./components/charts/EmployeeBarChart";
import ChartLegend from "./components/charts/ChartLegend";
import useFilters from "../hooks/useFilters";
import useEmployeeData from "../hooks/useEmployeeData";
import ReportHeader from "./components/reports/ReportHeader";
import { mockEmployeeData } from "./lib/data/mockData";
import EmployeeTable from "./components/reports/EmployeeTable";
import OrderReport from "./components/reports/OderReport";
import { OrderReportHeader } from "./components/layout/Header";



// Main App Component
export default function EmployeeDashboard() {
  const [selectedBranch, setSelectedBranch] = useState("All Branches");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");

  // Filter the data based on user selection
  const filteredData = useMemo(() => {
    return mockEmployeeData.filter((emp) => {
      const branchMatch = selectedBranch === "All Branches" || emp.branch === selectedBranch;
      const deptMatch = selectedDepartment === "All Departments" || emp.department === selectedDepartment;
      return branchMatch && deptMatch;
    });
  }, [selectedBranch, selectedDepartment]);

  // Calculate statistics
  const stats = useMemo(() => {
    const total = filteredData.length;
    const active = filteredData.filter(emp => emp.status === 'active').length;
    const inactive = total - active;
    return { total, active, inactive };
  }, [filteredData]);

  // Prepare bar chart data: active vs inactive count by branch
  const chartData = useMemo(() => {
    const grouped = {};

    filteredData.forEach((emp) => {
      if (!grouped[emp.branch]) {
        grouped[emp.branch] = { name: emp.branch, Active: 0, Inactive: 0 };
      }
      if (emp.status === "active") grouped[emp.branch].Active += 1;
      else grouped[emp.branch].Inactive += 1;
    });

    return Object.values(grouped);
  }, [filteredData]);

  const handleExport = () => {
    alert('Exporting report...');
    // Add export logic here
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <FilterBar
          selectedBranch={selectedBranch}
          selectedDepartment={selectedDepartment}
          onBranchChange={setSelectedBranch}
          onDepartmentChange={setSelectedDepartment}
        />

        <SummaryCards stats={mockEmployeeData} />
        
        <EmployeeBarChart data={chartData} />
        
        <ChartLegend />
        
        <ReportHeader 
          title="Employee Report" 
          onExport={handleExport}
          onPrint={handlePrint}
        />
        <EmployeeTable data={mockEmployeeData}/>
        <OrderReport />
      </div>
    </div>
  );
}