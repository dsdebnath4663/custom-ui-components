import React, { useState } from "react";
import "./css/EnhancedTransferList.css"; // Import CSS file for styles

const EnhancedTransferList = ({ items }) => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);

  const handleMoveToRight = () => {
    const updatedLeftItems = leftItems.filter(
      (item) => !selectedItems.includes(item)
    );
    const updatedRightItems = [...rightItems, ...selectedItems];
    setLeftItems(updatedLeftItems);
    setRightItems(updatedRightItems);
    setSelectedItems([]);
  };

  const handleMoveToLeft = () => {
    const updatedRightItems = rightItems.filter(
      (item) => !selectedItems.includes(item)
    );
    const updatedLeftItems = [...leftItems, ...selectedItems];
    setRightItems(updatedRightItems);
    setLeftItems(updatedLeftItems);
    setSelectedItems([]);
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleCheckboxChange = (event, item) => {
    const isChecked = event.target.checked;
    const updatedSelectedItems = isChecked
      ? [...selectedItems, item]
      : selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedSelectedItems);
  };

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = () => {
    const updatedLeftItems = leftItems.filter((item) => item !== draggedItem);
    const updatedRightItems = [...rightItems, draggedItem];
    setLeftItems(updatedLeftItems);
    setRightItems(updatedRightItems);
    setDraggedItem(null);
  };

  return (
    <div className="transfer-list-container">
      <div className="list" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h2>Left List</h2>
        <ul>
          {leftItems.map((item) => (
            <li
              key={item}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={(e) => handleCheckboxChange(e, item)}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="transfer-buttons">
        {items.length > 0 && (
          <>
            <button onClick={handleMoveToRight}>Move All &gt;</button>
            <button onClick={handleMoveToLeft}>&lt; Move All</button>
          </>
        )}
      </div>
      <div className="list" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h2>Right List</h2>
        <ul>
          {rightItems.map((item) => (
            <li
              key={item}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={(e) => handleCheckboxChange(e, item)}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnhancedTransferList;
