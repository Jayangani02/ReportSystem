// // Mock Employee Data - Replace with API calls when connecting to database
// export const mockEmployeeData = [
//   { 
//     id: 1, 
//     name: 'John Doe', 
//     branch: 'Head Office', 
//     department: 'IT', 
//     status: 'active', 
//     joinDate: '2023-01-15',
//     email: 'john.doe@company.com',
//     position: 'Senior Developer'
//   },
//   { 
//     id: 2, 
//     name: 'Jane Smith', 
//     branch: 'Head Office', 
//     department: 'HR', 
//     status: 'active', 
//     joinDate: '2023-02-20',
//     email: 'jane.smith@company.com',
//     position: 'HR Manager'
//   },
//   { 
//     id: 3, 
//     name: 'Mike Johnson', 
//     branch: 'Head Office', 
//     department: 'IT', 
//     status: 'inactive', 
//     joinDate: '2022-11-10',
//     email: 'mike.johnson@company.com',
//     position: 'System Analyst'
//   },
//   { 
//     id: 4, 
//     name: 'Sarah Williams', 
//     branch: 'Branch A', 
//     department: 'Sales', 
//     status: 'active', 
//     joinDate: '2023-03-05',
//     email: 'sarah.williams@company.com',
//     position: 'Sales Executive'
//   },
//   { 
//     id: 5, 
//     name: 'Tom Brown', 
//     branch: 'Branch A', 
//     department: 'Marketing', 
//     status: 'active', 
//     joinDate: '2023-01-25',
//     email: 'tom.brown@company.com',
//     position: 'Marketing Specialist'
//   },
//   { 
//     id: 6, 
//     name: 'Emily Davis', 
//     branch: 'Branch A', 
//     department: 'Sales', 
//     status: 'inactive', 
//     joinDate: '2022-08-15',
//     email: 'emily.davis@company.com',
//     position: 'Sales Manager'
//   },
//   { 
//     id: 7, 
//     name: 'David Wilson', 
//     branch: 'Branch B', 
//     department: 'Finance', 
//     status: 'active', 
//     joinDate: '2023-04-10',
//     email: 'david.wilson@company.com',
//     position: 'Financial Analyst'
//   },
//   { 
//     id: 8, 
//     name: 'Lisa Anderson', 
//     branch: 'Branch B', 
//     department: 'Operations', 
//     status: 'active', 
//     joinDate: '2023-02-28',
//     email: 'lisa.anderson@company.com',
//     position: 'Operations Manager'
//   },
//   { 
//     id: 9, 
//     name: 'Robert Taylor', 
//     branch: 'Branch B', 
//     department: 'Finance', 
//     status: 'inactive', 
//     joinDate: '2022-12-05',
//     email: 'robert.taylor@company.com',
//     position: 'Accountant'
//   },
//   { 
//     id: 10, 
//     name: 'Maria Garcia', 
//     branch: 'Branch C', 
//     department: 'HR', 
//     status: 'active', 
//     joinDate: '2023-05-15',
//     email: 'maria.garcia@company.com',
//     position: 'HR Coordinator'
//   },
//   { 
//     id: 11, 
//     name: 'James Martinez', 
//     branch: 'Branch C', 
//     department: 'IT', 
//     status: 'active', 
//     joinDate: '2023-03-20',
//     email: 'james.martinez@company.com',
//     position: 'IT Support'
//   },
//   { 
//     id: 12, 
//     name: 'Patricia Lopez', 
//     branch: 'Branch C', 
//     department: 'Sales', 
//     status: 'inactive', 
//     joinDate: '2022-10-10',
//     email: 'patricia.lopez@company.com',
//     position: 'Sales Representative'
//   },
//   { 
//     id: 13, 
//     name: 'Christopher Lee', 
//     branch: 'Head Office', 
//     department: 'Finance', 
//     status: 'active', 
//     joinDate: '2023-06-01',
//     email: 'christopher.lee@company.com',
//     position: 'CFO'
//   },
//   { 
//     id: 14, 
//     name: 'Amanda White', 
//     branch: 'Branch A', 
//     department: 'Operations', 
//     status: 'active', 
//     joinDate: '2023-04-18',
//     email: 'amanda.white@company.com',
//     position: 'Operations Supervisor'
//   },
//   { 
//     id: 15, 
//     name: 'Daniel Harris', 
//     branch: 'Branch B', 
//     department: 'IT', 
//     status: 'active', 
//     joinDate: '2023-07-22',
//     email: 'daniel.harris@company.com',
//     position: 'Network Administrator'
//   },
// ];


export const mockEmployeeData = [
  { name: "Colombo", Active: 20, Inactive: 5 },
  { name: "Kandy", Active: 15, Inactive: 3 },
  { name: "Jaffna", Active: 10, Inactive: 2 },
];


// Available branches
export const branches = [
  'All Branches', 
  'Head Office', 
  'Colombo', 
  'Kalutara', 
  'Gampaha'
];

// Available departments
export const departments = [
  'All Departments', 
  'IT', 
  'HR', 
  'Sales', 
  'Marketing', 
  'Finance', 
  'Operations'
];