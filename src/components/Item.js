export default function Item({ item, onDeleteItems, handleToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => handleToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
