export function groupByDate(data) {
  const grouped = {};
  data.forEach(chat => {
    if (!grouped[chat.date]) {
      grouped[chat.date] = [];
    }
    grouped[chat.date].push(chat);
  });
  return grouped;
}
