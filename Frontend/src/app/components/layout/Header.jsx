// // Employee Service - API calls for database integration
// // Currently returns mock data, replace with actual API calls

// import { branches, departments } from '../../lib/data/mockData';


// //import { branches, departments } from '../../lib/data/mockData';

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-semibold text-gray-800">Employee Dashboard</h1>
//       <div className="text-sm text-gray-600">
//         <span>Branches: {branches.length}</span> |{" "}
//         <span>Departments: {departments.length}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;




// // Fetch all employees
// export const fetchEmployees = async () => {
//   try {
//     // TODO: Replace with actual API call
//     // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employees`);
//     // const data = await response.json();
//     // return data;
    
//     // Mock delay to simulate API call
//     await new Promise(resolve => setTimeout(resolve, 500));
//     return mockEmployeeData;
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//     throw error;
//   }
// };

// // Fetch employees by branch
// export const fetchEmployeesByBranch = async (branchId) => {
//   try {
//     // TODO: Replace with actual API call
//     // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employees/branch/${branchId}`);
//     // const data = await response.json();
//     // return data;
    
//     await new Promise(resolve => setTimeout(resolve, 500));
//     return mockEmployeeData.filter(emp => emp.branch === branchId);
//   } catch (error) {
//     console.error('Error fetching employees by branch:', error);
//     throw error;
//   }
// };

// // Fetch employees by department
// export const fetchEmployeesByDepartment = async (departmentId) => {
//   try {
//     // TODO: Replace with actual API call
//     await new Promise(resolve => setTimeout(resolve, 500));
//     return mockEmployeeData.filter(emp => emp.department === departmentId);
//   } catch (error) {
//     console.error('Error fetching employees by department:', error);
//     throw error;
//   }
// };

// // Fetch branches
// export const fetchBranches = async () => {
//   try {
//     // TODO: Replace with actual API call
//     await new Promise(resolve => setTimeout(resolve, 300));
//     return branches;
//   } catch (error) {
//     console.error('Error fetching branches:', error);
//     throw error;
//   }
// };

// // Fetch departments
// export const fetchDepartments = async () => {
//   try {
//     // TODO: Replace with actual API call
//     await new Promise(resolve => setTimeout(resolve, 300));
//     return departments;
//   } catch (error) {
//     console.error('Error fetching departments:', error);
//     throw error;
//   }
// };

// // Example: How to integrate with real API
// /*
// export const fetchEmployees = async () => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employees`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`, // if needed
//       },
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch employees');
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//     throw error;
//   }
// };
// */

// "use client";
// import { branches, departments } from "../../lib/data/mockData";

// const Header = () => (
//   <header className="bg-white shadow-md p-4 flex justify-between items-center">
//     <h1 className="text-2xl font-semibold text-gray-800">Employee Dashboard</h1>
//     <div className="text-sm text-gray-600">
//       <span>Branches: {branches.length}</span> |{" "}
//       <span>Departments: {departments.length}</span>
//     </div>
//   </header>
// );

// export default Header;
"use client";


import { React,  useState }from "react";
import styles from "./Header.module.css";
import { Users, Download, Printer } from "lucide-react";

// Mock data for Employee Header
const branches = ["All Branches", "Head Office", "Colombo", "Kalutara", "Gampaha"];
const departments = ["All Departments", "IT", "HR", "Sales", "Marketing", "Finance", "Operations"];

/* =============================
   1️⃣ Employee Dashboard Header
============================= */
export const EmployeeHeader = () => (
  <header className="bg-white shadow-md p-6 mb-6 rounded-xl border border-slate-200">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-slate-800">Employee Dashboard</h1>
      <div className="text-sm text-slate-600">
        <span className="font-semibold">Branches: {branches.length - 1}</span>
        <span className="mx-2">|</span>
        <span className="font-semibold">Departments: {departments.length - 1}</span>
      </div>
    </div>
  </header>
);

/* =============================
   2️⃣ Koombiyo Order Report Header
============================= */
export const OrderReportHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumb}>
        <span>Koombiyo</span>
        <span className={styles.separator}>|</span>
        <span>Order Report</span>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>🔍</button>
        </div>

        <div className={styles.iconGroup}>
          <button className={styles.iconBtn} title="Grid View">
            <span>⊞</span>
          </button>
          <button className={styles.iconBtn} title="Reports">
            <span>📊</span>
          </button>
          <button className={styles.iconBtn} title="Notifications">
            <span>📧</span>
            <span className={styles.notificationBadge}>2</span>
          </button>
          <button className={styles.iconBtn} title="Alerts">
            <span>🔔</span>
            <span className={styles.notificationBadge}>6</span>
          </button>
          <button className={styles.iconBtn} title="Settings">
            <span>⚙️</span>
          </button>
        </div>

        <div className={styles.userProfile}>
          <span className={styles.userIcon}>👤</span>
          <span className={styles.userName}>HI, SARANGANS</span>
        </div>
      </div>
    </header>
  );
};

/* =============================
   Default Export
============================= */
// You can import whichever header you need
export default EmployeeHeader;
