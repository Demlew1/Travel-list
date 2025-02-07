import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  handleToggleItems,
  clearList,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            handleToggleItems={handleToggleItems}
            key={item.id}
            clearList={clearList}
          />
        ))}
      </ul>
      <button onClick={clearList}>Clear list</button>
    </div>
  );
}
