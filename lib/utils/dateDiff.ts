const getYearsSince = (dateString: string): number => {
  const startDate = new Date(dateString);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  if (currentDate.getMonth() < startDate.getMonth()) years--;

  return years;
};

export const formatYearsOfExperience = (dateString: string): string => {
  const years = getYearsSince(dateString);
  return years < 1 ? "< 1" : years.toString();
};
