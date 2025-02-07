export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  if (!numItems) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing List💥</em>
      </p>
    );
  }
  return (
    <footer className="stats">
      👜
      <em>
        {percentagePacked === 100
          ? "You got everything you need! Ready to go✈️"
          : ` You have ${numItems} items on your list, and you already packed ${numPacked}(${percentagePacked}%)`}
      </em>
    </footer>
  );
}
