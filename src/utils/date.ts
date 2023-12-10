function getLastDaysPrevMonth(currentMonth: number, currentYear: number) {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const dayOfWeekFirstDay = firstDayOfMonth.getDay();
  const countLastDaysPrevMonth = dayOfWeekFirstDay;
  const prevMonth = getDaysOfMonth(currentMonth - 1, currentYear);
  const lastDaysPrevMonth = prevMonth.slice(
    prevMonth.length - countLastDaysPrevMonth,
  );

  return lastDaysPrevMonth;
}

function getFirstDaysNextMonth(currentMonth: number, currentYear: number) {
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const dayOfWeekLastDay = lastDayOfMonth.getDay();
  const countFirstDaysNextMonth = 6 - dayOfWeekLastDay;
  const nextMonth = getDaysOfMonth(currentMonth + 1, currentYear);
  const firstDaysNextMonth = nextMonth.slice(0, countFirstDaysNextMonth);

  return firstDaysNextMonth;
}

function getDaysOfMonth(currentMonth: number, currentYear: number) {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysOfMonthArray: Date[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    daysOfMonthArray.push(date);
  }

  return daysOfMonthArray;
}

export function getDaysOfCalendarSlide(
  currentMonth: number,
  currentYear: number,
) {
  const lastDaysPrevMonth = getLastDaysPrevMonth(currentMonth, currentYear);
  const daysCurrentMonth = getDaysOfMonth(currentMonth, currentYear);
  const firstDaysNextMonth = getFirstDaysNextMonth(currentMonth, currentYear);

  return [...lastDaysPrevMonth, ...daysCurrentMonth, ...firstDaysNextMonth];
}

export function generateDayId(date: Date) {
  const day = zeroPad(date.getDate());
  const month = zeroPad(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

function zeroPad(value: number) {
  if (value <= 9) {
    return `0${value}`;
  }

  return value;
}

export const monthsOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
