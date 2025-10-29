import { useMemo } from "react";
import { mockEmployeeData } from "../app/lib/data/mockData";
import { filterEmployees, calculateStats, groupByBranch } from "../app/lib/utils/filterUtils";

const useEmployeeData = ({
  selectedBranch,
  selectedDepartment,
  startDate,
  endDate
} = {}) => {
  const filteredEmployees = useMemo(() => {
    return filterEmployees(mockEmployeeData, {
      selectedBranch,
      selectedDepartment,
      startDate,
      endDate,
    });
  }, [selectedBranch, selectedDepartment, startDate, endDate]);

  const stats = calculateStats(filteredEmployees);
  const grouped = groupByBranch(filteredEmployees);

  return { filteredEmployees, stats, grouped };
};

export default useEmployeeData;


