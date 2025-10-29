// import React from "react";
// import styles from "./charts.module.css";

// const ChartLegend = () => (
//   <div className="flex justify-center gap-6 mb-6">
//     <div className="flex items-center gap-2">
//       <div className="w-4 h-4 bg-green-500 rounded"></div>
//       <span className="text-sm text-slate-600">Active</span>
//     </div>
//     <div className="flex items-center gap-2">
//       <div className="w-4 h-4 bg-red-500 rounded"></div>
//       <span className="text-sm text-slate-600">Inactive</span>
//     </div>
//   </div>
// );

// export default ChartLegend;
import React from "react";

const DateFilter = ({ label, value, onChange }) => (
  <div>
    <label className="text-sm font-medium text-slate-600">{label}</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg p-2 w-full"
    />
  </div>
);

export default DateFilter;
