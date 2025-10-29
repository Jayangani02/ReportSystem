import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

// Employee Bar Chart Component
const EmployeeBarChart = ({ data }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
    <div className="flex items-center gap-2 mb-6">
      <span className="text-2xl">📊</span>
      <h2 className="text-lg font-semibold text-slate-800">Employee Status by Branch</h2>
    </div>
    
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#64748b" style={{ fontSize: '13px' }} />
        <YAxis stroke="#64748b" style={{ fontSize: '13px' }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Bar dataKey="Active" fill="#10b981" radius={[8, 8, 0, 0]} />
        <Bar dataKey="Inactive" fill="#ef4444" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default EmployeeBarChart;



