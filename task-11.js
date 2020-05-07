let obj = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const findBestEmployee = function (employees) {
  let max = 0;
  let maxName = null;

  for (const [name, task] of Object.entries(employees)) {
    if (max < task) {
      max = task;
      maxName = name + " " + task;
    }
  }

  return maxName;
};

console.log(findBestEmployee(obj));
