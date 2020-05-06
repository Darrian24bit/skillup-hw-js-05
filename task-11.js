let obj = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const findBestEmployee = function (employees) {
  return Math.max(employees.values());
};

console.log(findBestEmployee(obj));
