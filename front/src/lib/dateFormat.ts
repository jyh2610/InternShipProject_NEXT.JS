export function getDateTime() {
  const date = new Date();
  const hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";

  // 12시간 형식으로 시간을 변환
  const formattedHours = hours > 12 ? hours - 12 : hours;

  const formattedDate =
    date.getFullYear() + "년 " + (date.getMonth() + 1) + "월 " + date.getDate() + "일 " + ampm + " " + formattedHours + "시 " + date.getMinutes() + "분 ";

  return formattedDate;
}
