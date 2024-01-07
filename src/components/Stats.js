function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You  ${numItems} items on your list, you have packed ${numPacked} ${
              numPacked > 1 ? "items" : "item"
            }
         (${percentage})%`}
      </em>
    </footer>
  );
}

export default Stats;
