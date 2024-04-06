import React, { useState } from "react";
import "./css/VerticalTabs.css"; // Import CSS file for styles

const VerticalTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="vertical-tabs">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

// Usage example:
const VerticalTabApp = () => {
  const tabs = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
  ];

  return (
    <div className="app">
      <h1>Vertical Tab Example</h1>
      <VerticalTab tabs={tabs} />
    </div>
  );
};

export default VerticalTabApp;
