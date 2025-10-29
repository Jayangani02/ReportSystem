// import { Building2 } from 'lucide-react';
// import { branches } from '../../lib/data/mockData';
// import styles from './filters.module.css';

// const BranchFilter = ({ selectedBranch, onBranchChange }) => {
//   return (
//     <div>
//       <label className={styles.filterLabel}>
//         <Building2 className="w-4 h-4 inline mr-1" />
//         Branch
//       </label>
//       <select
//         value={selectedBranch}
//         onChange={(e) => onBranchChange(e.target.value)}
//         className={styles.filterSelect}
//       >
//         {branches.map((branch) => (
//           <option key={branch} value={branch}>
//             {branch}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default BranchFilter;
import React from "react";

const BranchFilter = ({ selectedBranch, onBranchChange }) => (
  <div>
    <label className="text-sm font-medium text-slate-600">Branch</label>
    <select
      value={selectedBranch}
      onChange={(e) => onBranchChange(e.target.value)}
      className="border rounded-lg p-2 w-full"
    >
      <option value="">Select branch</option>
      <option value="Colombo">Colombo</option>
      <option value="Kandy">Kandy</option>
    </select>
  </div>
);

export default BranchFilter;
