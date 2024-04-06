import React, { useState } from "react";
import "./css/TransferList.css";

const TransferList = () => {
  const [leftItems, setLeftItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [rightItems, setRightItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

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

  const handleSelectItem = (item) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="transfer-list-container">
      <div className="list">
        <h2>Left List</h2>
        <ul>
          {leftItems.map((item) => (
            <li key={item} onClick={() => handleSelectItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="transfer-buttons">
        <button onClick={handleMoveToRight}>&gt;</button>
        <button onClick={handleMoveToLeft}>&lt;</button>
      </div>
      <div className="list">
        <h2>Right List</h2>
        <ul>
          {rightItems.map((item) => (
            <li key={item} onClick={() => handleSelectItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Usage example:

export default TransferList;
