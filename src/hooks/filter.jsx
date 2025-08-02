export default function filter(q, data) {
  let updated = [];
  if (q && data) {
    updated = data.filter((item) =>
      q.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(q.toLowerCase())
    );
  }
  return updated;
}
