// import { Users } from 'lucide-react';
// import { departments } from '../../lib/data/mockData';
// import styles from './filters.module.css';

// const DepartmentFilter = ({ selectedDepartment, onDepartmentChange }) => {
//   return (
//     <div>
//       <label className={styles.filterLabel}>
//         <Users className="w-4 h-4 inline mr-1" />
//         Department
//       </label>
//       <select
//         value={selectedDepartment}
//         onChange={(e) => onDepartmentChange(e.target.value)}
//         className={styles.filterSelect}
//       >
//         {departments.map((dept) => (
//           <option key={dept} value={dept}>
//             {dept}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default DepartmentFilter;

import React from "react";

const DepartmentFilter = ({ selectedDepartment, onDepartmentChange }) => (
  <div>
    <label className="text-sm font-medium text-slate-600">Department</label>
    <select
      value={selectedDepartment}
      onChange={(e) => onDepartmentChange(e.target.value)}
      className="border rounded-lg p-2 w-full"
    >
      <option value="">Select department</option>
      <option value="HR">HR</option>
      <option value="IT">IT</option>
    </select>
  </div>
);

export default DepartmentFilter;
