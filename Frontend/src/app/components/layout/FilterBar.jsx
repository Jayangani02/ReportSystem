import BranchFilter from '../filters/BranchFilter';
import DepartmentFilter from '../filters/DepartmentFilter';
import DateFilter from '../filters/DateFilter';




import React, { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, Download, Printer } from "lucide-react";

// Mock Employee Data
const mockEmployeeData = [
  { id: 1, name: 'John Doe', branch: 'Head Office', department: 'IT', status: 'active', joinDate: '2023-01-15' },
  { id: 2, name: 'Jane Smith', branch: 'Head Office', department: 'HR', status: 'active', joinDate: '2023-02-20' },
  { id: 3, name: 'Mike Johnson', branch: 'Head Office', department: 'IT', status: 'inactive', joinDate: '2022-11-10' },
  { id: 4, name: 'Sarah Williams', branch: 'Colombo', department: 'Sales', status: 'active', joinDate: '2023-03-05' },
  { id: 5, name: 'Tom Brown', branch: 'Colombo', department: 'Marketing', status: 'active', joinDate: '2023-01-25' },
  { id: 6, name: 'Emily Davis', branch: 'Colombo', department: 'Sales', status: 'inactive', joinDate: '2022-08-15' },
  { id: 7, name: 'David Wilson', branch: 'Kalutara', department: 'Finance', status: 'active', joinDate: '2023-04-10' },
  { id: 8, name: 'Lisa Anderson', branch: 'Kalutara', department: 'Operations', status: 'active', joinDate: '2023-02-28' },
  { id: 9, name: 'Robert Taylor', branch: 'Kalutara', department: 'Finance', status: 'inactive', joinDate: '2022-12-05' },
  { id: 10, name: 'Maria Garcia', branch: 'Gampaha', department: 'HR', status: 'active', joinDate: '2023-05-15' },
  { id: 11, name: 'James Martinez', branch: 'Gampaha', department: 'IT', status: 'active', joinDate: '2023-03-20' },
  { id: 12, name: 'Patricia Lopez', branch: 'Gampaha', department: 'Sales', status: 'inactive', joinDate: '2022-10-10' },
];

const branches = ['All Branches', 'Head Office', 'Colombo', 'Kalutara', 'Gampaha'];
const departments = ['All Departments', 'IT', 'HR', 'Sales', 'Marketing', 'Finance', 'Operations'];

// Header Component
const Header = () => (
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

// Filter Bar Component
const FilterBar = ({ selectedBranch, selectedDepartment, onBranchChange, onDepartmentChange }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-2xl">🔍</span>
      <h2 className="text-lg font-semibold text-slate-800">Filters</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-2">Branch</label>
        <select
          value={selectedBranch}
          onChange={(e) => onBranchChange(e.target.value)}
          className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        >
          {branches.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-2">Department</label>
        <select
          value={selectedDepartment}
          onChange={(e) => onDepartmentChange(e.target.value)}
          className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        >
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);
export default FilterBar;