import { useState } from "react";

const useFilters = () => {
  const [selectedBranch, setSelectedBranch] = useState("All Branches");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [startDate, setStartDate] = useState("2022-01-01");
  const [endDate, setEndDate] = useState("2025-12-31");

  return {
    selectedBranch,
    selectedDepartment,
    startDate,
    endDate,
    setSelectedBranch,
    setSelectedDepartment,
    setStartDate,
    setEndDate,
  };
};

export default useFilters;