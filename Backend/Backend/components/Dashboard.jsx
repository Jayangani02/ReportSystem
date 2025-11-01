'use client';
import React, { useState, useEffect } from 'react';
import EmployeeReportTable from './EmployeeReportTable';
import DepartmentDistributionChart from './DepartmentDistributionChart';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="bg-red-900 border border-red-600 text-red-200 px-4 py-3 rounded-lg text-center">
    <strong className="font-bold">Error:</strong>
    <span className="block sm:inline ml-2">{message}</span>
  </div>
);

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (err) {
        setError('Failed to fetch employee data.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="space-y-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Employee Management System
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            View and manage employee records efficiently
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Quick Actions
            </h2>
            
            <div className="space-y-4">
              <Link
                href="/employees"
                className="block w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                View Employee Report
              </Link>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Total Employees</h3>
                  <p className="text-3xl font-bold text-blue-600">---</p>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Active Employees</h3>
                  <p className="text-3xl font-bold text-green-600">---</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-gray-600">
            <p>Powered by Next.js & MySQL</p>
          </div>
        </div>
    </div>
    
  );
};

export default Dashboard;

