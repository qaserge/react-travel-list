import React from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = React.useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "purchased")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.purchased) - Number(b.purchased));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="purchased">Sort by purchased status</option>
        </select>
      </div>
    </div>
  );
}
