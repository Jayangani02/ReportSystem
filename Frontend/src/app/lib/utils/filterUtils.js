// Utility functions for filtering employee data

export const filterEmployees = (employees, filters) => {
  const { selectedBranch, selectedDepartment, startDate, endDate } = filters;

  return employees.filter(emp => {
    const branchMatch = selectedBranch === 'All Branches' || emp.branch === selectedBranch;
    const deptMatch = selectedDepartment === 'All Departments' || emp.department === selectedDepartment;
    const dateMatch = emp.joinDate >= startDate && emp.joinDate <= endDate;
    
    return branchMatch && deptMatch && dateMatch;
  });
};

export const calculateStats = (employees) => {
  const active = employees.filter(e => e.status === 'active').length;
  const inactive = employees.filter(e => e.status === 'inactive').length;
  
  return {
    active,
    inactive,
    total: active + inactive
  };
};

export const groupByBranch = (employees, branches, selectedBranch) => {
  const branchList = selectedBranch === 'All Branches' 
    ? branches.filter(b => b !== 'All Branches')
    : [selectedBranch];

  return branchList.map(branch => {
    const branchEmployees = employees.filter(e => e.branch === branch);
    return {
      name: branch,
      Active: branchEmployees.filter(e => e.status === 'active').length,
      Inactive: branchEmployees.filter(e => e.status === 'inactive').length,
    };
  });
};