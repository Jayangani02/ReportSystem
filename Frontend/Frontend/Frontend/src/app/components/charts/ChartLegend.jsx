import styles from "./charts.module.css";

// Chart Legend Component
const ChartLegend = () => (
  <div className="flex justify-center gap-8 mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 bg-green-500 rounded shadow-sm"></div>
      <span className="text-sm font-medium text-slate-700">Active Employees</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 bg-red-500 rounded shadow-sm"></div>
      <span className="text-sm font-medium text-slate-700">Inactive Employees</span>
    </div>
  </div>
);

export default ChartLegend;


