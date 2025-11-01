'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#1e40af', '#3b82f6', '#34d399', '#f59e0b', '#ef4444', '#8b5cf6'];

const DepartmentDistributionChart = ({ data }) => {
  const departmentCounts = data.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(departmentCounts).map((dep) => ({
    name: dep,
    value: departmentCounts[dep],
  }));

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-xl font-semibold text-text-primary mb-4">
        Employees by Department
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={110}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) =>
              `${name} ${(Number(percent) * 100).toFixed(0)}%`
            }
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentDistributionChart;
