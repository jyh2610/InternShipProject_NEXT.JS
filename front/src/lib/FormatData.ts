export const formatDate = (birthday: number | null) => {
  const selectedDate = new Date(birthday!); // birthday는 타임스탬프 값
  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 해주고 2자리로 포맷
  const day = String(selectedDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
