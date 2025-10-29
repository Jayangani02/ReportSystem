import BranchFilter from "./BranchFilter";
import DepartmentFilter from "./DepartmentFilter";
import DateFilter from "./DateFilter";
import './filters.module.css';

const FilterBar = ({
  selectedBranch,
  selectedDepartment,
  startDate,
  endDate,
  onBranchChange,
  onDepartmentChange,
  onStartDateChange,
  onEndDateChange,
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-slate-600">🔍</span>
      <h2 className="text-lg font-semibold text-slate-800">Filters</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <BranchFilter selectedBranch={selectedBranch} onBranchChange={onBranchChange} />
      <DepartmentFilter selectedDepartment={selectedDepartment} onDepartmentChange={onDepartmentChange} />
      <DateFilter label="Start Date" value={startDate} onChange={onStartDateChange} />
      <DateFilter label="End Date" value={endDate} onChange={onEndDateChange} />
    </div>
  </div>
);

export default FilterBar;
