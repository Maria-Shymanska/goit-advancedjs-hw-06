/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DaysOfWeek): boolean {
  const weekendDays: DaysOfWeek[] = [DaysOfWeek.Saturday, DaysOfWeek.Sunday];
  return weekendDays.includes(day);
}


console.log(isWeekend(DaysOfWeek.Monday)); // false
console.log(isWeekend(DaysOfWeek.Sunday)); // true

export {};


























// enum DaysOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// function isWeekend(day: DaysOfWeek): boolean {
//   switch (day) {
//     case DaysOfWeek.Saturday:
//     case DaysOfWeek.Sunday:
//       return true;
//     default:
//       return false;
//   }
// }

// // Приклади використання:
// console.log(isWeekend(DaysOfWeek.Monday)); // false
// console.log(isWeekend(DaysOfWeek.Saturday)); // true

// export {};
