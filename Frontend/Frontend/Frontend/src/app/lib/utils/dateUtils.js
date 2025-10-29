// Utility functions for date handling

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

export const getDateOneYearAgo = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  return date.toISOString().split('T')[0];
};

export const isDateInRange = (dateString, startDate, endDate) => {
  return dateString >= startDate && dateString <= endDate;
};