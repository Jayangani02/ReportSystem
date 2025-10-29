

import React from "react";
import { mockEmployeeData } from "../../lib/data/mockData"; // ✅ correct import

const EmployeeTable = ({ data = mockEmployeeData }) => { // ✅ fallback if prop not passed
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 overflow-x-auto">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">
        Employee Status by Branch
      </h2>

      <table className="min-w-full border border-slate-200 text-sm">
        <thead className="bg-slate-100 text-slate-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left border-b border-slate-200">#</th>
            <th className="px-4 py-3 text-left border-b border-slate-200">Branch</th>
            <th className="px-4 py-3 text-left border-b border-slate-200">Active Employees</th>
            <th className="px-4 py-3 text-left border-b border-slate-200">Inactive Employees</th>
            <th className="px-4 py-3 text-left border-b border-slate-200">Total</th>
          </tr>
        </thead>

        <tbody>
          {data.map((branch, i) => (   // ✅ use i, not index
            <tr
              key={branch.name}
              className={`hover:bg-slate-50 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
            >
              <td className="px-4 py-3 border-b border-slate-200">{i + 1}</td>
              <td className="px-4 py-3 border-b border-slate-200 font-medium text-slate-800">
                {branch.name}
              </td>
              <td className="px-4 py-3 border-b border-slate-200 text-green-600 font-semibold">
                {branch.Active}
              </td>
              <td className="px-4 py-3 border-b border-slate-200 text-red-500 font-semibold">
                {branch.Inactive}
              </td>
              <td className="px-4 py-3 border-b border-slate-200 font-semibold text-slate-700">
                {branch.Active + branch.Inactive}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
