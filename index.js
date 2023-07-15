const addDays = require("date-fns/addDays");

let dateoftheyear = (days) => {
  let date1 = addDays(new Date(2020, 07, 22), days);
  console.log(
    `$date1.getDate()}-${date1.getMonth() + 1}-${date1.getFullYear()}`
  );
};
module.exports = dateoftheyear;
